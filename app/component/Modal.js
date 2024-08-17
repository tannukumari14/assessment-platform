import "./Modal.css";

const Modal = () => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <a href="#" className="close">&times;</a>
                <div className="filter-content">
                    <p className="assessment-border">Question Score</p>
                    <div className="filter-numbers">
                        <div className="all">All</div>
                        <div className="numbers">10</div>
                        <div className="numbers">15</div>
                        <div className="numbers">20</div>
                    </div>
                    <p className="assessment-p">Questions Attempted</p>
                    <div className="div">
                        <div className="all40">All(40)</div>
                        <div className="un">Attempted(3)</div>
                        <div className="attemp">Unattempted(37)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
