import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/Cake/CakeContainer';
import { Provider } from 'react-redux';
import { Store } from './Components/Store';
import IceCreamView from './Components/IceCream.js/IceCreamView';
import ShowUserData from './Components/FetchWithRedux/ShowUserData';


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      {/* <CakeContainer/> */}
      {/* <IceCreamView/> */}
      <ShowUserData/>
      </Provider>
    </div>
  );
}

export default App;
