import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();

  let [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
  });

  let [outerror, setouterror] = useState("");

  const handler = (e) => {
    const { name, value } = e.target;
    setinputvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let logindata = async () => {
    try {
      let method = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputvalue),
      };
      let fetchdata = await fetch(import.meta.env.VITE_Login_Route, method);
      let data = await fetchdata.json();
      console.log(data);

      if (data === true) {
        navigate("/");
      } else {
        setouterror("Invalid email or password");
      }
    } catch (error) {
      console.log( error);
      setouterror("Something went wrong! Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ check for empty fields
    if (!inputvalue.email || !inputvalue.password) {
      setouterror("Please fill in all fields before logging in.");
      return;
    }

    setouterror(""); // clear error if all fields filled
    logindata();
  };

  // ✅ disable button if fields are empty
  const isDisabled = !inputvalue.email || !inputvalue.password;

  return (
    <div className="mt-22 shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to पुस्तक AI
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Your AI-powered library assistant – sign in & start exploring!
      </p>

      {outerror && (
        <p className="mt-3 text-sm text-red-500 font-medium">{outerror}</p>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            value={inputvalue.email}
            name="email"
            onChange={handler}
            placeholder="projectmayhem@gmail.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            value={inputvalue.password}
            name="password"
            onChange={handler}
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>

        <button
          className={`group/btn relative block h-10 w-full rounded-md font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
            ${
              isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-br from-black to-neutral-600"
            }`}
          type="submit"
          disabled={isDisabled}
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}
export default Login;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
