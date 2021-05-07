import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';

function App() {
  return (
    <Router>
      <SwitchRoutesApp />
    </Router>
  );
}

export default App;
