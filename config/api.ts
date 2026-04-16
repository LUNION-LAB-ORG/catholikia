export const baseURL = process.env.NEXT_PUBLIC_API_BACKEND_URL || "http://localhost:3000/api";
export const baseFileURL = process.env.NEXT_PUBLIC_API_FILE_URL || "http://localhost:3000";
export const cuturamaBaseURL = (process.env.NEXT_PUBLIC_CUTURAMA_BACKEND_URL || "https://admin.catholikia.com/api").replace(/\/$/, "");
