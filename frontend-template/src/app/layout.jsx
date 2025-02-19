"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryclient = new QueryClient();
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryclient}>
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
}
