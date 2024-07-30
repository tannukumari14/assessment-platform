// import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className="border-header">
                <div>
                    <img className="LogoGrp" src="LogoGrp.svg" />
                    <img className="Logo" src="QA.png" />
                </div>
                {/* <div className="header">
                    <Link href="assessment" className="start-test">
                        Start Test
                    </Link>
                    <Link href="score"className="score">
                        Score    
                    </Link>            
                </div> */}
            </div>
        </>
    )
}
export default Header;