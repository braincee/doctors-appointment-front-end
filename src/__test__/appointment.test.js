import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MyAppointments from '../components/Appointments/MyAppointments';
import store from '../redux/configureStore';

describe('My Appointments page tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyAppointments />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});