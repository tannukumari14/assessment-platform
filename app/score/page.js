import Score_Header from "./Score_Header"
import Scores from "./Scores";
import Check_Answer from "./Check_Answer";
import "../globals.css";
import Footer from "../Footer";

const page=()=>{
    return(
        <>
        <Score_Header/>
        <Scores/>
        <Check_Answer />
        <Footer/>
        </>
    )
}
export default page;