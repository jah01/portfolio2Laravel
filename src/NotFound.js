import "./index.scss";
import { useEffect } from "react";

const NotFound = () => {

    useEffect(() => {
        document.title = "Address Not Found";
    }, []);

    return (
        <div className="main">
            <div className="main-contents">
                <div className="hide"><h1 className="title">That <span className="darkLetters">address</span> does not&#160;exist.</h1></div>
            </div>
        </div>
    );
}

export default NotFound;
