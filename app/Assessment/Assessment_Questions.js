import "./assessment_questions.css";
import Clock from "./Clock";
import "./Clock.css";
import Modal from "./Modal";
import Question from "./Question";

const Assessment_Question = () => {
    return (
        <>
            <div className="page-header">
                <div className="outer-border">
                    <div className="border-assessment">
                        <Clock />
                        <Modal/> 
                    </div>

                    <div className="question-border">
                        <Question/>
                        <Question/>
                        <Question/>
                        <Question/>
                        <Question/>
                    </div> 
                </div>
                </div>
           
            <div className="margin-assessment"></div>
        </>
    );
}

export default Assessment_Question;
