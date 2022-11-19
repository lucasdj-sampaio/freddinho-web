import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CustomRoutes from './routes/index.tsx';
import { persistor, store } from './store/index.ts';
import GlobalStyles from './styles/GlobalStyles.tsx';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate load={null} persistor={persistor}>
          <Router>
            <GlobalStyles />
            <CustomRoutes />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
