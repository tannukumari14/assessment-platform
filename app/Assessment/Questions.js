"use client";
import { useEffect, useState } from "react";

import "./Assessment_Question_Page.css";

const Questions=()=>{

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(`https://the-trivia-api.com/v2/questions`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return(
        <>
        <div className="question-border">
            {/* <div className="p-tag">
                <p className="question1">QUESTION 1</p>
                <p className="score">Score +10</p>
            </div>
            <div className="container-questions">
                <div className="questions">Which of the following committees recommended inclusion of fundamental duties?</div>
                <p className="option">Tarapore Committee</p>
                <p className="options">Radha Krishnan Committee</p>
                <p className="options">Swaran Singh Committee</p>
                <p className="options1">Balwantrai Mehta Committee</p>
            </div> */}
                {data.map((item) => (
                <div key={item.id}>
                    <h2>question:-{item.question.text}</h2> 
                    <br></br>
                    <h3>correctAnswer:-{item.correctAnswer}</h3>
                    <br></br>
                    <h3>incorrectAnswers:-{item.incorrectAnswers}</h3>
                </div>
            ))}
        </div>
        </>
    )
}
export default Questions;