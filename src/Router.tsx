import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RouterLayout } from "./common/RouterLayout";
import { LoginPage } from "./pages/login";
import { CharacterPage } from "./pages/character";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
