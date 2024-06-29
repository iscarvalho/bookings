import ReactDOM from 'react-dom/client';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from './store/configureStore'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
