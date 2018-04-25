import React from "react";
import Bar from "../components/bar/Bar";
import Box from "../components/direction/Box";
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
      <Direction stretch paddingScheme="even">
        <Box stretch vAlign="middle">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </Box>
        <Box>
          <Button noReserveSpace size="l" decoration="action" styleName="">
            {[<Icon name="life-ring-l" />, "Help"]}
          </Button>
        </Box>
        <Box>
          <Button noReserveSpace size="l" decoration="action" styleName="transparent">
            {[<Icon name="times-xl" />]}
          </Button>
        </Box>
      </Direction>
    </Bar>
  ]);

  let footer = ([
    <Bar barStyle="dark" borderDirection="top">
      footer
    </Bar>
  ]);
  return (
    <Direction stretch>
      {leftSidebar}
      <Box stretch>
        <Direction stretch vertical>
          {header}
          <Box stretch>Content</Box>
          {footer}
        </Direction>
      </Box>
    </Direction>
  );
};
