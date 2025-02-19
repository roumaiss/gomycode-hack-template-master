import { apiConfig } from "../axiosConfig";

export async function login({ email, password }) {
    return apiConfig.post("/auth/login", {
        email,
        password,
    });
}
export async function register({ email, password, firstName, lastName }) {
    return apiConfig.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
    });
}

export async function checkUser() {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("You aren't logged in");
    return apiConfig.get("/auth", {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}
