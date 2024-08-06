const Score_Header = () => {
    return (
        <>
            <div className="score-border">
                <div className="icon-images">
                    <img className="logo-image" src="LogoGrp.svg" alt="Logo Group" />
                    <img className="qa-image" src="QA.png" alt="QA Logo" />
                </div>
                    <p className="start-test">Start Test</p>
                    <p className="score-s">Score</p>
            </div>
        </>
    );
}

export default Score_Header;
