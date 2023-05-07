import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home/Home"
import About from "./Aboutus/Aboutus"
import Hell from "./Hell/Hell"
import Heaven from "./Heaven/Heaven"
import NavigationBar from "./Cumponents/Cumponents"
import Crashexo from "./Crashexo/Crashexo";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <Home />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <NavigationBar />
              <About />
            </>
          }
        />
        <Route
          path="/Hell"
          element={
            <>
              <NavigationBar />
              <Hell />
            </>
          }
        />
        <Route
          path="/Heaven"
          element={
            <>
              <NavigationBar />
              <Heaven />
            </>
          }
        />
        <Route path="/crashexo" element={<Crashexo />} />
      </Routes>
    </Router>
  );
}
