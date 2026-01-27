import type { Config } from "jest";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>"],
};

export default config;
