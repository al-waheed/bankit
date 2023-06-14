import { Link, useNavigate } from "react-router-dom";
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
import { useState } from "react";

export function SignIn() {
  const [inputVal, setInputVal] = useState({
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

    const signUpUser = localStorage.getItem("user_signUp");

    const { email, password } = inputVal;
    if (email === "") {
      toast.error("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater than five", {
        position: "top-center",
      });
    } else {
      if (signUpUser && signUpUser.length) {
        const signUpUsersDetails = JSON.parse(signUpUser);
        const usersLogin = signUpUsersDetails.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (usersLogin.length === 0) {
          toast.warn("invalid details", {
            position: "top-center",
          });
        } else {
          localStorage.setItem("user_signIn", JSON.stringify(usersLogin));
          history("/dashboard/home");
        }
      }
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
              Sign In
            </Typography>
          </CardHeader>
          <form>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                name="email"
                size="lg"
                onChange={getData}
              />
              <Input
                type="password"
                label="Password"
                name="password"
                size="lg"
                onChange={getData}
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                variant="gradient"
                onClick={addData}
                fullWidth
              >
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/auth/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
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

export default SignIn;