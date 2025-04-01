import { Outlet } from "react-router-dom";
import Book from "../pages/Book";

export default function BookLayout() {
    return (
        <div>
            <Book/>
            {/* <Outlet/> */}
        </div>
    );
}