import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name:{ type:String, required:true },
    description:{type:String, required:true },
    date:{type:Date, required:true },
    startTime: {type:Date, required:true },
    endTime: {type:Date, required:true },
    category: {type:String, enum: ["Music", "Sports", "Confernce", "Workshop"], required:true },
    location:{type:String, required:true },
    imageUrl: {type:String, default: "https://example.com/default-event-image.jpg"},
    capacity: { type: Number, default: 100 },

    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User", required:true },
    createdAt: {type:Date, default: Date.now },

});


export default mongoose.model("Event", eventSchema);
