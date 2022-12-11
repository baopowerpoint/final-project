import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";
import Login from "./pages/login";
import About from "./pages/about";
import AdminPage from "./pages/AdminPage";
import LearningArea from "./pages/learningArea";
import PrivateRoute from "./pages/privateRoute";
import Profile from "./pages/Profile";
import { useCollection } from "./hooks/useCollection";
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProductManaging from "./pages/ProductManaging";
import SpecifiedProduct from "./pages/specifiedProduct";

function App() {
  const { user } = useAuthContext();
  const [isPurchased, setIsPurchased] = useState(false);
  const { documents: users } = useCollection("users");
  useEffect(() => {
    if (users && user) {
      const a = users.find((currentUser) => currentUser.id === user.uid);

      if (a.isPurchased) {
        setIsPurchased(a.isPurchased);
      }
    }
  }, [users, user]);
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courses/contact-payment" element={<Contact />} />
          <Route path="/products/" element={<Collection />} />
          <Route path="/products/:name" element={<Collection />} />
          <Route path="/products/:name/:priceLevel" element={<Collection />} />
          <Route
            path="/products/:name/:priceLevel/:id"
            element={<SpecifiedProduct />}
          />
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
          <Route path="/product-managing" element={<ProductManaging />} />
          {isPurchased ? (
            <Route path="/courses/learning/:id" element={<LearningArea />} />
          ) : (
            <Route
              path="/courses/learning/:id"
              element={<NotFound isPurchased={false} />}
            />
          )}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
