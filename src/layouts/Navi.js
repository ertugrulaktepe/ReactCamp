import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container,Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  const handleSingOut = ()=>{
    setIsAuthenticated(false)
    history.push("/")
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
