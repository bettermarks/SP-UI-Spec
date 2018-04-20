import React from "react";
import {render} from "react-dom";
import Button from "./components/button/Button";
import Icon from "./components/icon/Icon";

import "./css/base.scss";

const App = () => (
	<div>
		<h1>Decoration: Action</h1>
		<h2>Different styleNames and sizes</h2>
		<Button size="xs" decoration="action">
			{["foo", "bar"]}
		</Button>&nbsp;
		<Button size="l" decoration="action" styleName="transparent">
			{["foo", "bar"]}
		</Button>{" "}
		&nbsp;
		<Button size="xxl" decoration="action" styleName="ghost">
			{["foo", "bar"]}
		</Button>
		<h2>Icon Button</h2>
		<Button size="l" decoration="action" styleName="">
			{[<Icon name="life-ring-l" />]}
		</Button>{" "}
		&nbsp;
		<Button size="l" decoration="action" styleName="transparent">
			{[<Icon name="times-xl" />]}
		</Button>&nbsp;
		<Button size="xxl" decoration="action" styleName="ghost">
			{[<Icon name="life-ring-xl" />, "foo"]}
		</Button>{" "}
		&nbsp;
		<h2>Stretch Behavior</h2>
		<Button size="xs" stretch decoration="action" styleName="">
			{["foo"]}
		</Button>
		<br />
		<Button size="l" stretch decoration="action" styleName="ghost">
			{["bar"]}
		</Button>
		<br />
		<Button size="xxl" stretch decoration="action" styleName="">
			{[<Icon name="life-ring-xl" />, "baz"]}
		</Button>
		<h1>Decoration: Disabled</h1>
		<h2>Different styleNames and sizes</h2>
		<Button size="xs" decoration="disabled">
			{["foo", "bar"]}
		</Button>&nbsp;
		<Button size="l" decoration="disabled" styleName="transparent">
			{["foo", "bar"]}
		</Button>{" "}
		&nbsp;
		<Button size="xxl" decoration="disabled" styleName="ghost">
			{["foo", "bar"]}
		</Button>
		<h2>Icon Button</h2>
		<Button size="l" decoration="disabled" styleName="">
			{[<Icon name="life-ring-l" />]}
		</Button>{" "}
		&nbsp;
		<Button size="l" decoration="disabled" styleName="transparent">
			{[<Icon name="times-xl" />]}
		</Button>&nbsp;
		<Button size="xxl" decoration="disabled" styleName="ghost">
			{[<Icon name="life-ring-xl" />, "foo"]}
		</Button>{" "}
		&nbsp;
		<h2>Stretch Behavior</h2>
		<Button size="xs" stretch decoration="disabled" styleName="">
			{["foo"]}
		</Button>
		<br />
		<Button size="l" stretch decoration="disabled" styleName="ghost">
			{["bar"]}
		</Button>
		<br />
		<Button size="xxl" stretch decoration="disabled" styleName="">
			{[<Icon name="life-ring-xl" />, "baz"]}
		</Button>
	</div>
);

render(<App />, document.getElementById("app"));
