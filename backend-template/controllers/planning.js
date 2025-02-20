import planningModal from "../models/planning.js";

// functions for the user and proffitionalsim
export async function addPlan(req, res) {
    const { userId, title, description, schedule } = req.body;

    try {
        const newPlan = new planningModal({
            userId,
            profissionalId: req.user._id,
            title,
            description,
            schedule,
        });

        await newPlan.save();
        res.json({ data: newPlan, status: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

// export async function addTaskToPlan(req, res) {
//     const { planId: _id } = req.params;
//     const { date, time, title, endTime, startTime, description } = req.body; // Task details

//     try {
//         const plan = await planningModal.findById(_id);

//         if (!plan) {
//             return res.status(404).json({ message: "Plan not found" });
//         }

//         const schedule = plan.schedule.find((s) => s.date.toISOString() === date); // Find the schedule by date
//         if (!schedule) {
//             plan.schedule.push({ date, tasks: [{ time, title, description, startTime, endTime }] });
//         } else {
//             schedule.tasks.push({ time, title, description, startTime, endTime });
//         }

//         await plan.save();
//         res.json({ data: plan, status: "success" });
//     } catch (error) {
//         res.status(500).json({ message: error.message, status: "error" });
//     }
// }
// that created by user
export async function getUserPlansByDate(req, res) {
    const date = req.params.date;
    const { userId } = req.user;

    try {
        if (!date) throw new Error("No date passed in the request");

        const targetDate = new Date(date);

        const plans = await planningModal
            .find({
                userId,
                "schedule.date": {
                    $gte: targetDate.setHours(0, 0, 0, 0),
                    $lt: targetDate.setHours(23, 59, 59, 999),
                },
            })
            .populate("userId");

        if (plans.length === 0) {
            return res.status(404).json({ message: "No user-created plans found" });
        }

        res.json({ data: plans, status: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

// that created by profitionnal
export async function getProPlansByDate(req, res) {
    const { date } = req.params;
    const { userId } = req.user;
    try {
        if (!date) throw new Error("No date passed in the request");

        const targetDate = new Date(date);

        const plans = await planningModal
            .find({
                profissional: userId, // Only plans assigned to the user by a professional
                "schedule.date": {
                    $gte: targetDate.setHours(0, 0, 0, 0),
                    $lt: targetDate.setHours(23, 59, 59, 999),
                },
            })
            .populate(["profissionalId", "userId"]);

        if (plans.length === 0) {
            return res.status(404).json({ message: "No professional-created plans found" });
        }

        res.json({ data: plans, status: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

//  update plan

export async function updatePlan(req, res) {
    const { id: _id } = req.params; // Plan ID from URL
    const updateData = req.body; // New data
    const userRole = req.user?.type; // Role (SimpleUser, Professional, Admin)

    try {
        const plan = await planningModal.findById(_id);
        if (!plan) throw new Error("Plan not found");

        // Check if the user is allowed to update the plan
        if (
            userRole === "Admin" ||
            plan.userId.equals(req.user._id) ||
            plan.profissionalId?.equals(req.user._id)
        ) {
            Object.assign(plan, updateData);
            await plan.save();
            return res.json({ data: plan, status: "success" });
        } else {
            return res.status(403).json({ message: "Not authorized to update this plan" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}

//  delete plan

export async function deletePlan(req, res) {
    const { id: _id } = req.params;
    const userRole = req.user?.role;
    try {
        const plan = await planningModal.findById(_id);
        if (!plan) throw new Error("Plan not found");

        // Check if the user is authorized to delete the plan
        if (
            userRole === "admin" ||
            plan.userId.equals(req.user._id) ||
            plan.profissionalId?.equals(req.user._id)
        ) {
            await planningModal.findByIdAndDelete(_id);
            return res.json({ message: "Plan deleted successfully", status: "success" });
        } else {
            return res.status(403).json({ message: "Not authorized to delete this plan" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message, status: "error" });
    }
}
