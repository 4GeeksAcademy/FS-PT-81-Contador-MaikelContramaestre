import React from "react";

//include images into your bundle

import { Card } from "./card";
import { Clock } from "./clock";

//create your first component
const Home = ({ time }) => {

	return (
		<>
			<div className=" text-center  pagina">
				<Clock />
				<Card number={Math.floor(time / 100000) % 100000} />
				<Card number={Math.floor(time / 10000) % 10000} />
				<Card number={Math.floor(time / 1000) % 1000} />
				<Card number={Math.floor(time / 100) % 100} />
				<Card number={Math.floor(time / 10) % 10} />
				<Card number={Math.floor(time % 10)} />
			</div>
        

		</>

	);
};

export default Home;
