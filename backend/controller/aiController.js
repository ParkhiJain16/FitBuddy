// const axios = require("axios");

// exports.askAI = async (req, res) => {
//   const { question } = req.body;

//   if (!question || question.trim() === "") {
//     return res.status(400).json({ error: "Question is required" });
//   }

//   try {
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         model: "openrouter/auto",
//         messages: [
//           {
//             role: "system",
//             content: "You are a professional fitness coach. Give short, practical advice."
//           },
//           {
//             role: "user",
//             content: question
//           }
//         ]
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         timeout: 30000
//       }
//     );

//     const text = response.data?.choices?.[0]?.message?.content;

//     if (!text) {
//       return res.status(500).json({ error: "No response from AI" });
//     }

//     return res.status(200).json({ answer: text });

//   } catch (err) {
//     console.error("❌ OpenRouter STATUS:", err.response?.status);
//     console.error("❌ OpenRouter ERROR:", JSON.stringify(err.response?.data));

//     return res.status(err.response?.status || 500).json({
//       error: err.response?.data?.error?.message || err.message
//     });
//   }
// };
const axios = require("axios");

exports.askAI = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question required" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              { text: `Give short fitness advice: ${question}` }
            ]
          }
        ]
      }
    );

    const text =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({ answer: text || "No response" });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "AI failed" });
  }
};


