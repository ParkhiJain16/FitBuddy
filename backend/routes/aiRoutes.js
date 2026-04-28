// const router = require("express").Router();
// const auth = require("../middleware/authMiddleware");
// const { askAI } = require("../controller/aiController");

// router.post("/", auth, askAI);

// module.exports = router;
// aiRoutes.js
const router = require("express").Router();
const { askAI } = require("../controller/aiController");

router.post("/", askAI);  

module.exports = router;