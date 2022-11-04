import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/index";
import { RouterLayout } from "./common/RouterLayout";
import { LoginPage } from "./pages/login/index";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
