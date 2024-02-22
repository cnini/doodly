import { store } from './redux';
import { Navigation } from './src/Navigation/Navigation';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
