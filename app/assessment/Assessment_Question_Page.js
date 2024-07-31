const Assessment_Question_Page=()=>{
    return(
        <>
            <div className="Page-header">
                <div className="outer-border">
                    <div className="filter">
                            <p className="filter-p">FILTER</p>
                            <p className="assessment-border">Question Score</p>
                            <div className="filter-numbers">
                                <div className="all">All</div>
                                <div className="numbers">10</div>
                                <div className="numbers">15</div>
                                <div className="numbers">20</div>
                            </div>
                            <p className="assessment-p">Question Attempted</p>
                            <div className="div">
                                <div className="all40">All(40)</div>
                                <div className="un">Attempted</div>
                                <div className="attemp">Unattempted(37)</div>
                            </div>
                        </div>

                    <div className="question-border"></div>

                </div>
            </div>
        </>
    )
}
export default Assessment_Question_Page;