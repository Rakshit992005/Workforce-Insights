import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailsPAge from "./pages/DetailsPAge";
import ImageCapturePage from "./pages/ImageCapturePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AddEmployee from "./pages/AddEmployee";
import { WorkforceProvider } from "./context/WorkforceContext";

const App = () => {
  return (
    <WorkforceProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/details" element={<DetailsPAge />} />
        <Route path="/capture" element={<ImageCapturePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </WorkforceProvider>
  );
};

export default App;
