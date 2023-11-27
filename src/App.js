import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/Cake/CakeContainer';
import { Provider } from 'react-redux';
import { Store } from './Components/Store';
import IceCreamView from './Components/IceCream.js/IceCreamView';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      {/* <CakeContainer/> */}
      <IceCreamView/>
      </Provider>
    </div>
  );
}

export default App;
