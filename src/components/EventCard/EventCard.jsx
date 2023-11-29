
const EventCard = ({ item }) => {
    return (
        <div className="w-4/5  bg-white p-3 rounded">
            <p className="text-slate-400">{item.timeStamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
            <h1 className="text-semibold text-xl">{item.eventName}</h1>
            <p>By octaml</p>
            <p className="text-slate-400">{item.eventLocation}</p>
        </div>
    )
}
export { EventCard }