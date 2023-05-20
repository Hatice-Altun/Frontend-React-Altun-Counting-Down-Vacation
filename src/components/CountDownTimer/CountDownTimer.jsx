import React, {useEffect, useRef, useState} from "react";
import Vacation from "../../assets/background.jpg";
import "./CountDownTimer.css";

function CountDownTimer() {
    const [timerDagen, setTimerDagen] = useState("00");
    const [timerUren, setTimerUren] = useState("00");
    const [timerMin, setTimerMin] = useState("00");
    const [timerSec, setTimerSec] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date("Juli 2, 2023 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) /1000);

            if (distance < 0) {
                // Stop Timer
                clearInterval(interval.current);
            } else {
                setTimerDagen(days);
                setTimerUren(hours);
                setTimerMin(minutes);
                setTimerSec(seconds);
            }
        }, 1000);
    };

    // Component DidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="countDownTimer" style={{backgroundImage: `url(${Vacation})`}}>
            <br/>
            <h2>Counting Down Vacation: </h2>
            <section className="timer-container">
            <section className="timer">
                <div>
                    <section>
                        <p>{timerDagen}</p>
                        <p><small>Dagen</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerUren}</p>
                        <p><small>Uren</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerMin}</p>
                        <p><small>Min</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerSec}</p>
                        <p><small>Sec</small></p>
                    </section>

                </div>
            </section>
        </section>
        </div>
    );
}

export default CountDownTimer;
