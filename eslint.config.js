import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react: reactPlugin,
      "react-hooks": reactHooks,
      prettier: prettier,
      import: importPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": ["error"],
      "@typescript-eslint/no-explicit-any": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": ["error"],
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],

      eqeqeq: [2, "smart"],
      "no-console": ["error"],
      "no-unused-vars": "off", // Disable base rule as it conflicts with @typescript-eslint/no-unused-vars
      "no-restricted-imports": ["error"],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
      },
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/public/**",
      "**/pnpm-lock.yaml",
      "**/canvas-map/**",
      "vite.config.ts",
    ],
  },
];
