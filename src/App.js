import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/country/:countryName" element={<Details />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
