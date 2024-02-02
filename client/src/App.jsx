import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PhoneDetails from "./pages/PhoneDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/phones" />} />
      <Route path="/phones" element={<Home />} />
      <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
