// // // const axios = require("axios");

// // // exports.askAI = async (req, res) => {
// // //   const { question } = req.body;

// // //   const prompt = `
// // // You are a fitness expert.
// // // Give short, practical advice.

// // // Question:
// // // ${question}
// // // `;

// // //   const API_KEY = process.env.GEMINI_API_KEY;

// // //   const callGemini = async (model) => {
// // //     return axios.post(
// // //       `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${API_KEY}`,
// // //       {
// // //         contents: [{ parts: [{ text: prompt }] }]
// // //       }
// // //     );
// // //   };

// // //   try {
    
// // //     const response = await callGemini("gemini-2.5-flash");

// // //     const text =
// // //       response.data.candidates?.[0]?.content?.parts?.[0]?.text;

// // //     return res.json({ answer: text });

// // //   } catch (err) {

// // //     console.log("Gemini failed → using fallback");

// // //     const fallbackAnswer = getFallbackAnswer(question);

// // //     return res.json({
// // //       answer: fallbackAnswer,
// // //       fallback: true
// // //     });
// // //   }
// // // };


// // // function getFallbackAnswer(question) {
// // //     const q = question.toLowerCase();
  
    
// // //     const isWeightLoss =
// // //       q.includes("weight loss") ||
// // //       q.includes("lose weight") ||
// // //       q.includes("fat loss");
  
// // //     const isWeightGain =
// // //       q.includes("weight gain") ||
// // //       q.includes("gain weight") ||
// // //       q.includes("bulk");
  
// // //     const isMuscle =
// // //       q.includes("muscle") ||
// // //       q.includes("strength") ||
// // //       q.includes("build");
  
// // //     const isDiet = q.includes("diet") || q.includes("food");
// // //     const isGreeting =
// // //     q.includes("hi") ||
// // //     q.includes("hello") ||
// // //     q.includes("hey");

// // //     const isThanks =
// // //     q.includes("thank") ||
// // //     q.includes("thanks") ||
// // //     q.includes("thx") ||
// // //     q.includes("ty");
    
// // //     if (isWeightGain && isDiet) {
// // //       return `
// // //   Weight gain vegetarian diet:
  
// // //   Breakfast: Peanut butter toast + banana shake  
// // //   Lunch: Rice + dal + paneer  
// // //   Snacks: Dry fruits + milk  
// // //   Dinner: Roti + sabzi + curd  
  
// // //   Eat calorie surplus + protein rich foods.
// // //   `;
// // //     }
  
// // //     if (isWeightLoss && isDiet) {
// // //       return `
// // //   Weight loss vegetarian diet:
  
// // //   Breakfast: Oats + fruits  
// // //   Lunch: Dal + roti + sabzi  
// // //   Dinner: Light khichdi or soup  
  
// // //   Avoid sugar, fried food, and junk.
// // //   `;
// // //     }
  
// // //     if (isWeightGain) {
// // //       return `
// // //   To gain weight:
  
// // //   - Eat in calorie surplus  
// // //   - Add protein (paneer, soy, dal)  
// // //   - Strength training 4-5x/week  
// // //   - Sleep properly
// // //   `;
// // //     }
  
// // //     if (isWeightLoss) {
// // //       return `
// // //   For weight loss:
  
// // //   - Calorie deficit is key  
// // //   - Cardio + strength training  
// // //   - Walk 8-10k steps daily  
// // //   `;
// // //     }
  
// // //     if (isMuscle) {
// // //       return `
// // //   To build muscle:
  
// // //   - High protein diet  
// // //   - Progressive overload  
// // //   - Train consistently  
// // //   - Rest & recovery
// // //   `;
// // //     }
// // //     if (isGreeting) {
// // //         return "Hey! 👋 Ask me anything about workouts, diet, or fitness goals.";
// // //       }
      
// // //       if (isThanks) {
// // //         return "Glad I could help! 💪 Ask me anytime if you need more guidance.";
// // //       }
  
// // //     return "⚠️ Experiencing high demand. Please retry in a moment!";
// // //   }
// // const axios = require("axios");

// // exports.askAI = async (req, res) => {
// //   const { question } = req.body;

// //   const prompt = `
// // You are a fitness expert.
// // Give short, practical advice.

// // Question:
// // ${question}
// // `;

// //   try {
// //     const response = await axios.post("http://localhost:11434/api/generate", {
// //       model: "llama3",
// //       prompt: prompt,
// //       stream: false
// //     });

// //     const text = response.data.response;

// //     return res.json({ answer: text });

// //   } catch (err) {

// //     console.log("Ollama failed → using fallback");

// //     const fallbackAnswer = getFallbackAnswer(question);

// //     return res.json({
// //       answer: fallbackAnswer,
// //       fallback: true
// //     });
// //   }
// // };

// const axios = require("axios");

// exports.askAI = async (req, res) => {
//   const { question } = req.body;

//   // 🔒 Input validation
//   if (!question || question.trim() === "") {
//     return res.status(400).json({ answer: "Question is required" });
//   }

//   // 🧠 Better prompt (more useful responses)
//   const prompt = `
// You are a professional fitness coach.

// Rules:
// - Give short, actionable advice
// - Focus on practical diet/workout tips
// - Be specific (sets, reps, food examples)
// - Avoid generic motivation
// - Keep answer under 120 words

// Question:
// ${question}
// `;

//   try {
//     const response = await axios.post(
//       "http://localhost:11434/api/generate",
//       {
//         model: "llama3",
//         prompt: prompt,
//         stream: false,
//         keep_alive: "5m"
//       },
//       {
//         timeout:  50000
//       }
//     );

//     const text = response.data.response?.trim();

//     return res.json({
//       answer: text || "No response from AI"
//     });

//   } catch (err) {

//     console.error("❌ Ollama error:", err.response?.data || err.message);

//     const fallbackAnswer = getFallbackAnswer(question);

//     return res.json({
//       answer: fallbackAnswer,
//       fallback: true
//     });
//   }
// };


// // 🔁 Fallback logic (important when Ollama fails)
// function getFallbackAnswer(question) {
//   const q = question.toLowerCase();

//   const isWeightLoss =
//     q.includes("weight loss") ||
//     q.includes("lose weight") ||
//     q.includes("fat loss");

//   const isWeightGain =
//     q.includes("weight gain") ||
//     q.includes("gain weight") ||
//     q.includes("bulk");

//   const isMuscle =
//     q.includes("muscle") ||
//     q.includes("strength") ||
//     q.includes("build");

//   const isDiet =
//     q.includes("diet") ||
//     q.includes("food");

//   const isGreeting =
//     q.includes("hi") ||
//     q.includes("hello") ||
//     q.includes("hey");

//   const isThanks =
//     q.includes("thank") ||
//     q.includes("thanks") ||
//     q.includes("thx") ||
//     q.includes("ty");

//   if (isGreeting) {
//     return "Hey! 👋 Ask me anything about workouts, diet, or fitness goals.";
//   }

//   if (isThanks) {
//     return "Glad I could help! 💪 Ask anytime.";
//   }

//   if (isWeightGain && isDiet) {
//     return `
// Weight gain vegetarian diet:

// Breakfast: Peanut butter toast + banana shake  
// Lunch: Rice + dal + paneer  
// Snacks: Dry fruits + milk  
// Dinner: Roti + sabzi + curd  

// Eat calorie surplus + protein-rich foods.
// `;
//   }

//   if (isWeightLoss && isDiet) {
//     return `
// Weight loss vegetarian diet:

// Breakfast: Oats + fruits  
// Lunch: Dal + roti + sabzi  
// Dinner: Light khichdi or soup  

// Avoid sugar, fried food, junk.
// `;
//   }

//   if (isWeightGain) {
//     return `
// To gain weight:

// - Eat in calorie surplus  
// - Add protein (paneer, soy, dal)  
// - Strength training 4-5x/week  
// - Sleep properly
// `;
//   }

//   if (isWeightLoss) {
//     return `
// For weight loss:

// - Calorie deficit is key  
// - Cardio + strength training  
// - Walk 8-10k steps daily
// `;
//   }

//   if (isMuscle) {
//     return `
// To build muscle:

// - High protein diet  
// - Progressive overload  
// - Train consistently  
// - Rest & recovery
// `;
//   }

//   return "⚠️ Experiencing High Demand. Please Try again.";
// }


// const axios = require("axios");

// exports.askAI = async (req, res) => {
//   const { question } = req.body;

//   if (!question || question.trim() === "") {
//     return res.status(400).json({ answer: "Question is required" });
//   }

//   try {
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         model: "nvidia/nemotron-3-super-120b-a12b:free",
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
//           "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json",
//           "HTTP-Referer": "https://fit-buddy-blond.vercel.app/",  
//           "X-Title": "FitnessBuddy"
//         },
//         timeout: 20000
//       }
//     );

//     const text = response.data.choices?.[0]?.message?.content;

//     return res.json({
//       answer: text || "No response",
//       model: "nemotron"
//     });

//   } catch (err) {
//     console.error("Error:", err.response?.data || err.message);

//     return res.json({
//       answer: "⚠️ AI busy. Try again.",
//       fallback: true
//     });
//   }
// };
const axios = require("axios");

exports.askAI = async (req, res) => {
  const { question } = req.body;

  if (!question || question.trim() === "") {
    return res.status(400).json({ answer: "Question is required" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "nvidia/nemotron-3-super-120b-a12b:free",
        messages: [
          {
            role: "system",
            content: "You are a professional fitness coach. Give short, practical advice."
          },
          {
            role: "user",
            content: question
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://fit-buddy-blond.vercel.app",  // ✅ no trailing slash
          "X-Title": "FitnessBuddy"
        },
        timeout: 20000
      }
    );

    const text = response.data.choices?.[0]?.message?.content;

    return res.json({
      answer: text || "No response",
      model: "nemotron"
    });

  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    return res.json({
      answer: "⚠️ AI busy. Try again.",
      fallback: true
    });
  }
};