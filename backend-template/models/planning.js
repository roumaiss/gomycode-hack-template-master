import { model, Schema } from "mongoose";
const taskSchema = new Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
});
const planningSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        profissionalId: {
            type: Schema.Types.ObjectId,
            ref: "Professional",
        },
        title: { type: String, required: true }, // Name of the plan
        description: { type: String }, // Optional description
        schedule: [
            {
                date: { type: Date, required: true },
                tasks: [taskSchema],
            },
        ],
    },

    { timestamps: true }
);

const planningModal = model("Planning", planningSchema);

export default planningModal;
