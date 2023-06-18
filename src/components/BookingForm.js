import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {fetchAPI, submitAPI} from '../Api'

export default function BookingForm(props) {
    const navigate = useNavigate();
    let {bookingRecord, setBookingRecord} = props;
    let [listAvailTime, setListAvailTime] = useState([]);
    let [errorState, setErrorState] = useState({});
    let [focusState, setFocusState] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        let ready = true;
        let tmpErrorState = {}
        for (const key in bookingRecord) {
            tmpErrorState[key] = validate(key, bookingRecord[key]);
            ready = ready && (tmpErrorState[key] === '');
        }
        setErrorState(tmpErrorState);

        if (ready) {
            if (submitAPI(bookingRecord)) {
                console.log('Submit successfully');
                navigate('/confirmation');
            }
        }
    }

    function validate(key, value) {
        if (key === 'name') {
            if (value.trim() === '')
                return 'must not empty';
        }
        if (key === 'phone') {
            if (value.trim() === '')
                return 'must not empty';
            let pattern = /^\+*(\d+\s*)+$/;
            if (!pattern.test(value.trim()))
                return 'not a valid phone number'
        }
        return '';
    }

    function handleValidation(key, value) {
        let validateMessage = validate(key, value);
        if (validateMessage !== '' && focusState[key] !== undefined) {
            setErrorState({...errorState, [key]: validateMessage});
            return false;
        } else
            setErrorState({...errorState, [key]: ''});
        return true;
    }

    function handleFocus(e) {
        let key = e.target.id.split('-')[1];
        setFocusState({...focusState, [key]: true});
        // console.log(focusState);
    }

    function handleChange(e) {
        let key = e.target.id.split('-')[1];
        let value = e.target.value;
        handleValidation(key, value);

        bookingRecord = {...bookingRecord, [key]: value};
        setBookingRecord(bookingRecord);
        // console.log(bookingRecord);
    }

    useEffect(() => {
        console.log('Fetch list of available time');
        let results = fetchAPI(new Date(bookingRecord.date));
        setListAvailTime(results);
        let tmpBookingRecord = {...bookingRecord, time: results[0]};
        setBookingRecord(tmpBookingRecord);

        // eslint-disable-next-line
    }, [bookingRecord.date])

    return (
        <main className="container booking">
            <h1>Booking Form</h1>
            <form>
                <label htmlFor="res-name">Your name:</label>
                <div>
                    <input type='text' id='res-name' value={bookingRecord.name} onChange={handleChange}
                           onFocus={handleFocus}/>
                    {errorState.name !== '' && <div className='error'>{errorState.name}</div>}
                </div>

                <label htmlFor="res-phone">Phone number:</label>
                <div>
                    <input type='tel' id='res-phone' value={bookingRecord.phone} onChange={handleChange}
                           onFocus={handleFocus}/>
                    {errorState.phone !== '' && <div className='error'>{errorState.phone}</div>}
                </div>

                <label htmlFor="res-date">Choose date:</label>
                <input type="date" id="res-date" onChange={handleChange} value={bookingRecord.date}/>
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time" value={bookingRecord.time} onChange={handleChange}>
                    {listAvailTime.map((v, idx) => {
                        return (<option key={idx}>{v}</option>);
                    })}
                </select>
                <label htmlFor="res-guests">Number of guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="res-guests" onChange={handleChange}/>
                <label htmlFor="res-occasion">Occasion:</label>
                <select id="res-occasion" value={bookingRecord.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <div className="submit"><input type="submit" value="Make Your Reservation" onClick={handleSubmit}/>
                </div>
            </form>
        </main>
    )
}