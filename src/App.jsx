import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import { HeaderApp } from 'components/common/HeaderApp';
import { FooterApp } from 'components/common/FooterApp';

function App() {
  return (
    <Router>
      <HeaderApp />
      <SwitchRoutesApp />
      <FooterApp />
    </Router>
  );
}

export default App;
