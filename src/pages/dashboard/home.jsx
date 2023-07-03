import React from "react";
import { CardBody, Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import moment from "moment";

export function Home() {
  const getUser = localStorage.getItem("user_signIn");
  const signedInUser = JSON.parse(getUser);
  console.log(signedInUser);

  return (
    <>
      <div className="flex items-center">
        <UserCircleIcon className="h-16 w-16 text-gray-500" />
        <CardBody>
          <Typography className="mb-2 text-xl font-extrabold capitalize tracking-wide text-[#2d586d]">
            Welcome, {signedInUser[0].name}
          </Typography>
          <Typography className="text-sm font-bold capitalize italic tracking-wide text-gray-500">
            {moment().format("llll")}
          </Typography>
        </CardBody>
      </div>
      <div className="mt-12 flex ">
      <div className="flex items-center pl-2 bg-[#2d586d] shadow-lg w-[260px] h-[150px] rounded-t-md rounded-br-md mr-6">
          <UserCircleIcon className="h-10 w-10 text-white" />
          <CardBody className="p-2">
            <Typography className="mb-2 text-base font-extrabold tracking-wide text-white">
              {signedInUser[0].accountNo}
            </Typography>
            <Typography className="text-[12px] font-bold capitalize text-white">
              Central Bank
            </Typography>
          </CardBody>
        </div>
        <div className="flex items-center pl-2 bg-[#5f2ec1] shadow-lg w-[260px] h-[150px] rounded-t-md rounded-br-md mr-6">
          <UserCircleIcon className="h-10 w-10 text-white" />
          <CardBody className="p-2">
            <Typography className="mb-2 text-base font-extrabold  text-white">
             Account Balance
            </Typography>
            <Typography className="text-base font-bold capitalize text-white">
            ₦ 0.00
            </Typography>
          </CardBody>
        </div>
        <div className="flex items-center pl-2 bg-[#37474f] shadow-lg w-[260px] h-[150px] rounded-t-md rounded-br-md">
          <UserCircleIcon className="h-10 w-10 text-white" />
          <CardBody className="p-2">
            <Typography className="mb-2 text-base font-extrabold  text-white">
             Dollar Account Balance
            </Typography>
            <Typography className="text-base font-bold capitalize text-white">
              0.00
            </Typography>
          </CardBody>
        </div>
      </div>
    </>
  );
}

export default Home;
