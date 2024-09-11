import "./Assessment_Question_Page.css";

const Questions=()=>{
    return(
        <>
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
        </div>
        </>
    )
}
export default Questions;