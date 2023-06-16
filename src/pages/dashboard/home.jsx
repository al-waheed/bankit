import React from "react";


export function Home() {
  
  const getUser = localStorage.getItem("user_signIn");
  const signedInUser = JSON.parse(getUser);

  return (
    <div className="mt-12">
      <h1>Dashboard</h1>
      <h1>Welcome {signedInUser[0].name}, </h1>
      <h1>AccountNo: {signedInUser[0].accountNo} </h1>
    </div>
  );
}

export default Home;
