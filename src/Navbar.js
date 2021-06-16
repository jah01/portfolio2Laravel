import { Link } from "react-router-dom";
import resume from "./resume.pdf";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="pad"></div>
            <h1><Link to="/">Joseph Hilber</Link></h1>
            <div className="spacer"></div>
            <h2 className="items home"><Link to="/">Home</Link></h2>
            <div className="pad2"></div>
            <h2 className="items"><Link to="/projects">Projects</Link></h2>
            <div className="pad2"></div>
            <h2 className="items"><a href={resume} target="_blank" rel="noopener noreferrer">Résumé</a></h2>
            <div className="pad2"></div>
            <h2 className="items"><a href="mailto:joeyhilber@gmail.com" target="_blank" rel="noreferrer">Contact</a></h2>
            <div className="pad"></div>
        </div>
    );
}

export default Navbar;
