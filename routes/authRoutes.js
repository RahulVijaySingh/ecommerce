import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  getOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { updateProductController } from "../controllers/productController.js";

const router = express.Router();

// regestration route
router.post("/register", registerController);

// login route
router.post("/login", loginController);

// forgot password  ||  POSTT
router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController); //requireSignIn isAdmin is mmiddele ware       //token based ke liye aise krte hai routing

// protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
