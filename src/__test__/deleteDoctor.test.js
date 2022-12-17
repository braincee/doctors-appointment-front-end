import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DeleteDoctor from '../components/Doctors/DeleteDoctor';
import store from '../redux/configureStore';

describe('Delete doctor form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteDoctor />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Delete doctor page has a "delete" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <DeleteDoctor />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Delete')).toBeTruthy();
  });
});
