import Pagination from './Pagination';
import './Assessment_Header.css';
import Link from 'next/link';
import "./Pagination.css";

const Assessment_Header = () => {
    return (
        <>
            <div className='bgcolorwhitefullwidth'>
                <div style={{ justifyContent: 'space-between' }} className="assessment-header">
                    <div style={{ width: '998px'}}>
                        <div className="images-logo">
                            <div className='two-logo'>
                                <img className="logo1" src="LogoGrp.svg" alt="Logo Group" />
                                <img className="logo2" src="QA.png" alt="QA Logo" />
                            </div>
                            <div className='pagination-Div'>
                                {/* <Pagination /> */}

        <div className="box">
            <img className="previous" src="Component1.svg" alt="Previous" />
            <a className="circle1">1</a>
            <p>...</p>
            <a className="circle" >2</a>
            <a className="circle">3</a>
            <a className="circle">4</a>
            <a className="circle">5</a>
            <p>...</p>
            <a className="circle">6</a>
            <a className="circle">7</a>
            <a className="circle">8</a>
            <img className="next" src="Component2.svg" alt="Next" />
        </div>
                            </div>
                        </div>
                    </div>
                    <div className='submit-header'>
                        <Link href="submit" className="submit-assessment">Submit</Link>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Assessment_Header;
