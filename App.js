import { Provider } from 'react-redux';
import { store } from './redux';
import { Navigation } from './src/Navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
