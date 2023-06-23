import {render, screen, fireEvent} from '@testing-library/react';
import App from "./App";

function initialize(){
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Home' }));
  const btnReserveTable = screen.getByText("Reserve Table");

  expect(btnReserveTable).toBeInTheDocument();
  fireEvent.click(btnReserveTable);

  const txtBookingForm = screen.getByText("Booking Form");
  expect(txtBookingForm).toBeInTheDocument();
}

test('booking successfully', () => {
  initialize();
  const test_case = {
    name: 'Khanh',
    phone: '+61404345678',
    date: '2023-06-22',
    guests: 2
  }
  const inputName = screen.getByLabelText('Your name:');
  expect(inputName).toBeInTheDocument();
  fireEvent.change(inputName, {target: {value: test_case.name}});

  const inputPhone = screen.getByLabelText('Phone number:');
  expect(inputPhone).toBeInTheDocument();
  fireEvent.change(inputPhone, {target: {value: test_case.phone}})

  const inputDate = screen.getByLabelText('Choose date:');
  expect(inputDate).toBeInTheDocument();
  fireEvent.change(inputDate, {target: {value: test_case.date}});

  const inputGuests = screen.getByLabelText('Number of guests:');
  expect(inputGuests).toBeInTheDocument();
  fireEvent.change(inputGuests, {target: {value: test_case.guests}});

  const btnSubmit = screen.getByRole('button');
  expect(btnSubmit).toBeInTheDocument();
  fireEvent.click(btnSubmit);

  const lblConfirm = screen.getByText('Booking Successfully');
  expect(lblConfirm).toBeInTheDocument();

  expect(screen.getByText(test_case.name)).toBeInTheDocument();
  expect(screen.getByText(test_case.phone)).toBeInTheDocument();
  const spanDate = screen.getByText(test_case.date)
  expect(spanDate).toBeInTheDocument();
  const p2 = spanDate.closest('p');
  expect(p2).toHaveTextContent(test_case.guests + ' guest(s)');
});

test('validate name and phone not empty', () => {
  initialize();

  const btnSubmit = screen.getByRole('button');
  expect(btnSubmit).toBeInTheDocument();
  fireEvent.click(btnSubmit);

  expect(screen.getByText('name must not empty')).toBeInTheDocument();

  expect(screen.getByText('phone must not empty')).toBeInTheDocument();
});

test('validate phone format', () => {
  initialize();

  const inputPhone = screen.getByLabelText('Phone number:');
  expect(inputPhone).toBeInTheDocument();
  fireEvent.change(inputPhone, {target: {value: 'abc'}})

  const btnSubmit = screen.getByRole('button');
  expect(btnSubmit).toBeInTheDocument();
  fireEvent.click(btnSubmit);

  expect(screen.getByText('not a valid phone number')).toBeInTheDocument();
});