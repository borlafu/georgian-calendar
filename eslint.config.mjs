// eslint.config.mjs
import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      ".next/**",
      "public/**",
      "node_modules/**",
      "dist/**",
      "out/**",
    ],
  },

  // Core JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
  },

  // TypeScript specific
  tseslint.config({
    files: ["**/*.{ts,tsx}"],
    extends: tseslint.configs.recommended,
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }),

  // Next + React
  ...next.map(config => ({
    ...config,
    files: ["**/*.{js,jsx,ts,tsx}"],
  })),

  // Optional: Tailwind classes sorting (via Tailwind ESLint plugin)
  // Install: npm install -D eslint-plugin-tailwindcss
  // {
  //   files: ["**/*.{js,jsx,ts,tsx}"],
  //   plugins: {
  //     tailwindcss: (await import("eslint-plugin-tailwindcss")).default,
  //   },
  //   rules: {
  //     "tailwindcss/no-custom-classname": "warn",
  //   },
  // },
]);