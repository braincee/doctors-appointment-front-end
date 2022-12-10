import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import BookAppointment from '../components/Appointments/BookAppointment';
import store from '../redux/configureStore';

describe('Book Appointment form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <BookAppointment />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Book Appointment page has a "Book Appointment" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <BookAppointment />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Book Appointment')).toBeTruthy();
  });
});
