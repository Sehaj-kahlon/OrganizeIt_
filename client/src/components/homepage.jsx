import React from "react";
import "./components.css";
function Homepage() {
  const TodayDate = () => {
    const today = new Date();
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(today);
    const year = today.getFullYear();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      today
    );
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${day}/${weekday}/${month}`;
    return { formattedDate, year };
  };
  const { formattedDate, year } = TodayDate();
  return (
    <div>
      <div className="day_date">
        <h2>{year}</h2>
        <h3>{formattedDate}</h3>
      </div>
    </div>
  );
}

export default Homepage;
