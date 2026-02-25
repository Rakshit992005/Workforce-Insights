import LoginPage from './pages/LoginPage'
import { Routes, Route } from "react-router-dom";
import ListPage from './pages/ListPage';
import DetailsPAge from './pages/DetailsPAge';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/listpage" element={<ListPage />} />
      <Route path="/details" element={<DetailsPAge />} />
    </Routes>
  )
}

export default App