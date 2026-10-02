import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Modelos } from './pages/Modelos/Modelos';
import { Moto } from './pages/Moto/Moto';
import { Financiamento } from './pages/Financiamento/Financiamento';
import { Lojas } from './pages/Lojas/Lojas';
import { Contato } from './pages/Contato/Contato';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="modelos" element={<Modelos />} />
        <Route path="modelos/:id" element={<Moto />} />
        <Route path="financiamento" element={<Financiamento />} />
        <Route path="lojas" element={<Lojas />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
