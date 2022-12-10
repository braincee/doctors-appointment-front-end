import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddDoctor from '../components/Doctors/AddDoctor';
import store from '../redux/configureStore';

describe('Add doctor form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddDoctor />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Add doctor page has a "add" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <AddDoctor />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Submit')).toBeTruthy();
  });
});