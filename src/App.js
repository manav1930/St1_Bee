import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Register from './pages/Register';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/register/:id" element={ <Register/> } />

        </Routes>
        </Router>
    </>
  );
}

export default App;
