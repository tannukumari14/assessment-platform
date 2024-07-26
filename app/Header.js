const Header = () => {
    return (
        <>
            <div className="border-header">
                <div>
                    <img className="LogoGrp" src="LogoGrp.svg" />
                    <img className="Logo" src="QA.png" />
                </div>
                <div className="header">
                    <a className="start-test">
                        Start Test
                    </a>
                    <a className="score">
                        Score    
                    </a>            
                </div>
            </div>
        </>
    )
}
export default Header;