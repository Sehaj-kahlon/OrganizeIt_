import React, { useState } from "react";
import "./components.css";

function Homepage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const TodayDate = (date) => {
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${day}/${weekday}/${month}`;
    return { formattedDate, year };
  };

  const { formattedDate, year } = TodayDate(currentDate);

  const goToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDay);
  };

  const goToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
  };

  return (
    <div>
      <div className="day_date">
        <h2>{year}</h2>
        <div className="controllers">
          <i className="fa-solid fa-chevron-left" onClick={goToPreviousDay}></i>
          <h3>{formattedDate}</h3>
          <i className="fa-solid fa-chevron-right" onClick={goToNextDay}></i>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
