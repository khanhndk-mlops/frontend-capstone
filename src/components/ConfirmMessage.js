export default function ConfirmMessage(props) {
    const {bookingRecord} = props
    return (
        <div className='container confirmation'>
            <h1>Booking Successfully</h1>
            <p>Congratulation! Thanks, <b>{bookingRecord.name}</b>. </p>
            <p>
                You have successfully booked
                on <b>{bookingRecord.date}</b> at <b>{bookingRecord.time}</b> with <b>{bookingRecord.guests}</b> guest(s).
            </p>
            <p>We will send a notification to the phone number <b>{bookingRecord.phone}</b> to remind you on that date.
            </p>
        </div>
    )
}