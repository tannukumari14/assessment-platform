import './Assessment_Header.css';
import Pagination from './Pagination';

const Assessment_Header = () => {
    return(
        <>
            <div className="full-header">
                <div className='row-header'>
                    <div className='column'>
                        <div className='image'>
                            <img src="Logo.png"/>
                        </div>

                        <div className='pagination-container'>
                            <Pagination/>
                        </div>
                    </div>

                    <div className='submit-header'>
                        <a href="submit" className="submit-assessment">Submit</a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Assessment_Header;