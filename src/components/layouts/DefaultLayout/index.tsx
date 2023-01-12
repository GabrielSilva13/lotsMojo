import { Outlet } from "react-router-dom";
import { Header } from "../../Header";

export const DefaultLayout = () => {
  return (
    <main className="mx-auto">
      <Header />
      <Outlet />
    </main>
  );
};
