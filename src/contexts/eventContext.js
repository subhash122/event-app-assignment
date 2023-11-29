import { createContext, useContext, useState } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {
    const [eventList, setEventList] = useState([]);
    return (
        <EventContext.Provider
            value={{
                eventList,
                setEventList,
            }}
        >
            {children}
        </EventContext.Provider>
    );
}
const useEvent = () => useContext(EventContext);


export { EventProvider, useEvent }