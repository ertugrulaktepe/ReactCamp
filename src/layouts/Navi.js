import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container,Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const handleSingOut = ()=>{
    setIsAuthenticated(false)
  }
  const handleSingIn = ()=>{
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
            {isAuthenticated?<SignedIn handleSingOut={handleSingOut}/>: <SignedOut signedIn={handleSingIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
