import { apiConfig } from "../axiosConfig";

export async function getUserPlansbyDate(date = "Sunday") {
    try {
        const response = await apiConfig.get(`/planUser/${date}`);
        if (!response.ok) throw new Error(`No plans found for ${day}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch Todos", error.message);
    }
}

export async function createPlan(plan) {
    try {
        const response = await apiConfig.post("/planUser/add", plan);
        return response.data;
    } catch (error) {
        throw new Error("Failed to create Plan", error.message);
    }
}

