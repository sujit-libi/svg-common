import logo from './logo.svg';
import './App.css';

// import { Avatar, Avenger } from './assets/svg';
import * as SvgIcon from './assets/svg';

function App() {
  return (
    <div className="App">
      <SvgIcon.Avatar />
      <SvgIcon.Avenger height={300} width={300} />
    </div>
  );
}

export default App;
