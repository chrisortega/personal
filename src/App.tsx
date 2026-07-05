
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Therians from './pages/therians';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/therians" element={<Therians />} />

    </Routes>

  </BrowserRouter>
}
export default App
