import './App.css';
import { Route, Routes } from 'react-router';
import Example from './pages/example';
import { Home } from './pages/home';

function App() {
  return (
    <Routes>
      <Route index element={<Example />} />
      <Route path="example" element={<Example />} />
      <Route path="home" element={<Home/>} />
    </Routes>
  );
}

export default App;
