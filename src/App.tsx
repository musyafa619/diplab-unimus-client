import "./App.css";
import { Route, Routes } from "react-router";
import Example from "./pages/example";
import { Halaman } from "./pages/halaman";
import Identitas from "./pages/identitas";
import IdentitasNew from "./pages/identitasnew";
import PilihBarang from "./pages/pilihBarang";
import { Home } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route index element={<Example />} />
      <Route path="example" element={<Example />} />
      <Route path="deli" element={<Halaman />} />
      <Route path="identitas" element={<Identitas />} />
      <Route path="identitas-new" element={<IdentitasNew />} />
      <Route path="pilih-barang" element={<PilihBarang />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
