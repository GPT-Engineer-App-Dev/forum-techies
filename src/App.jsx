import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Category from "./pages/Category.jsx";
import Thread from "./pages/Thread.jsx";
import NewThread from "./pages/NewThread.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/category/:categoryName" element={<Category />} />
        <Route exact path="/thread/:threadId" element={<Thread />} />
        <Route exact path="/new-thread" element={<NewThread />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;