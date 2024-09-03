import Pagination from './Pagination';
import './Assessment_Header.css';
import Link from 'next/link';

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
                                <Pagination />
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
