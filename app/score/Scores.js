import "./Scores.css";

const Scores = () => {
    return (
        <>
            <div className="base">
                <div className="h1-score">
                    <h1>35/40</h1>
                    <p>Your Scored</p>
                </div>
                <div className="div-for-score">
                    <div className="Unattempted">
                        <img src="exmilatio.svg"></img>
                        <p>Unattempted: 3</p>
                    </div>
                    <hr className="hrs"></hr>
                    <div className="image-text">
                        <img src="Check.png"></img>
                        <p>Correct: 35</p>
                    </div>
                    <hr className="hrs"></hr>
                    <div className="image-text">
                        <img src="wrong.svg"></img>
                        <p>Wrong: 2</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Scores;