import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import Chat2 from "./Chat2";

const Chat = () => {
  const [filestate, setfilestate] = useState(null);
  const [inputvalues, setinputvalues] = useState({
    website_data: "",
    file_data: null,
    youtube_data: "",
    text_data: "",
  });

  const handleinputvalues = (e) => {
    const { name, value } = e.target;
    setinputvalues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setinputvalues((prev) => ({ ...prev, file_data: e.target.files[0] }));
  };

  const input_data_upload = async () => {
    console.log(inputvalues)
    if (!inputvalues) return alert("Please enter values!");
    const formData = new FormData();
    formData.append("website_data", inputvalues.website_data)
    formData.append("file_data", inputvalues.file_data);
    formData.append("youtube_data", inputvalues.youtube_data);
    formData.append("text_data", inputvalues.text_data);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/data",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const arrbtn = [
    { btn: "Files", type: "file" },
    { btn: "Website", type: "weburl" },
    { btn: "Youtube", type: "url" },
    { btn: "Text", type: "text" },
  ];

  const choosebtn = (type) => setfilestate(type);

  return (
    <div className="border grid sm:grid-cols-12 mt-23 sm:h-[600px]">
      <div className="sm:col-span-4 border p-5 h-[500px]">
        <h1 className="flex items-center text-2xl gap-4 font-bold">
          <FaUpload /> Upload Your Sources
        </h1>

        <div className="flex justify-between mt-7 items-center">
          <div className="flex gap-1 [&>button]:hover:bg-black [&>button]:hover:text-white [&>button]:p-2 [&>button]:text-xl [&>button]:rounded-2xl">
            {arrbtn.map((e, i) => (
              <button key={i} onClick={() => choosebtn(e.type)} >
                {e.btn}
              </button>
            ))}
          </div>
          <button className="text-xl bg-black text-white font-bold p-2 rounded-2xl">
            New Chat
          </button>
        </div>

        <div className="border mt-5 p-auto h-[200px]">
          {filestate === "file" && (
            <div className="mt-3 p-2 flex justify-between items-center">
              <input
                type="file"
                name="file_data"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-[75%] h-[60px] rounded-2xl p-3 border"
              />
              <button
                onClick={input_data_upload}
                className="border font-bold rounded-2xl w-[90px] h-[60px] hover:bg-black hover:text-white"
              >
                Add
              </button>
            </div>
          )}

          {filestate === "weburl" && (
            <div className="mt-3 p-2 flex justify-between items-center">
              <input
                type="text"
                name="website_data"
                value={inputvalues.website_data}
                onChange={handleinputvalues}
                className="border w-[75%] h-[60px] rounded-2xl p-3"
                placeholder="Enter Website URL"
              />
              <button
                onClick={input_data_upload}
                className="border rounded-2xl w-[90px] h-[60px]"
              >
                Add
              </button>
            </div>
          )}

          {filestate === "url" && (
            <div className="mt-3 p-2 flex justify-between items-center">
              <input
                type="text"
                name="youtube_data"
                value={inputvalues.youtube_data}
                onChange={handleinputvalues}
                className="border w-[75%] h-[60px] rounded-2xl p-3"
                placeholder="Enter YouTube URL"
              />
              <button
                onClick={input_data_upload}
                className="border rounded-2xl w-[90px] h-[60px]"
              >
                Add
              </button>
            </div>
          )}

          {filestate === "text" && (
            <div>
              <textarea
                name="text_data"
                value={inputvalues.text_data}
                onChange={handleinputvalues}
                placeholder="Enter your text here (up to 5000 words)..."
                rows="8"
                maxLength="25000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-black-50 focus:ring-1 focus:border-transparent resize-none h-[200px]"
              />
              <div className="flex justify-between items-center">
                <button
                  onClick={input_data_upload}
                  className="px-4 mt-2 py-2 hover:bg-black border hover:text-white rounded-2xl font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  Submit Text
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Chat2/>
    </div>
  );
};

export default Chat;
