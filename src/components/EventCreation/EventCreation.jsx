import {
    AppstoreOutlined,
    CalendarTwoTone, DownOutlined,
} from '@ant-design/icons';
import { DatePicker, TimePicker, Button, Divider, Dropdown, Space, Input, notification } from 'antd';
import { useState } from 'react';
import { locationMapping } from '../../Utils/Util';
import { useNavigate } from 'react-router-dom';
import { useEvent } from '../../contexts/eventContext';


const EventCreation = () => {
    const { eventList, setEventList } = useEvent();
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [tickets, setTickets] = useState('');
    const [capacity, setCapacity] = useState('');
    const [visibility, setVisibility] = useState('');
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate()
    const items = [{
        key: 0,
        label: 'Offline',
    },
    {
        key: 1,
        label: 'Virtual',
    },]
    const changeStartDate = (date, dateString) => {
        setStartDate(date);
    }
    const changeStartTime = (time, timeString) => {
        setStartTime(time);
    }
    const changeEndDate = (date, dateString) => {
        setEndDate(date)
    }
    const changeEndTime = (time, timeString) => {
        setEndTime(time);
    }
    const changeEventName = (event) => {
        setEventName(event.target.value)
    }
    const setLocation = (e) => {
        setEventLocation(locationMapping[e.key])

    }
    const routeToListing = () => {
        navigate('/events')
    }
    const createEvent = () => {
        if (startDate && startTime && endDate && endTime && eventName) {
            let eventObj = {
                startDate: startDate.format('YYYY-MM-DD'),
                startTime: startTime.format('HH:mm'),
                endDate: endDate.format('YYYY-MM-DD'),
                endTime: endTime.format('HH:mm'),
                timeStamp: new Date(`${startDate.format('YYYY-MM-DD')} ${startTime.format('HH:mm')}`),
                eventName, eventLocation, tickets, capacity, visibility,
            }

            setEventList([...eventList, eventObj]);
            api.success({
                description: 'Event has been created successfully.',
                placement: 'top',
            });
            setStartDate(null); setStartTime(null); setEndDate(null); setEndTime(null);
            setEventName(''); setEventLocation(''); setCapacity(''); setTickets(''); setVisibility('')
        } else {
            api.error({
                description: 'Please provide all necessary fields.',
                placement: 'top',
            });
        }
    }
    return (

        <div className='flex flex-col items-center h-screen bg-gray-100 p-5 py-5'>
            {contextHolder}
            <h3 className='text-gray-900 font-semibold text-lg w-9/12 p-3'>
                <span className=' cursor-pointer' onClick={routeToListing}><AppstoreOutlined className='mr-2' />Events</span>
            </h3>
            <div className="bg-white border-black w-9/12 rounded p-5 overflow-y-scroll">
                <h3 className='font-bold text-2xl my-3'>Create Event</h3>
                <input className="my-2 h-14 w-full text-xl" placeholder='Event Name' value={eventName} onChange={changeEventName}></input>
                <div className="flex">
                    <CalendarTwoTone />
                    <div className='bg-gray-100 w-full rounded-md ml-3'>
                        <div className='flex m-2'>
                            <p className='mr-3'>Start</p>
                            <DatePicker value={startDate} onChange={changeStartDate} />
                            <TimePicker value={startTime} onChange={changeStartTime} format={'HH:mm'} />
                        </div>
                        <div className='flex m-2'>
                            <p className='mr-3'>End</p>
                            <DatePicker value={endDate} onChange={changeEndDate} disabledDate={(current) => current && current.isBefore(startDate)} />
                            <TimePicker value={endTime} onChange={changeEndTime} format={'HH:mm'} />
                        </div>

                    </div>
                </div>
                <div className="flex">
                    <CalendarTwoTone />
                    <div className='bg-gray-100 w-full rounded-md mt-3 ml-3'>
                        <div className='m-2'>
                            <h4 className='text-gray-600'>Add Event Location</h4>
                            <Dropdown className='mt-2' menu={{ items, selectable: true, onSelect: setLocation }} ><a onClick={(e) => e.preventDefault()}>
                                <Space className='text-gray-600'>
                                    Offline location or virtual Link
                                    <DownOutlined />
                                </Space>
                            </a></Dropdown>
                        </div>

                    </div>
                </div>
                <p className='text-gray-800 text-lg mt-6 mb-2'>Event Options</p>
                <div className='bg-gray-100 w-full rounded-md my-3'>
                    <div className='flex justify-between m-3 pt-2'>
                        <p className='text-gray-600'> Tickets</p>
                        <Input className='w-1/6 justify-self-end' value={tickets} onChange={(e) => { setTickets(e.target.value) }} />
                    </div>
                    <Divider className='margin-0'></Divider>
                    <div className='flex justify-between m-3'>
                        <p className='text-gray-600'> Capacity</p>
                        <Input className='w-1/6 justify-self-end' value={capacity} onChange={(e) => { setCapacity(e.target.value) }} />
                    </div>
                    <Divider className='margin-0'></Divider>
                    <div className='flex justify-between m-3'>
                        <p className='text-gray-600'> Visibility</p>
                        <Input className='w-1/6 justify-self-end' value={visibility} onChange={(e) => { setVisibility(e.target.value) }} />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Button className='w-1/2' onClick={createEvent}>Create Event</Button>
                </div>
            </div>
        </div>
    )
}

export { EventCreation }