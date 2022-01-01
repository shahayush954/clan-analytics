import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider store={store}> 
      <div className="app__container">
        <SearchBar />
      </div>
    </Provider>
  );
}

export default App;
