
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Data from "./pages/Data";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="oshi_no_ko" element={<Data id="52034"/>} />
          <Route path="bocchi_the_rock" element={<Data id="47917"/>} />
          <Route path="steins_gate" element={<Data id="9253"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;