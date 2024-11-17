import React, { useState } from "react";
import styled from "styled-components";
import bg from './img/bg.jpg';
import { Mainlayout } from './styles/layouts';
import Orb from "./Components/Orb/Orb.js";
import Navigation from "./Components/Navigation.js/Navigation.js";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Expense from "./Components/Expense/Expense.jsx";
import Transcation from "./Components/Transactions/Transactions.jsx";
import Income from "./Components/Income/Income.jsx";
import { useGlobalContext } from "./context/globalContext.jsx";
import LoginPage from "./Components/login";
import SignupPage from "./Components/signup";

function App() {
  const [active, setActive] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSignup = (username, password) => {
    // Implement your signup logic here, for example, creating a new user
    // For simplicity, let's just log the username and password for now
    console.log("New user signed up:");
    console.log("Username:", username);
    console.log("Password:", password);
    setIsSignup(false); // After signup, switch to login page
  };

  const handleLogin = (username, password) => {
    // Implement your login logic here, for example, checking credentials
    // For simplicity, let's assume if username and password are not empty, then login is successful
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter username and password.");
    }
  };

  const displayContent = () => {
    if (isSignup) {
      return <SignupPage handleSignup={handleSignup} />;
    } else if (isLoggedIn) {
      switch (active) {
        case 1: return <Dashboard />;
        case 2: return <Income />;
        case 3: return <Expense />;
        case 4: return <Transcation />;
        default: return 'Error!';
      }
    } else {
      return <LoginPage handleLogin={handleLogin} />;
    }
  };

  const global = useGlobalContext();
  console.log(global);

  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <Navigation active={active} setActive={setActive} />
      <Mainlayout>
        <MainContent>
          {displayContent()}
        </MainContent>
      </Mainlayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #d7e4c0;
  position: relative;
`;

const MainContent = styled.main`
  /* Adjust this value to match the height of your navigation bar */
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default App;
