import './App.css';
import { Route, Routes } from 'react-router';
import Example from './pages/example';
import { Home } from './pages/home';
import { Notifikasi } from './pages/notifikasi';
import { DetailBarang } from './pages/deskripsibarang';


function App() {
  return (
    <Routes>
      <Route index element={<Example />} />
      <Route path="example" element={<Example />} />
      <Route path="home" element={<Home/>} />
      <Route path="notifikasi" element={<Notifikasi />} />
            <Route path="deskripsibarang" element={<DetailBarang />} />
    </Routes>
  );
}

export default App;
