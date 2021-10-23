import React from "react";
import CartSummary from "./CartSummary";
import { Container,Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

const Navi = () => {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
           <SignedOut />
           <SignedIn/>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
