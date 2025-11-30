import './App.css';
import { Route, Routes } from 'react-router';
import Example from './pages/example';

function App() {
  return (
    <Routes>
      <Route index element={<Example />} />
      <Route path="example" element={<Example />} />
    </Routes>
  );
}

export default App;
