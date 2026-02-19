import type { Config } from "jest";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: {
          module: "ESNext",
        },
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!(uuid|node-pg-migrate|glob)/)"],
  testTimeout: 60000,
};

export default config;
