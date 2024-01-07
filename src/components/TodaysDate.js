import React from "react";

const TodaysDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);

    return (
        <div>
            <h2>{formattedDate}</h2>
        </div>
    );
};

export default TodaysDate;
