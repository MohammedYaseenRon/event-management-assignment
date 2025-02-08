import { Router } from "express";
import { createEvent,getAllEvents,getEventById,updateEvent,deleteEvent } from "../controllers/eventController.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

router.post("/create", authenticate, createEvent);  // Use authenticate middleware to verify JWT

// Get all events
router.get("/", getAllEvents);

// Get a single event by ID
router.get("/:eventId", getEventById);

// Update an event by ID
router.put("/:eventId", authenticate, updateEvent); 

// Delete an event by ID
router.delete("/:eventId", authenticate, deleteEvent);  

export default router;