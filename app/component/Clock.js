import "./Clock.css";

const Clock = () => {
    return (
        <>
            <div className="clock-container">
                <div className="cercle1">
                    <div className="cercle2">
                        <div className="sec-min">
                            <div className="second">50 : 20</div>
                            <p className="min-sec">min Sec</p>
                        </div>
                    </div>
                </div>
                <div className="time">Remaining Time</div>
            </div>
        </>
    )
}
export default Clock;

