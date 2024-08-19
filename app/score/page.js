import Header from "../Header";
import Scores from "./Scores";
import Check_Answer from "./Check_Answer";
import Footer from "../Footer";
import "../globals.css";

const page=()=>{
return(
    <>
    <Header/>
    <Scores/>
    <Check_Answer />
    <Footer/>
    </>
)
}
export default page;