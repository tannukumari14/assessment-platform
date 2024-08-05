"use client";
import Link from 'next/link';

const Assessment_Header = () => { 
    return (
        <>
            <div className="assessment-header">
                <div className="images">
                    <img className="logo1" src="LogoGrp.svg" alt="Logo Group" />
                    <img className="logo2" src="QA.png" alt="QA Logo" />
                </div>
                <div className="box">
                    <img className="previous" src="Component1.svg" alt="Previous" />
                    <a className="circle1">1</a>
                    <a className="circle">2</a>
                    <a className="circle">3</a>
                    <a className="circle">4</a>
                    <a className="circle">5</a>
                    <a className="circle">6</a>
                    <a className="circle">7</a>
                    <a className="circle">8</a>
                    <img className="next" src="Component2.svg" alt="Next" />
                </div>
                <Link href="score" className="submit-assessment">Submit</Link>
            </div>
        </>
    );
};

export default Assessment_Header;
