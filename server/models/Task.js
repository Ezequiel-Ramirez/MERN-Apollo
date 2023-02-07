import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;

