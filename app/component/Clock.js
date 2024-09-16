import "./Clock.css";

const Clock = () => {
    return (
        <>
            <div className="clock-container">
                <div className="cercle1">
                    <div className="cercle2">
                        <div className="second">50 : 20</div>
                        <p className="min-sec">min sec</p>
                    </div>
                </div>
                <div className="time">Remaining Time</div>
            </div>
        </>
    )
}
export default Clock;

