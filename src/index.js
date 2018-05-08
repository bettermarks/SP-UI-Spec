import React from "react";
import {render} from "react-dom";
import ButtonShowcase from "./pages/ButtonShowcase";
import SeriesplayerShowcase from "./pages/SeriesplayerShowcase";
import ContentBoxShowcase from "./pages/ContentBoxShowcase";
import ContextNotificationShowcase from "./pages/ContextNotificationShowcase";
import Direction from "./components/direction/Direction";
import Box from "./components/direction/Direction";
import Modal from "./components/modal/Modal";
import MediaQuery from "react-responsive";
import Button from "./components/button/Button";

import "./styles.scss";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'SeriesplayerShowcase' };

		this.handleChange = this.handleChange.bind(this);
		this.comp = this.comp.bind(this);

		this.selectorBox = ([
			<div key="sb">
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="">Select One</option>
					<option value="SeriesplayerShowcase">SeriesplayerShowcase</option>
					<option value="ButtonShowcase">ButtonShowcase</option>
					<option value="ContentBoxShowcase">ContentBoxShowcase</option>
					<option value="ContextNotificationShowcase">ContextNotificationShowcase</option>
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
			case 'ContentBoxShowcase':
				return <ContentBoxShowcase />;
			case 'ContextNotificationShowcase':
				return <ContextNotificationShowcase />;
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
				<MediaQuery minWidth={450}>
					{(matches)=>{
						if(matches){
							return (
								<Modal desktop>
									<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam urna, vehicula eu lorem sed, lobortis iaculis nulla. Nullam nulla diam, cursus eu est et, rutrum dictum tortor.</div>
									<div>Phasellus sed interdum nisi, et hendrerit tellus. Quisque mattis lobortis tempor. Proin a nulla nec orci malesuada lacinia.</div>
									<Button stretch size="l" decoration="action">{["Quit exercise series"]}</Button>
									<Button stretch size="l" decoration="warning">{["Restart exercise series"]}</Button>
									<Button stretch size="l" decoration="view">{["Don\'t quit"]}</Button>
								</Modal>
							)
						} else {
							return <Modal />
						}
					}}
				</MediaQuery>
			</div>
		)
	}
}

render(<App />, document.getElementById("app"));
