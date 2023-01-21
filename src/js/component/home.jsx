import React, {useState} from "react";
import TrafficLight from "./trafficLight.jsx";
import urban from "../../img/urban.jpg"

const Home = () => {

	const [colorLight, setColorLight] = useState("green");

    const handleRed = () => {
        setColorLight("red");
    }

    const handleYellow = () => {
        setColorLight("yellow");
    }


    const handleGreen = () => {
        setColorLight("green");
    }

	return (
		<section style={{backgroundImage: `url(${urban})`}} className="t-l-section">
			<TrafficLight handleGreen={handleGreen} handleYellow={handleYellow} handleRed={handleRed} colorLight={colorLight}/>
		</section>
	);
};

export default Home;
