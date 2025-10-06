import { Outlet } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <MyNavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
