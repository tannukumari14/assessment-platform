import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className="border-header">
                <div>
                    <img className="LogoGrp" src="LogoGrp.svg" />
                    <img className="Logo" src="QA.png" />
                </div>
                <div className="header">
                    <Link href="Start-Test" className="start-test">
                        Start Test
                    </Link>
                    <Link href="Score"className="score">
                        Score    
                    </Link>            
                </div>
            </div>
        </>
    )
}
export default Header;