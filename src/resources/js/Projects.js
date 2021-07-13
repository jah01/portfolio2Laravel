import ProjectCells from "./components/ProjectCells";
import "./components/Projects.scss";
import { useEffect } from "react";

//importing images
import p1 from "./img/p1.png";
import sound from "./img/SoundSelections.png";
import wc from "./img/WeCycle.png";
import dewit from "./img/Dewit.png";
import fw from "./img/FirstWebsite.png";

const Projects = () => {

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <div className="main-proj">
            <div className="hide"><h1 className="title">Some of my favorite <span className="darkLetters">Projects...</span></h1></div>
            <div className="hide"><div className="para-proj">The following is a sample of the kinds of projects I do. For more projects or to view the repos on Github, click <a href="https://www.github.com/jah01?tab=repositories" target="_blank" rel="noreferrer" className="underline">this&#160;link</a>!</div></div>
            <div className="cells">
                <ProjectCells orientation="" borderColor="#AECB8F " title="First Portfolio" time="MAY-JUNE 2020" image={p1} desc="I used static HTML and coded this all from scratch, with minimal outside code (aside from jQuery, of course). Through this I not only expanded my knowledge about the capabilities of JS, but I executed better programming practices and made this site responsive. Before this site, I had not really created anything with total responsiveness in mind. With this project, I tested out many different resolutions to make sure this looked acceptable on all. Additionally, I made sure that the design was consistent across both of the webpages. It features a minimalist design with colors that work well together. Although the site may look modest, it would not be the same site without the JS working under the hood. This makes viewing and interacting with this seemingly simple site a much more pleasant&#160;experience." />
                <ProjectCells orientation="side" borderColor="#64DEF2" title="Sound Selections" time="JULY 2020" image={sound} desc="For almost all of July 2020, I decided to create a Flutter app with a focus more on UI. Sound Selections tested my design skills and pushed me to create a full app without the need for a backend. The app displays songs I’ve been listening to and when selected, information about the song, such as a description and artists, is displayed. After completing this project, I was more confident in using Flutter and designing an app that can be as visually pleasing as it is&#160;functional." />
                <ProjectCells orientation="" borderColor="#00FFCD" title="WeCycle Landing" time="JANUARY 2020" image={wc} desc="I made the WeCycle landing page for a friend during the early months of 2020. Although it was not built for mobile and not going to be used, I took a bit of time out of my schedule during the school year to tinker with certain CSS animations dealing with SVGs. This project was based on an app idea my friends had built for fun, and I decided I would make a website (or at least experiment with one). The project itself was extremely difficult because I went in depth with images and animations, beyond what I had ever done before. It was used more as a learning experience than something I would present a product for, but I was very happy with the layout. What I learned from this difficult project was how to use SVGs, fonts, and general style elements. This is not mobile-friendly and some text does not show up on some browsers on Mac. I spent many hours coding this as well as using software to create SVG images, which was something I had never done extensively before, but every element of each image was created by&#160;me." />
                <ProjectCells orientation="side" borderColor="#9093C8" title="Dewit" time="MAY-JUNE 2020" image={dewit} desc="I began coding Dewit in the summer of 2020 with the goal of exposing myself to the Flutter and Dart languages. I didn’t know what to expect, as I had never coded anything aside from websites and programs for my software courses. In about two months of coding and teaching myself Flutter, I had an app that could be used as a to-do list. If I had more time, my friend and I would have made a backend part. The biggest challenge here was how little experience I had compared to anything I had done in the past two&#160;years." />
                <ProjectCells orientation="" borderColor="#B7C2E3" title="First Website" time="SUMMER 2018" image={fw} desc="This is my first website, created over the summer of 2018. It was the first time I had ever delved into the world of UI and web developing. I had no idea what to expect. I spent over 90 hours creating these web pages from scratch. I used very little JavaScript throughout the project, which came from outside sources. The code itself is messy and I left it how it looked when I finished; I unfortunately never got to cleaning it up, but I use it a bit for reference, so I leave the code just the way it was when I completed it. This is one of my favorite projects because, again, much of this was extremely new. When I began, I barely knew how classes worked, how to import fonts, or how to make any transitions. I'm proud of what I accomplished that summer and it's great to look back and see how much I grew. The biggest problem I faced besides my own inexperience was making sure everything looked nice on different-sized monitors. Although this is not mobile-friendly, I spent a great deal making sure computer screens were able to view the site as it should be&#160;viewed." />
            </div>
        </div>
    );
}

export default Projects;
