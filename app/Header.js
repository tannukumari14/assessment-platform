import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="border-header ">
                <div>
                    <img className="LogoGrp" src="LogoGrp.svg" alt="Logo Group" />
                    <img className="Logo" src="QA.png" alt="QA Logo" />
                </div>
            </div>
        </>
    );
}

export default Header;
