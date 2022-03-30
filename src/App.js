import './App.css';
import {UseToggle} from "./UseToggle";

function App() {
    const [on, setOn] = UseToggle(true);
  return (
    <div className="Toggle">
        <button className={on ? 'on' : 'off'} on={on} onClick={() => { setOn.onToggle() }}>
            <div className="switch"/>
        </button>
    </div>
  );
}

export default App;
