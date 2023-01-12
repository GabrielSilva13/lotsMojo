import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
