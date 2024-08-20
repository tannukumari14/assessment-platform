import  './Check_Answer.css';

const Check_Answer=()=>{
return(
    <>
    <div className="checker">
        <p className="check-num">CHECK YOUR ANSWERS</p>
        <div className="hr-line"></div>
        <div className="scores-border">
            <div className="answers">
                <img className="check-sign" src="Check.png"></img>
                <p className="gap">10</p>
                <p className="gap">Q1</p>
                <div className="image-container">
                    <input type="checkbox" id="toggle" className="toggle-checkbox" />
                    <label htmlFor="toggle" className="toggle-label">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image " />
                        <img src="Frame.svg" alt="Frame" className="overlay-image " />
                    </label>

                    {/* Questions to display */}
                    <div className="questions-set">
                        <p className="question">Which of the following committees recommended inclusion of fundamental duties?</p>
                        <p className="option">Tarapore Committee</p>
                        <p className="option">Radha Krishnan Committee</p>
                        <p className="option">Swaran Singh Committee</p>
                        <p className="option">Balwantrai Mehta Committee</p>
                    </div>
                </div>
            </div>
        <div className="line-hr"></div>

        {/* 2 */}
        <div className="answers">
                <img src="Check.png"></img>
                <p className="gap">10</p>
                <p className="gap">Q1</p>
                <div className="image-container">
                    <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                    <img src="Frame.svg" alt="Frame" className="overlay-image" />
                </div>
            </div>
        </div>
        <div className="line-hr"></div>
        
            {/* 3 */}
                <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 4 */}
                <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 5 */}
                <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 6 */}
            <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 7 */}
            <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 8 */}
            <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 9 */}
            <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>

            {/* 10 */}  
            <div className="answers">
                    <img src="Check.png" alt="Check" />
                    <p className="gap">10</p>
                    <p className="gap">Q1</p>
                    <div className="image-container">
                        <img src="Ellipses.svg" alt="Ellipses" className="base-image" />
                        <img src="Frame.svg" alt="Frame" className="overlay-image" />
                    </div>
                </div>
            <div className="line-hr"></div>
            <div className="space"></div>
            
    </div>


    </>
)
}
export default Check_Answer;