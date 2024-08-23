import Pagination from './Pagination';
import './Assessment_Header.css';
import Link from 'next/link';

const Assessment_Header = () => {
    return (
        <>
            <div className='bgcolorwhitefullwidth'>
                <div className="assessment-header">
                    <div className="images-logo">
                        <div className='two-logo'>
                            <img className="logo1" src="LogoGrp.svg" alt="Logo Group" />
                            <img className="logo2" src="QA.png" alt="QA Logo" />
                        </div>
                        <div className='pagination-Div'>
                            <Pagination />
                        </div>
                    </div>
                    <Link href="submit" className="submit-assessment">Submit</Link>
                </div>
            </div>
        </>
    );
};

export default Assessment_Header;
