import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { GlobalStyles } from './styles/global';


export function App() {
  return (
    <Router>
      <Home />
      <GlobalStyles />
    </Router>
  );
}

export default App;
