import Navbar from "./Components/Navbar"
import { Routes, Route } from 'react-router-dom'
import FindSW from './pages/FindSW'
import GetNumber from './pages/GetNumber'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/findsw" component={FindSW} />
        <Route path="/getnum" component={GetNumber} />
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
