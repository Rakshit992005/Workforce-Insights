import LoginPage from './pages/LoginPage'
import { Routes, Route } from "react-router-dom";
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/listpage" element={<ListPage />} />
    </Routes>
  )
}

export default App