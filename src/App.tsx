import './App.css';
import { Route, Routes } from 'react-router';
import Example from './pages/example';
// import { Halaman } from './pages/halaman';
// import Identitas from './pages/identitas';
import Identitas from './pages/identitas';
import SelectItems from './pages/select-items';
import { Home } from './pages/home';
import SelectDates from './pages/select-dates';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="coming-soon" element={<Example />} />
      <Route path="select-dates" element={<SelectDates />} />
      <Route path="identitas" element={<Identitas />} />
      <Route path="select-items" element={<SelectItems />} />
    </Routes>
  );
}

export default App;
