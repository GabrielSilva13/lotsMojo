import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { PropertyPage } from "./pages/PropertyPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Route>
    </Routes>
  );
};
