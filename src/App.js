import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import News from "./pages/News";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
