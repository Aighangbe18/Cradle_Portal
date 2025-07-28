// src/components/Calendar.tsx
import React, { useState } from "react";
import "./Calender.css"; // Optional: for custom calendar styles

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const renderCalendarCells = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-cell empty" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(
        <div
          key={day}
          className="calendar-cell"
          onClick={() =>
            alert(`You clicked ${day}/${currentMonth + 1}/${currentYear}`)
          }
        >
          {day}
        </div>
      );
    }

    return cells;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header d-flex justify-content-between align-items-center">
        <button onClick={goToPreviousMonth} className="btn btn-sm btn-light">
          ‹
        </button>
        <h5 className="mb-0">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h5>
        <button onClick={goToNextMonth} className="btn btn-sm btn-light">
          ›
        </button>
      </div>
      <div className="calendar-grid days mt-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-cell day text-center fw-bold">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid mt-1">{renderCalendarCells()}</div>
    </div>
  );
};

export default Calendar;
