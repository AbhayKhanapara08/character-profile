import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "../pages/character-detail";
import Characters from "../pages/charcters";

const RouteBase = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Characters />}></Route>
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteBase;
