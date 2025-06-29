import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form inputs', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('prevents submission with past date', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    const pastDateString = pastDate.toISOString().split('T')[0];

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: pastDateString } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button'));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test('calls submitForm when form is valid', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const futureDateString = futureDate.toISOString().split('T')[0];

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: futureDateString } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });

    fireEvent.click(screen.getByRole('button'));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: futureDateString,
      time: '17:00',
      guests: '2',
      occasion: 'Anniversary',
    });
  });
});
