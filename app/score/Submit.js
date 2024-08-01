const Submit = () => {
    return (
        <>
        <div className="submit-box">
              <img src="Ellipse1.svg" alt="Ellipse" />
              <img src="group.svg" alt="Group" />
              <div className="content">
                <p className="successfuly">Successfully Submitted</p>
                <p className="thankyou">Thank you for completing the test! </p>
                <p className="review">Review your results and keep practicing. 
                Great job and keep up the hard work!</p>
              </div>
            <button className="submit-btn">Check Your Score</button>
        </div>
        </>
    );
}

export default Submit;
