// import { useState } from "react";
// import axios from "axios";
// import { API_URL } from "../config";

// const AIChat = () => {
//   const [question, setQuestion] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     if (!question.trim() || loading) return;

//     const token = localStorage.getItem("token");

//     const userMessage = { role: "user", text: question };
//     const updatedMessages = [...messages, userMessage];

//     setMessages(updatedMessages);
//     setQuestion("");
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         `${API_URL}/api/ai`,  
//         { question },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       const aiMessage = {
//         role: "ai",
//         text: res.data.answer || "No response"
//       };

//       setMessages([...updatedMessages, aiMessage]);

//     } catch (err) {
//       console.error(err);

//       let errorMsg = "Something went wrong";

//       if (err.response?.status === 401) {
//         errorMsg = "⚠️ Please log in to use the AI.";  
//       } else if (err.response?.status === 429) {
//         errorMsg = "⚠️ AI limit reached. Try later.";
//       } else if (err.response?.status === 503) {
//         errorMsg = "⏳ AI is busy. Try again.";
//       }

//       setMessages([
//         ...updatedMessages,
//         { role: "ai", text: errorMsg }
//       ]);

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="ai-container">
//       <h2>AI Fitness Assistant</h2>

//       <div className="chat-box">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`message ${msg.role === "user" ? "user" : "ai"}`}
//           >
//             {msg.text}
//           </div>
//         ))}

//         {loading && (
//           <div className="message ai">Typing...</div>
//         )}
//       </div>

//       <div className="input-box">
//         <input
//           type="text"
//           placeholder="Ask about diet, workout..."
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && askAI()}
//         />
//         <button onClick={askAI} disabled={loading}>
//           {loading ? "..." : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AIChat;
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const AIChat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim() || loading) return;

    const token = localStorage.getItem("token");

    const userMessage = { role: "user", text: question };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setQuestion("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/api/ai`,
        { question }
      );

      const aiMessage = {
        role: "ai",
        text: res.data.answer || "No response"
      };

      setMessages([...updatedMessages, aiMessage]);

    } catch (err) {
      console.error(err);

      let errorMsg = "Something went wrong";

      if (err.response?.data?.error) {
        errorMsg = err.response.data.error;
      } else if (err.response?.status === 401) {
        errorMsg = "⚠️ Invalid API key";
      } else if (err.response?.status === 429) {
        errorMsg = "⚠️ AI limit reached. Try later.";
      } else if (err.response?.status === 503) {
        errorMsg = "⏳ AI is busy. Try again.";
      }

      setMessages([
        ...updatedMessages,
        { role: "ai", text: errorMsg }
      ]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-container">
      <h2>AI Fitness Assistant</h2>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.role === "user" ? "user" : "ai"}`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message ai">Typing...</div>
        )}
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Ask about diet, workout..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && askAI()}
        />
        <button onClick={askAI} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default AIChat;