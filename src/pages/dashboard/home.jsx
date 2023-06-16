import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";

export function Home() {
  const getUser = localStorage.getItem("user_signIn");
  const signedInUser = JSON.parse(getUser);
  console.log(signedInUser);

  return (
    <>
      <div className="mt-12 w-full bg-white flex justify-between shadow-lg">
        <div className="flex items-center justify-center">
          <UserCircleIcon className="h-16 w-16 text-brown-400" />
          <CardBody>
            <Typography className="mb-2 text-2xl font-extrabold capitalize tracking-wide text-blue-500">
              Welcome {signedInUser[0].name},
            </Typography>
            <Typography className="text-base font-bold capitalize tracking-wide text-gray-600">
              {moment().format("llll")}
            </Typography>
          </CardBody>
        </div>
        <div className="flex items-center justify-center">
          <UserCircleIcon className="h-16 w-16 text-brown-400" />
          <CardBody>
            <Typography className="mb-2 text-2xl font-extrabold capitalize tracking-wide text-blue-500">
              {signedInUser[0].accountNo}
            </Typography>
            <Typography className="text-base font-bold uppercase text-gray-600">
              Central Bank
            </Typography>
          </CardBody>
        </div>
      </div>
    </>
  );
}

export default Home;
