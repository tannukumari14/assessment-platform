const Assessment_Header = () => { 
    return(
        <>
            <div className="assessment-header">
                <div className="images">
                    <img className="logo1" src="LogoGrp.svg" />
                    <img className="logo2" src="QA.png" />
                </div>
                <div className="box">
                    <img className="prvious" src="Component1.svg" />
                    <a className="circle1">1</a>
                    <a className="circle">2</a>
                    <a className="circle">3</a>
                    <a className="circle">4</a>
                    <a className="circle">5</a>
                    <a className="circle">6</a>
                    <a className="circle">7</a>
                    <a className="circle">8</a>
                    <img className="next" src="Component2.svg" />
                </div>
                <div className="submit-assessment" >Submit</div>
            </div>
        </>
    )
};
export default Assessment_Header;
