import React from "react";
import {render} from "react-dom";
import ButtonShowcase from "./pages/ButtonShowcase";

import "./css/base.scss";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'ButtonShowcase' };

		this.handleChange = this.handleChange.bind(this);
		this.comp = this.comp.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	comp(which) {
		switch(which){
			case 'ButtonShowcase':
				return <ButtonShowcase />;
			default:
				return <div>select one</div>;
		}
	}


	render() {
		return (
			<div>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="ButtonShowcase">ButtonShowcase</option>
				</select>
				{this.comp(this.state.value)}
			</div>
		)
	}
}

render(<App />, document.getElementById("app"));
