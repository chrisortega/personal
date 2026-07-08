
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Therians from './pages/therians';
import Sonic4 from './pages/sonic4';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/therians" element={<Therians />} />
      <Route path="/sonic4" element={<Sonic4 />} />
    </Routes>
  </BrowserRouter>
}
export default App
