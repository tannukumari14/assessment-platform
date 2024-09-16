import "./Assessment_Question_Page.css";
import Clock from "./Clock";
import "./Clock.css";
import Modal from "./Modal";
import Questions from "./Questions";

const Assessment_Question_Page = () => {
    return (
        <>
            <div className="page-header">
                <div className="outer-border">
                    <div className="border-assessment">
            
                        <Clock />

                        <Modal/> 
                    </div>

                    <div className="question-border">
                        <Questions/>
                        <Questions/>
                        <Questions/>
                        <Questions/>
                        <Questions/>
                    </div> 
                </div>
                </div>
           
            <div className="margin-assessment"></div>
        </>
    );
}

export default Assessment_Question_Page;
