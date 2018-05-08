import React from "react";

export default ({children, click, noReserveSpace, stretch, decoration, styleName, size}) => {
	let wrapperClassName = [
		"btnWrapper",
		noReserveSpace ? "noreservespace" : "reservespace",
		`btnWrapper-${decoration}${styleName ? `-${styleName}` : ""}`,
		stretch ? "stretch" : ""];
	let className = [
		"btn",
		`btn-size-${size}`];

	return (
		<div className={wrapperClassName.join(" ")} onClick={click}>
			<div className={className.join(" ")}>
				{children.map((e, i) => {
					return (
						<span key={i} className="child">
							{e}
						</span>
					);
				})}
			</div>
		</div>
	);
};
