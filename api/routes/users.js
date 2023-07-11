import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

const port = process.env.PORT || 3001;

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
