import Event from "../models/Event.js";


export const createEvent = async (req,res) => {
    try{
        
        const { name, description, date, startTime, endTime, category, location, imageUrl, capacity } = req.body;
        const createdBy = req.userId;
        const newEvent = new Event({
            name,
            description,
            date,
            startTime,
            endTime,
            category,
            location,
            imageUrl,
            capacity,
            createdBy
        });
        await newEvent.save();
        res.status(201).json({message:"Event created successfuully",newEvent});
    }catch(error) {
        res.status(500).json({message:"Server error while creating events"});
    }
}

export const getAllEvents = async (req,res) => {
    try{
        const events = await Event.find().populate("createdBy", "username");
        res.status(200).json(events);
    }catch(error) {
        res.status(500).json({message:"Server error while getting all events"});

    }
}

export const getEventById = async (req,res) => {
    try{
        const {eventId} = req.params;
        const event = await Event.findById(eventId).populate("createdBy", "username");
        if(!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    }catch(error) {
        res.status(500).json({message:"Server error",error});

    }
}
export const updateEvent = async (req,res) => {
    try{
        const {eventId} = req.params;
        const updateData = req.body;

        const updatedEvent = await Event.findOneAndUpdate({_id:eventId, createdBy: req.user.id, new:true});
        if(!updatedEvent) {
            return res.status(404).json({ message: "Event not found or unauthorized"});
        }
        res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
    }catch(error) {
        res.status(500).json({message:"Server error",error});

    }
}

export const deleteEvent = async(req,res) => {
    try{
        const { eventId } = req.params;
        const deletedEvent = await Event.findOneAndDelete({_id:eventId,createdBy: req.user.id});
        if(!deletedEvent) {
            return res.status(404).json({ message: "Event not found or unauthorized"});

        }
        res.status(200).json({message:"Event deleted successfully"});
    }catch(error) {
        res.staus(500).json({message:"Server error while deleting events"});
    }
}