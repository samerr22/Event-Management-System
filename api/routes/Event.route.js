import express from "express";
import { verifyToken } from "../utils/VerfiyUser.js";
import {
  EventCreate,
  deleteEvnt,
  getEvent,
  updateEvent,
} from "../controllers/Event.controller.js";
import { verifyEventManger } from "../utils/VerifyEventManger.js";

const router = express.Router();

router.post("/Ecreate", verifyToken, verifyEventManger, EventCreate);
router.get("/getEvent", getEvent);
router.put("/Event/:EventId", verifyToken, verifyEventManger, updateEvent);
router.delete( "/deleteEvent/:EventId",verifyToken,verifyEventManger, deleteEvnt);

export default router;
