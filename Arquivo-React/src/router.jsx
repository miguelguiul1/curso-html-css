import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app/App";
import Contador from "./pages/contador/contador";
import Contato from "./pages/contato/contato";
import Digitar from "./pages/digitar/digitar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/digitar" element={<Digitar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;