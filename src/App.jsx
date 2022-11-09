import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './routes/index.tsx';
import store from './store/index.ts';
import GlobalStyles from './styles/GlobalStyles.tsx';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <GlobalStyles />
          <CustomRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
