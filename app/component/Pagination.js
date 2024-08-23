import   './Pagination.css';

const Pagination = ()=>{
    return(
        <>
        <div className="box">
                    <img className="previous" src="Component1.svg" alt="Previous" />
                    <a className="circle1">1</a>
                    <a className="circle" >2</a>
                    <a className="circle">3</a>
                    <a className="circle">4</a>
                    <a className="circle">5</a>
                    <a className="circle">6</a>
                    <a className="circle">7</a>
                    <a className="circle">8</a>
                    <img className="next" src="Component2.svg" alt="Next" />
            </div>

        </>
    )
}
export default Pagination;