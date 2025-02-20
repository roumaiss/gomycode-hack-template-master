import { apiConfig } from "../axiosConfig";

// Fetch all alimentation programs
export async function getAlimentationProgram() {
    try {
        const response = await apiConfig.get("/alimentation-program");
        return response.data;
    } catch (error) {
        throw new Error(
            "Failed to fetch alimentation program: " + error.message
        );
    }
}
