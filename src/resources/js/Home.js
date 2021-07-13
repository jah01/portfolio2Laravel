import { useEffect } from "react";
import Accordion from "./components/Accordion";

const Home = () => {

    useEffect(() => {
        document.title = "Joseph Hilber";
    }, []);

    return (
        <div className="main">
            <div className="main-contents">
                <Accordion id="0" start="Hello, I'm " end="Joey" content="I'm an amateur web designer and developer from Columbus, Ohio. I began coding the web in the spring of 2018, which kickstarted my 3+ year self-taught journey. In that time, I learned so many important aspects of the front end, like design, responsiveness, and layout. As of now, I have a handful of projects in HTML, CSS, and JavaScript, as well as a couple of Flutter&#160;apps." />
                <Accordion id="1" start="I'm a junior at " end="Ohio State" content="Since my senior year of high school, I've been taking classes at Ohio State. My courses include calculus and linear algebra, mechanical physics, electrical engineering, and a lot of computer science. I have a 3.56 GPA and made the Dean's List the past three&#160;semesters." />
                <Accordion id="2" start="majoring in " end="Computer Science" content="I first began programming during my freshman year of high school and since then I've been interested in how computers and languages work. My education has consisted of sotfware development and design using Java, discrete structures and algorithms, computer systems, and coding C and the X86 assembly language. I'm planning on graduating in the spring of 2023 with a bachelor's degree in Computer Science and&#160;Engineering." />
            </div>
        </div>
    );
}

export default Home;
