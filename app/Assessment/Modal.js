import "./Modal.css";
import "./Assessment_Question_Page.css";

const Modal = () => {
    return (
        <>
            <div className="filter">
                <p className="filter-txt">FILTERS</p>
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

            <div className="container-modal">
                <label htmlFor="modal-toggle" className="open-modal-button">
                    <div className="lines-modal">
                        <div className="line1-modal"></div>
                        <div className="line2-modal"></div>
                        <div className="line3-modal"></div>
                    </div>
                </label>
                <input type="checkbox" id="modal-toggle" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-content">
                        <label htmlFor="modal-toggle" className="close-button">&times;</label>
                        <div className="filter-content-modal">
                            <div className="div-modal">
                                <p className="filter-modal">filters</p>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
