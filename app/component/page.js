import Assessment_Header from "./Assessment_Header";
import "../globals.css";
import Assessment_Question_Page from "./Assessment_Question_Page";
import Footer from "../Footer";
import Clock from "./Clock";

const Page = () => { 
    return(
        <>
        <Assessment_Header/>
        <Clock/>
        <Assessment_Question_Page/>
        <Footer/>
        </>
    )
};
export default Page;
