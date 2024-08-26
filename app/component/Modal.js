import "./Modal.css";

const Modal = () => {
    return (
        <div className="filter-content-modal">
            <div className="div-modal">
            <p className="filter-modal">filter</p>
            <p className="assessment-border-modal">Question Score</p>
            <div className="filter-numbers-modal">
                <div className="all-modal">All</div>
                <div className="numbers-modal">10</div>
                <div className="numbers-modal">15</div>
                <div className="numbers-modal">20</div>
            </div>
            <p className="assessment-p-modal">Questions Attempted</p>
            <div className="contant-modal">
                <div className="all40-modal">All(40)</div>
                <div className="un-modal">Attempted(3)</div>
                <div className="attemp-modal">Unattempted(37)</div>
            </div>
            </div>
        </div>
    );
}

export default Modal;
