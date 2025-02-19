import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import useUser from "./hooks/useUser";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function MyRoutes() {
    const { user } = useUser();
    return (
        <Routes>
            <Route index Component={Home} />
            <Route
                path="/auth"
                element={user ? <Navigate to={"/protected-route"} /> : <AuthLayout />}
            >
                <Route index element={<Navigate to={"/auth/login"} />} />
                <Route path="login" Component={Login} />
                <Route path="register" Component={Register} />
            </Route>
            <Route
                path="/protected-route"
                element={user ? <ProtectedRoute /> : <Navigate to={"/auth"} replace />}
            />
        </Routes>
    );
}
