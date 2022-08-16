import React from "react";

import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const ComponentA = () => {
	return (
		<div>
			<UserContext.Provider value={"Vishwas"}>
				<ChannelContext.Provider value={"CodeValution"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	);
};

export default ComponentA;
