import React from "react";
import "./App.css";
import ClassTimer from "./components/UseRef/ClassTimer";
import HookTimer from "./components/UseRef/HookTimer";

function App() {
	return (
		<div className="App">
			<ClassTimer />
			<HookTimer />
		</div>
	);
}

export default App;
