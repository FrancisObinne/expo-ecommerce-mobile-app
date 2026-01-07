import dotenv from "dotenv";

dotenv.config();

const getEnvVar = (key: string, defaultValue?: string): string => {
    const value = process.env[key];
    if (!value && !defaultValue) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value || defaultValue!;
};

export const ENV = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: getEnvVar("PORT", "3000"),
    DB_URL: getEnvVar("DB_URL")
};