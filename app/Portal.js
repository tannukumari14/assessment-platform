import Link from "next/link";

const Portal = () => {
    return (
        <>
            <div className="portalMain">
                <h2 className="portal">MCQ Test Portal</h2>
                <div className="border">
                    <div className="portal-border">
                        <div className="Instructions">Instructions</div>
                        <div className="read-instructions">Please read the instructions carefully before you begin:</div>
                        <div className="li-ul">
                            <ul>
                                <li>
                                    Tiiming: The test is timed. You have [specified time] minutes to complete all questions.
                                </li>
                                <li>
                                    Questions: The test comprises [number of questions] multiple-choice questions (MCQs).
                                </li>
                                <li>
                                    Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.
                                </li>
                                <li>
                                    Selection: Choose the best answer for each question. You can change your answers anytime before submitting.
                                </li>
                                <li>
                                    Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.
                                </li>
                                <li>
                                    Review: After submission, you may review your answers and scores.
                                </li>
                            </ul>
                        </div>
                        <div className="div-p">Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</div>
                        <div className="let-start">
                            Click 'Let's Start' to begin the test.
                            <div className="good-luck">Good Luck!</div>
                        </div>
                        <hr className="hr"></hr>
                        <div>
                            <Link href="assessment" className="start-button">Let's Start</Link>
                        </div>
                    </div>
                </div>
                <div className="margin"></div>
            </div>
        </>
    );
}
export default Portal;