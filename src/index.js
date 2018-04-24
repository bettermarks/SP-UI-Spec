import React from "react";
import {render} from "react-dom";
import ButtonShowcase from "./pages/ButtonShowcase";
import SeriesplayerShowcase from "./pages/SeriesplayerShowcase";
import Direction from "./components/direction/Direction";
import Box from "./components/direction/Direction";

import "./css/base.scss";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'SeriesplayerShowcase' };

		this.handleChange = this.handleChange.bind(this);
		this.comp = this.comp.bind(this);

		this.selectorBox = ([
			<div>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="SeriesplayerShowcase">SeriesplayerShowcase</option>
					<option value="ButtonShowcase">ButtonShowcase</option>
				</select>
				&lt;-- Choose a page
			</div>
		]);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	comp(which) {
		switch (which) {
			case 'SeriesplayerShowcase':
				return <SeriesplayerShowcase />;
			case 'ButtonShowcase':
				return <ButtonShowcase />;
			default:
				return <div>select one</div>;
		}
	}

	render() {
		return (
			<div>
				<Direction vertical fullsize>
					{this.selectorBox}
					<Box stretch>
						{this.comp(this.state.value)}
					</Box>
				</Direction>
			</div>
		)
	}
}

render(<App />, document.getElementById("app"));
