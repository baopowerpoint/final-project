import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";
import Products from "./pages/products";
import Login from "./pages/login";
import About from "./pages/about";
import AdminPage from "./pages/AdminPage";
import LearningArea from "./pages/learningArea";
import PrivateRoute from "./pages/privateRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/courses/learning" element={<LearningArea />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
