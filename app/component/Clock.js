import "./Clock.css";

const Clock = () => {

    return (
        <>
            <div className="clock-box">
                <div className="cercle1">

                <img className="pink-circle" src="pink-circle.svg" alt="Clock" />
                </div>
                <div className="cercle2">
                    <div className="second">50 : 20</div>
                    <p className="min-sec">min sec</p>
                </div>
                <div className="time">Remaining Time</div>
            </div>

        </>

    )
}
export default Clock;