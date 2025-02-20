"use client";

// components/FOMOCountdown.js
import Countdown from "react-countdown";

export default function FOMOCountdown() {
    const deadline = new Date("2025-03-01T00:00:00"); // Setze dein Deal-Enddatum hier ein
    return (
        <Countdown
            date={deadline}
            renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                    return <span>Deals expired!</span>;
                } else {
                    return (
                        <span>
              {days}d {hours}h {minutes}m {seconds}s left!
            </span>
                    );
                }
            }}
        />
    );
}
