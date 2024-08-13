import "./Assessment_Question_Page.css";

const Assessment_Question_Page = () => {
    return (
        <>
            <div className="Page-header">
                <div className="outer-border">
                    <div className="filter">
                        <p className="filter-p">FILTERS</p>
                        <button className="filter-button">
                        FILTERS
                            {/* <div className="lines">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                            </div> */}
                            {/* <p className="filter-mobile-view">FILTERS</p> */}
                        </button>
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

                    <div className="question-border">
                        <div className="p-tag">
                            <p className="question1">QUESTION 1</p>
                            <p className="score">Score +10</p>
                        </div>
                        <div className="container-questions">
                            <div className="questions">Which of the following committees recommended inclusion of fundamental duties?</div>
                            <p className="option">Tarapore Committee</p>
                            <p className="options">Radha Krishnan Committee</p>
                            <p className="options">Swaran Singh Committee</p>
                            <p className="options1">Balwantrai Mehta Committee</p>
                        </div>

                        <div className="p-tag">
                            <p className="question1">QUESTION 2</p>
                            <p className="score">Score +15</p>
                        </div>
                        <div className="container-questions">
                            <div className="questions">Which of the following committees recommended inclusion of fundamental duties?</div>
                            <p className="option">Tarapore Committee</p>
                            <p className="options">Radha Krishnan Committee</p>
                            <p className="options">Swaran Singh Committee</p>
                            <p className="options1">Balwantrai Mehta Committee</p>
                        </div>

                        <div className="p-tag">
                            <p className="question1">QUESTION 3</p>
                            <p className="score">Score +20</p>
                        </div>
                        <div className="container-questions">
                            <div className="questions">Which of the following committees recommended inclusion of fundamental duties?</div>
                            <p className="option">Tarapore Committee</p>
                            <p className="options">Radha Krishnan Committee</p>
                            <p className="options">Swaran Singh Committee</p>
                            <p className="options1">Balwantrai Mehta Committee</p>
                        </div>

                        <div className="p-tag">
                            <p className="question1">QUESTION 4</p>
                            <p className="score">Score +10</p>
                        </div>
                        <div className="container-questions">
                            <div className="questions">Which of the following committees recommended inclusion of fundamental duties?</div>
                            <p className="option">Tarapore Committee</p>
                            <p className="options">Radha Krishnan Committee</p>
                            <p className="options">Swaran Singh Committee</p>
                            <p className="options1">Balwantrai Mehta Committee</p>
                        </div>

                        <div className="p-tag">
                            <p className="question1">QUESTION 5</p>
                            <p className="score">Score +15</p>
                        </div>
                        <div className="container-questions">
                            <div className="questions">Which of the following committees recommended inclusion of fundamental duties?</div>
                            <p className="option">Tarapore Committee</p>
                            <p className="options">Radha Krishnan Committee</p>
                            <p className="options">Swaran Singh Committee</p>
                            <p className="options1">Balwantrai Mehta Committee</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="margin-assessment"></div>
        </>
    );
}

export default Assessment_Question_Page;
