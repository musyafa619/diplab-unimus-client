import "./App.css";
import { Route, Routes } from "react-router";
import Example from "./pages/example";
import { Halaman } from "./pages/halaman";
import Identitas from "./pages/identitas";
import PilihBarang from "./pages/pilihBarang";

function App() {
  return (
    <Routes>
      <Route index element={<Example />} />
      <Route path="example" element={<Example />} />
      <Route path="deli" element={<Halaman />} />
      <Route path="identitas" element={<Identitas />} />
      <Route path="pilih-barang" element={<PilihBarang />} />
    </Routes>
  );
}

export default App;
