const Header = () => {
    return (
        <>
            <div className="border-header">
                <div className="header">
                    <img className="LogoGrp" src="LogoGrp.svg"/>
                    <p className="QR">QR</p>
                <div className="start-test">
                    <a className="start">Start</a>
                    <a className="test">Test</a>
                </div>
                <a className="score">Score</a>
                </div>
            </div>
        </>
    )
}
export default Header;