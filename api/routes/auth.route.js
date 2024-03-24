import express from "express";
import { signgin  } from "../controllers/auth.controller.js";


const route = express.Router();


route.post("/signin", signgin);

export default route;
