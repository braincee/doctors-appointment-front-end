import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import store from '../redux/configureStore';

describe('Splash screen tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <SplashScreen />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Splash page has a sign up link', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <SplashScreen />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Sign up')).toBeTruthy();
  });

  it('Splash page has a log in link', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <SplashScreen />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Log in')).toBeTruthy();
  });
});
