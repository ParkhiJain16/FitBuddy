const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controller/logController");


router.post("/",auth,ctrl.addLog);
router.get("/",auth,ctrl.getLogs);
router.put("/:id", auth, ctrl.updateLogs);
router.delete("/:id", auth, ctrl.deleteLogs);
module.exports = router;