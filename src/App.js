import React from "react";
import "./App.css";
import HookCounterTwo from "./components/HookCounterTwo";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";

function App() {
	return (
		<div className="App">
			{/*	<ClassCounter /> */}
			{/* <HookCounter /> */}
			<HookCounterTwo />
		</div>
	);
}

export default App;
