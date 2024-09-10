import Assessment_Header from "./Assessment_Header";
import "../globals.css";
import Assessment_Question_Page from "./Assessment_Question_Page";
import Footer from "../Footer";

const Page = () => { 
    return(
        <>
        <div className="container-page">
        <Assessment_Header/>
        <Assessment_Question_Page/>
        <Footer/>
        </div>
        </>
    )
};
export default Page;
