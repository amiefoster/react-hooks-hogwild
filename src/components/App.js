import React from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import Filter from "./Filter"
import useState from "react"

import hogs from "../porkers_data";
//console.log(hogs) //returns array of each pig object

function App() {
	const [displayGreased, setDisplayGreased] = useState(false);

	let greasedHogs = hogs.filter(hog => (displayGreased ? hog.greased : true))

	return (
		<div className="App">
			<Nav />
			<Filter 
				displayGreased={displayGreased}
				setDisplayGreased={setDisplayGreased}
				/>
			<Tiles hogData={greasedHogs} />
		</div>
	);
}

export default App;
