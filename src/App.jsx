import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
// import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import NoPageFound from "./pages/NoPageFound";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SinglePost from "./pages/SinglePost";
import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="single/:id" element={<SinglePost />} /> */}
        <Route path="single" element={<SinglePost />} />
        <Route path="author" element={<AuthorPage />} />

        {/* AUTHENTICATION ROUTES */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
