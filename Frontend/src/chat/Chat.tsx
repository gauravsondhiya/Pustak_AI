import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import Chat2 from "./Chat2";

const Chat = () => {
  const [filestate, setfilestate] = useState(null);
  const [tempfile, settempfile] = useState([]);
  const [loading, setloading] = useState(false);
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
    // Validation based on filestate
    if (filestate === "file" && !inputvalues.file_data)
      return alert("Please upload a file.");
    if (filestate === "weburl" && !inputvalues.website_data)
      return alert("Please enter a website URL.");
    if (filestate === "url" && !inputvalues.youtube_data)
      return alert("Please enter a YouTube URL.");
    if (filestate === "text" && !inputvalues.text_data.trim())
      return alert("Please enter some text.");

    settempfile((prev) => [...prev, inputvalues]);
    setloading(true);

    const formData = new FormData();
    formData.append("website_data", inputvalues.website_data);
    formData.append("file_data", inputvalues.file_data);
    formData.append("youtube_data", inputvalues.youtube_data);
    formData.append("text_data", inputvalues.text_data);

    try {
      const response = await axios.post(
        import.meta.env.VITE_UPLOAD_DATA,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
      alert("Upload successful!");

      // Reset input after upload
      setinputvalues({
        website_data: "",
        file_data: null,
        youtube_data: "",
        text_data: "",
      });
      setfilestate(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed! Check console for details.");
    } finally {
      setloading(false);
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
    <div className=" border border-gray-300  grid sm:grid-cols-12 mt-21 h-auto">
      <div className="sm:col-span-4 border border-gray-300 p-5 ">
        <h1 className="flex items-center text-2xl gap-4 font-bold p-2">
          <FaUpload /> Upload Your Sources
        </h1>

        <div className="mt-7">
          <div className="grid grid-cols-4 gap-2 justify-center m-auto [&>button]:p-2 [&>button]:text-xl [&>button]:rounded-2xl [&>button]:bg-black text-white ">
            {arrbtn.map((e, i) => (
              <button
              className="font-semibold hover:bg-gray-500
           transition-all duration-300 group-hover:scale-200"  
                key={i}
                onClick={() => choosebtn(e.type)}
              >
                {e.btn}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          {filestate === "file" && (
            <div className="mt-2 p-2 flex justify-between items-center">
              <input
                type="file"
                name="file_data"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-[75%] h-[60px] rounded-2xl p-4 border  hover:bg-gray-300
           transition-all duration-300 group-hover:scale-200"
              />
              <button
                onClick={input_data_upload}
                disabled={loading}
                className="border font-bold rounded-2xl w-[90px] h-[60px] bg-black text-white  font-semibold hover:bg-gray-500
           transition-all duration-300 group-hover:scale-200"
              >
                {loading ? "Uploading..." : "Add"}
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
                className="border w-[75%] h-[60px] rounded-2xl p-3 font-semibold"
                placeholder="Enter Website URL"
              />
              <button
                onClick={input_data_upload}
                disabled={loading}
                className="border rounded-2xl w-[90px] hover:bg-gray-500
           transition-all duration-300 group-hover:scale-200
                h-[60px] bg-black text-white "
              >
                {loading ? "Uploading..." : "Add"}
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
                className="border w-[75%] h-[60px] rounded-2xl p-3 font-semibold"
                placeholder="Enter YouTube URL"
              />
              <button
                onClick={input_data_upload}
                disabled={loading}
                className="border rounded-2xl w-[90px] h-[60px] bg-black text-white
                 hover:bg-gray-500
           transition-all duration-300 group-hover:scale-200"
              >
                {loading ? "Uploading..." : "Add"}
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
                  disabled={loading}
                  className="px-4 mt-2 py-2 bg-black border text-white rounded-2xl font-medium  hover:bg-gray-500
           transition-all duration-300 group-hover:scale-200 "
                >
                  {loading ? "Uploading..." : "Submit Text"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Uploaded sources preview */}
        <div className=" mt-2 p-3 rounded-xl">
          <h2 className="text-lg font-semibold mb-2 ">Uploaded Sources</h2>
          {tempfile.length === 0 ? (
            <p className="text-gray-500">No uploads yet.</p>
          ) : (
            tempfile.map((item, index) => (
              <div key={index} className="bg-gray-300 rounded-2xl p-5 my-2  ">
                {item.file_data && (
                  <p>
                    <strong>File:</strong> {item.file_data.name}
                  </p>
                )}
                {item.website_data && (
                  <p>
                    <strong>Website:</strong> {item.website_data}
                  </p>
                )}
                {item.youtube_data && (
                  <p>
                    <strong>YouTube:</strong> {item.youtube_data}
                  </p>
                )}
                {item.text_data && (
                  <p className="truncate">
                    <strong>Text:</strong> {item.text_data.slice(0, 100)}...
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <Chat2 />
    </div>
  );
};

export default Chat;
