import React from "react";
import Button from "../components/button/Button";
import Icon from "../components/icon/Icon";

export default () => {
  return (
    <div>
      <h1>Clickable Area</h1>
      <h2>Don't reserve space</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
        eget elit ut aliquet. Nullam non interdum tellus. Mauris sit amet enim
        risus. Maecenas volutpat et lectus sit amet fermentum. &nbsp;<Button
          noReserveSpace
          size="xs"
          decoration="action"
        >
          {["foo", "lorem ipsum dolor", "bar"]}
        </Button>&nbsp; Proin vehicula euismod quam, ut consectetur metus
        pretium vitae. Donec efficitur volutpat turpis id consequat. Vestibulum
        mattis feugiat felis, quis fermentum lacus consectetur nec. Aliquam erat
        volutpat. Phasellus gravida elit ac sem pharetra, pretium efficitur
        tellus cursus.
      </p>
      <h2>Reserve space</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
        eget elit ut aliquet. Nullam non interdum tellus. Mauris sit amet enim
        risus. Maecenas volutpat et lectus sit amet fermentum.
        <Button size="xs" decoration="action">
          {["foo", "lorem ipsum dolor", "bar"]}
        </Button>
        Proin vehicula euismod quam, ut consectetur metus pretium vitae. Donec
        efficitur volutpat turpis id consequat. Vestibulum mattis feugiat felis,
        quis fermentum lacus consectetur nec. Aliquam erat volutpat. Phasellus
        gravida elit ac sem pharetra, pretium efficitur tellus cursus.
      </p>
      <h1>Decoration: Action</h1>
      <h2>Different styles and sizes</h2>
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
      <h2>Button Color</h2>
      <Button size="l" decoration="action" styleName="">
        {[<Icon name="life-ring-l" />, "Action"]}
      </Button>{" "}
      <Button size="l" decoration="action" styleName="ghost">
        {[<Icon name="life-ring-l" />, "Action"]}
      </Button>{" "}
      <Button size="l" decoration="action" styleName="transparent">
        {[<Icon name="life-ring-l" />, "Action"]}
      </Button>{" "}
      <br />
      <Button size="l" decoration="confirm" styleName="">
        {[<Icon name="life-ring-l" />, "Confirm"]}
      </Button>{" "}
      <Button size="l" decoration="confirm" styleName="ghost">
        {[<Icon name="life-ring-l" />, "Confirm"]}
      </Button>{" "}
      <Button size="l" decoration="confirm" styleName="transparent">
        {[<Icon name="life-ring-l" />, "Confirm"]}
      </Button>{" "}
      <br />
      <Button size="l" decoration="abort" styleName="">
        {[<Icon name="life-ring-l" />, "Abort"]}
      </Button>{" "}
      <Button size="l" decoration="abort" styleName="ghost">
        {[<Icon name="life-ring-l" />, "Abort"]}
      </Button>{" "}
      <Button size="l" decoration="abort" styleName="transparent">
        {[<Icon name="life-ring-l" />, "Abort"]}
      </Button>{" "}
      <br />
      <Button size="l" decoration="warning" styleName="">
        {[<Icon name="life-ring-l" />, "Warning"]}
      </Button>{" "}
      <Button size="l" decoration="warning" styleName="ghost">
        {[<Icon name="life-ring-l" />, "Warning"]}
      </Button>{" "}
      <Button size="l" decoration="warning" styleName="transparent">
        {[<Icon name="life-ring-l" />, "Warning"]}
      </Button>{" "}
      <br />
      <Button size="l" decoration="view" styleName="">
        {[<Icon name="life-ring-l" />, "View"]}
      </Button>{" "}
      <Button size="l" decoration="view" styleName="ghost">
        {[<Icon name="life-ring-l" />, "View"]}
      </Button>{" "}
      <Button size="l" decoration="view" styleName="transparent">
        {[<Icon name="life-ring-l" />, "View"]}
      </Button>{" "}
      <br />
      <h2>Button Sizes</h2>
      <Button size="xs" decoration="action" styleName="">
        {["Size xs"]}
      </Button>{" "}
      <Button size="s" decoration="action" styleName="">
        {["Size s"]}
      </Button>{" "}
      <Button size="m" decoration="action" styleName="">
        {["Size m"]}
      </Button>{" "}
      <Button size="l" decoration="action" styleName="">
        {["Size l"]}
      </Button>{" "}
      <Button size="xl" decoration="action" styleName="">
        {["Size xl"]}
      </Button>{" "}
      <Button size="xxl" decoration="action" styleName="">
        {["Size xxl"]}
      </Button>{" "}
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
      <h2>Different styles and sizes</h2>
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
};
