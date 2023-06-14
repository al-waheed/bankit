import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function Home() {
  const history = useNavigate();

  const getUser = localStorage.getItem("user_signIn");
  const user = JSON.parse(getUser);
  console.log(user[0].name);

  const userlogout = () => {
    localStorage.removeItem("user_signIn");
    history("/auth/sign-in");
  };

  return (
    <div className="mt-12">
      <h1>Dashboard</h1>
      <h1>Welcome, {user[0].name}</h1>
      <Button type="submit" variant="gradient" onClick={userlogout} fullWidth>
        LogOut
      </Button>
    </div>
  );
}

export default Home;
