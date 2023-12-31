import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Start from '../../staff/pages/Start/Start';
import Orders from "../../staff/pages/Orders/Orders";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staff" element={<Start />} />
            <Route path="/staff/orders" element={<Orders />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes