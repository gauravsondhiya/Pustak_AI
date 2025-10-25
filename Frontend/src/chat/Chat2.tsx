import axios from "axios";
import React, { useState } from "react";

const Chat2 = () => {
  const [userinput, setuserinput] = useState("");
  const [datapass, setdatapass] = useState([]);
  const [loading, setloading] = useState(false); // default false

  const get_fetch_data = async () => {
    console.log(userinput);
    setloading(true);

    // Step 1: Show loader message in chat immediately
    const loaderMsg = {
      id: "loader",
      msgsend: "typing...", // temp text
      sender: "bot",
      isLoader: true, // special flag
    };
    setdatapass((pre) => [...pre, loaderMsg]);

    try {
      const response = await axios.post(
        import.meta.env.VITE_CHAT_DATA,
        { userinput },
        { headers: { "Content-Type": "application/json" } }
      );

      // Step 2: Remove loader & add bot reply
      setdatapass((pre) => [
        ...pre.filter((msg) => msg.id !== "loader"), // remove loader
        {
          id: Date.now(),
          msgsend: response.data,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);
      // remove loader and show error
      setdatapass((pre) => [
        ...pre.filter((msg) => msg.id !== "loader"),
        {
          id: Date.now(),
          msgsend: "⚠️ Error fetching data. Try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setloading(false);
    }
  };

  const sendbtn = () => {
    if (!userinput.trim()) return;
    let send = { id: Date.now(), msgsend: userinput, sender: "user" };
    setdatapass((pre) => [...pre, send]);
    get_fetch_data();
    setuserinput("");
  };

  return (
    <div className="sm:col-span-8 h-[600px]  border-amber-400 flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-400">
        <h1 className="text-2xl font-bold">Chat</h1>
        <p>Ask questions about your uploaded sources</p>
      </div>

      {/* Chat Screen */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {datapass.map((e, i) => (
          <div
            key={i}
            className={`flex ${
              e.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={` px-4 py-2 rounded-2xl max-w-xs break-words ${
                e.sender === "user"
                  ? "bg-black text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {/* Loader dots animation */}
              {e.isLoader ? (
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              ) : (
                e.msgsend
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="border-t p-5 flex gap-3">
        <input
          type="text"
          value={userinput}
          onChange={(e) => setuserinput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendbtn()}
          placeholder="Ask A Question About Your Sources..."
          className="border w-[90%] rounded-2xl p-4 focus:ring-2 outline-none"
        />
        <button
          onClick={sendbtn}
          disabled={loading}
          className="border p-2 w-[80px] rounded-2xl
           bg-black text-white disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat2;
