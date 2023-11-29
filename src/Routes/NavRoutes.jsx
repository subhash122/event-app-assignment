import { Routes, Route } from "react-router-dom";
import { EventCreation } from "../components/EventCreation/EventCreation";
import { EventListing } from "../components/EventListing/EventListing";

const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/events" element={<EventListing/>}></Route>
            <Route path="/" element={<EventCreation/>}></Route>
        </Routes>
    )
}
export { NavRoutes }