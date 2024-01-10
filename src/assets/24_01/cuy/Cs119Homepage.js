import React from "react";

const Cs119 = () => {
    const today = new Date();
    const start = new Date("2024-01-01");
    let days = (today.getTime() - start.getTime()) / (1000 * 3600 * 24);
    console.log("week " + (1 + Math.floor(days / 7)));

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);

    console.log("week: " + 1 + days / 7);

    return (
        <div>
            <h3>Week: {1 + Math.floor(days / 7)}</h3>
        </div>
    );
};

export default Cs119;
