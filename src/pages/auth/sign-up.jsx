import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useNavigate();

  const getData = (e) => {
    const { value, name } = e.target;
    
    setInputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inputVal;

    if (name === "") {
      toast.error("Name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("Password length should be greater than five", {
        position: "top-center",
      });
    } else {
      console.log("Data Added Succesfully");
      history("/auth/sign-in");
      const existingUserData = localStorage.getItem("user_signUp");
      let userData = [];

      if (existingUserData) {
        userData = JSON.parse(existingUserData);
      }
      userData.push(inputVal);
      localStorage.setItem("user_signUp", JSON.stringify(userData));
    }
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <form>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="text"
                name="name"
                label="Name"
                size="lg"
                onChange={getData}
              />
              <Input
                type="email"
                name="email"
                label="Email"
                size="lg"
                onChange={getData}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                size="lg"
                onChange={getData}
              />
              <div className="-ml-2.5">
                <Checkbox label="I agree the Terms and Conditions" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                variant="gradient"
                onClick={addData}
                fullWidth
              >
                Sign Up
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Link to="/auth/sign-in">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign in
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </form>
        </Card>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUp;
