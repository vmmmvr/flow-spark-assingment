import React, { useState } from 'react';

const DatePicker = (props: {dateSetter: (value: any) => void}) => {
    // State for current month and year
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // State for selected date
    const [selectedDate, setSelectedDate] = useState(null);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Functions to handle month change
    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDay = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)

    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create an array for the days
    const daysArray = [];

    // Fill the array with empty slots for the starting day
    for (let i = 0; i < startingDay; i++) {
        daysArray.push(null);
    }

    // Fill the rest of the array with the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
    }

    // Function to handle date selection
    const handleDateClick = (day) => {
        setSelectedDate(new Date(currentYear, currentMonth, day));
        props.dateSetter(new Date(currentYear, currentMonth, day));
    };

    // Function to check if a date is selected
    const isSelectedDate = (day) => {
        if (!selectedDate) return false;
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
        );
    };

    return (
        <div>
            <span>Select a date</span>
           <div className='flex items-center rounded-t-lg  p-2 justify-between sm:w-80 w-full border border-primary-main'>
             {/* Display Selected Date */}
             {selectedDate && (
                <div className=" text-center text-gray-700">
                    Selected Date: {selectedDate.toDateString()}
                </div>
            )}
            <i className="fa-regular fa-calendar"></i>
           </div>
            <div className="bg-white rounded-b-lg shadow p-6 sm:w-80 w-full  border border-t-0 border-primary-main">

                {/* Header with Month and Year */}
                <div className="flex items-center justify-between mb-4">
                    <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-700">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div className="text-lg font-medium text-gray-800">
                        {monthNames[currentMonth]} {currentYear}
                    </div>
                    <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-700">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
                {/* Weekday Labels */}
                <div className="grid grid-cols-7 gap-1 text-center">
                    <div className="text-gray-600">Su</div>
                    <div className="text-gray-600">Mo</div>
                    <div className="text-gray-600">Tu</div>
                    <div className="text-gray-600">We</div>
                    <div className="text-gray-600">Th</div>
                    <div className="text-gray-600">Fr</div>
                    <div className="text-gray-600">Sa</div>

                    {/* Calendar Days */}
                    {daysArray.map((day, index) => (
                        day ? (
                            <button
                                key={index}
                                className={`p-1 rounded-full ${isSelectedDate(day) ? 'bg-primary-main text-white' : 'hover:bg-primary-light'
                                    }`}
                                onClick={() => handleDateClick(day)}
                            >
                                {day}
                            </button>
                        ) : (
                            <div key={index}></div>
                        )
                    ))}
                </div>
            </div>
        </div>

    );
};

export default DatePicker;
