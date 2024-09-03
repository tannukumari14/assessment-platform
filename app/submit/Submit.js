import Link from 'next/link';
import "./Submit.css";

const Submit = () => {
  return (
    <div className='submit-outer-box'>
    <div className="submit-box">
      <img src="Ellipse1.svg" alt="Decorative Ellipse" />
      <img src="group.svg" alt="Group Icon" />
      
      <div className="content">
        <p className="submit-successfully">Successfully Submitted</p>
        <p className="submit-thankyou">Thank you for completing the test!</p>
        <p className="submit-review">
          Review your results and keep practicing. <br></br>
          Great job and keep up the hard work!
        </p>
      </div>
      
      <div className="submit-btn-container">
        <Link href="score" className="submit-btn">Check Your Score</Link>
      </div>
    </div>
    </div>
  );
}

export default Submit;
