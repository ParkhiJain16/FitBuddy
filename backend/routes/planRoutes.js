const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controller/planController");


router.post("/",auth,ctrl.createPlan);
router.get("/",auth,ctrl.getPlan);
router.delete("/:id",auth,ctrl.deletePlan);
router.put("/:id",auth,ctrl.updatePlan);

module.exports = router;