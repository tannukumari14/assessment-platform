import Pagination from './Pagination';
import './Assessment_Header.css';

const Assessment_Header = () => { 
    return (
        <>
            <div className="assessment-header">
                <div className="images-logo">
                    <img className="logo1" src="LogoGrp.svg" alt="Logo Group" />
                    <img className="logo2" src="QA.png" alt="QA Logo" />
                </div>
                <Pagination/>
            </div>
        </>
    );
};

export default Assessment_Header;
