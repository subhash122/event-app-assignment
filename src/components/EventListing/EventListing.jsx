import { mapMonth } from "../../Utils/Util"
import { Divider } from "antd"
import { useEvent } from "../../contexts/eventContext";
import { EventCard } from "../EventCard/EventCard";

const EventListing = () => {
    const { eventList } = useEvent();
    let arr = eventList;
    arr.sort((first, second) => {
        const timeFirst = first.timeStamp.getTime();
        const timeSecond = second.timeStamp.getTime();
        return timeFirst - timeSecond;
    })


    return (<div className="bg-gray-100 p-3 h-screen overflow-scroll flex justify-center">
        <div className="w-4/5">
            <h2 className='font-bold text-4xl py-4 mb-6'>Events</h2>
            {
                arr.map((item, index) => (< div key={index}>
                    {
                        index != 0 && item.startDate == arr[index - 1].startDate && <>
                            <div className="flex  w-full justify-end my-4">
                                <EventCard item={item}></EventCard>
                            </div>
                        </>
                    }
                    {
                        (index == 0 || item.startDate != arr[index - 1].startDate) &&
                        <>
                            <Divider></Divider>
                            <div key={index} className="flex  w-full justify-between my-4">
                                <h1 className="w-1/5 font-medium">{mapMonth(item.timeStamp.getMonth())} {item.timeStamp.getDate()}</h1>
                                <EventCard item={item}></EventCard>
                            </div>
                        </>
                    }
                </div>))
            }
        </div>
    </div>)
}

export { EventListing }