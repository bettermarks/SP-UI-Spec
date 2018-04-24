import React from "react";
import Bar from "../components/bar/Bar";
import Button from "../components/button/Button";
import CollapsibleSection from "../components/collapsibleSection/CollapsibleSection";
import Direction from "../components/direction/Direction";
import Icon from "../components/icon/Icon";

export default () => {
  let leftSidebar = ([
    <Bar barStyle="dark" borderDirection="right">
      lside
    </Bar>
  ]);

  let header = ([
    <Bar barStyle="dark" borderDirection="bottom">
      <Direction stretch last={[
        <Button size="l" decoration="action" styleName="">
          {[<Icon name="life-ring-l" />, "Help"]}
        </Button>,
        <Button size="l" decoration="action" styleName="transparent">
          {[<Icon name="times-xl" />]}
        </Button>
      ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Direction>
    </Bar>
  ]);

  let footer = ([
    <Bar barStyle="dark" borderDirection="top">
      footer
    </Bar>
  ]);
  return (
    <Direction stretch first={leftSidebar}>
      <Direction stretch vertical first={header} last={footer}>
        Content
      </Direction>
    </Direction>
  );
};
