"use client"
import Link from 'next/link';
import styles from './CountdownClock.module.css';
import { useState, useEffect } from 'react';


const Assessment_Header = () => { 
    const [time, setTime] = useState("50 : 20");

    useEffect(() => {
        const updateTime = () => {
          setTime("50 : 20");
        };
    
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
      }, []);
    
    return(
        <>
            <div className="assessment-header">
                <div className="images">
                    <img className="logo1" src="LogoGrp.svg" />
                    <img className="logo2" src="QA.png" />
                </div>
                <div className="clock">
                    <div className="timer">
                        <div className={styles.clockContainer}>
                            <div className={styles.clock}>
                            <div className={styles.progress}></div>
                            <div className={styles.time}>50:20</div>
                            <div className={styles.label}>min Sec</div>
                        </div>
                            <div className={styles.remainingTimeLabel}>Remaining Time</div>
                        </div>
                    </div>
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
                <Link href="score" className="submit-assessment" >Submit</Link>
            </div>
        </>
    )
};
export default Assessment_Header;
