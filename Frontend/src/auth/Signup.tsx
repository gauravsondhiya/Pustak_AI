"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
function Signup() {
  let navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  let [outerror, setouterror] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SIGNUP_ROUTE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      });
      const data = await response.json();
      if (data === true) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error uploading data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputValues.email ||
      !inputValues.password ||
      !inputValues.name ||
      !inputValues.surname
    ) {
      setouterror("Please fill in all fields before logging in.");
      return;
    }
    uploadData();
    // console.log("Form Data:", inputValues);
    setInputValues({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
  };
  const isDisabled =
    !inputValues.email ||
    !inputValues.password ||
    !inputValues.name ||
    !inputValues.surname;

  return (
    <div className="mt-22 shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-center text-neutral-800 dark:text-neutral-200">
        Welcome to पुस्तक AI
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Your AI-powered library assistant – sign up & start exploring!
      </p>
      {outerror && (
        <p className="mt-3 text-sm text-red-500 font-medium">{outerror}</p>
      )}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">First name</Label>
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              value={inputValues.name || ""}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="surname">Last name</Label>
            <Input
              id="surname"
              name="surname"
              onChange={handleChange}
              value={inputValues.surname || ""}
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={inputValues.email || ""}
            placeholder="projectmayhem@fc.com"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            onChange={handleChange}
            value={inputValues.password || ""}
            placeholder="••••••••"
            type="text"
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
          Sign up &rarr;
          <BottomGradient />
        </button>
        <div className="mt-3">
          <p>Forget Your Password</p>
          <p>
            Already Have an account{" "}
            <NavLink className="font-bold hover:text-gray-400" to="/login">
              Login
            </NavLink>
          </p>
        </div>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

export default Signup;

// Bottom gradient animation
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

// Reusable Label + Input wrapper
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
