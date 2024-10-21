import Assessment_Header from "./Assessment_Header";
import "../globals.css";
import Assessment_Question from "./Assessment_Questions";
import Footer from "../Footer";

const Page = () => { 
    return(
        <>
        <div className="container-page">
        <Assessment_Header/>
        <Assessment_Question/>
        <Footer/>
        </div>
        </>
    )
};
export default Page;
