import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <div className="bg-[#fdf7f0]">
            <Navbar />
            <div className="h-full">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}