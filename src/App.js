// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Pages
import Activity1 from "./pages/activity1";
import Activity2 from "./pages/activity2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/activity1" element={<Activity1 />} />
        <Route exact path="/activity2" element={<Activity2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
