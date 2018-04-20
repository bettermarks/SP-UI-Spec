import React from "react";

export default ({children, reserveSpace, stretch, decoration, styleName, size}) => {
	let className = ["btn", stretch ? "stretch" : "", `btn-size-${size}`, `btn-${decoration}${styleName ? `-${styleName}` : ""}`];

	return (
		<div className={className.join(" ")}>
			{children.map((e, i) => {
				return (
					<span key={i} className="child">
						{e}
					</span>
				);
			})}
		</div>
	);
};
