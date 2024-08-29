import "./Clock.css";
import Modal from './Modal';

const Clock = () => {
    return (
        <>
        <div className="clock-container">
            <div className="clock-box">
                <div className="cercle1"></div>
                <div className="cercle2">
                    <div className="second">50 : 20</div>
                    <p className="min-sec">min sec</p>
                </div>
                <div className="time">Remaining Time</div>
            </div>
                            {/* modal */}
                <div className="container-modal">
                    <label htmlFor="modal-toggle"  className="open-modal-button">
                        <div className="lines-modal">
                        <div className="line1-modal"></div>
                        <div className="line2-modal"></div>
                        <div className="line3-modal"></div>
                    </div>
                        </label>
                    <input type="checkbox" id="modal-toggle" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-content">
                            <label htmlFor="modal-toggle" className="close-button">&times;</label>
                            <Modal />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Clock;