import { useEffect, useState } from "react";

function ProjectCells(props) {

    const [w, setW] = useState("auto");

    useEffect(() => {
        if (props.orientation !== "") setW("500px");
    }, [props.orientation]);

    return (
        <div className="project">
            <h2 className="title-proj">{props.title}</h2>
            <h2 className="subtitle-proj">{props.time}</h2>
            <div className="proj-desc">
                <div className={props.orientation}>
                    <div className="test00" style={{ borderColor: props.borderColor, maxWidth: w }}>
                        <img src={props.image} alt={props.title + " Image"} />
                    </div>
                    <p className="para">{props.desc}</p>
                </div>
            </div>
        </div >
    );
}

export default ProjectCells;
