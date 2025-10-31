import React from "react";
import { NavLink } from "react-router";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { RiContactsBookUploadLine } from "react-icons/ri";

const Intro2 = () => {
  let projects = [
    {
      title: "Upload Any Files",
      description:
        "Support for PDFs, Word documents, images, and more. Our AI processes and understands your content instantly.",
      // link: "https://stripe.com",
    },
    {
      title: "Website Analysis",
      description:
        "Paste any website URL and our AI will analyze the content, extract key information, and answer your questions.",
    },
    {
      title: "YouTube Integration",
      description:
        "Link YouTube videos and get AI-powered summaries, transcript analysis, and answer questions about the content.",
    },
    {
      title: "Intelligent Q&A",
      description:
        "Ask any question about your uploaded content and receive accurate, context-aware answers powered by advanced AI.",
    },
    {
      title: "Lightning Fast",
      description:
        "Get instant responses with our optimized AI processing. No waiting, no delays - just quick, accurate answers.",
    },
    {
      title: "Secure & Private",
      description:
        "Your data is encrypted and secure. We never store or share your personal information or uploaded content.",
    },
  ];

  return (
    <>
      <div className="m-auto  flex justify-center mt-5">
        <NavLink to="/chat">
          <p className="border text-2xl font-bold p-4 rounded-2xl bg-black text-white">
            {" "}
            Get Started
          </p>
        </NavLink>
      </div>

      {/* grid boxes */}
      <div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </>
  );
};

export default Intro2;
