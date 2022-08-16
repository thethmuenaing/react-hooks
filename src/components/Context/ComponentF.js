import React from "react";
import { ChannelContext, UserContext } from "./ComponentA";

const ComponentF = () => {
	return (
		<div>
			<UserContext.Consumer>
				{(user) => {
					return (
						<ChannelContext.Consumer>
							{(channel) => {
								return (
									<div>
										UserContext value - {user} ,ChannelContext value - {channel}
									</div>
								);
							}}
						</ChannelContext.Consumer>
					);
				}}
			</UserContext.Consumer>
		</div>
	);
};

export default ComponentF;
