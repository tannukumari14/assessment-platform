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
                                <img className='lo-go' src="Logo.png"/>
                            </div>
                            <div className='pagination-Div'>
                                <Pagination />
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
