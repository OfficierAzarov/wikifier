import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// Browser objects forbidden in the hexagon core, see docs/adr/0002-architecture-hexagonale.md.
const browserGlobals = [
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "navigator",
  "fetch",
];

export default defineConfig(
  globalIgnores([
    "dist/",
    "reports/",
    ".stryker-tmp/",
    "playwright-report/",
    "test-results/",
    ".agents/",
    ".claude/",
  ]),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      // Size and complexity budgets: keep functions and files small.
      complexity: ["error", 8],
      "max-depth": ["error", 3],
      "max-params": ["error", 3],
      "max-lines-per-function": ["error", { max: 40, skipBlankLines: true, skipComments: true }],
      "max-lines": ["error", { max: 250, skipBlankLines: true, skipComments: true }],
      "no-console": "error",
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["src/domain/**/*.ts", "src/application/**/*.ts"],
    ignores: ["**/*.test.ts"],
    rules: {
      "no-restricted-globals": [
        "error",
        ...browserGlobals.map((name) => ({
          name,
          message: "The domain and application layers must go through a port.",
        })),
      ],
      "no-restricted-properties": [
        "error",
        { object: "Date", property: "now", message: "Inject a Clock port instead." },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "NewExpression[callee.name='Date'][arguments.length=0]",
          message: "Inject a Clock port instead of reading the current time.",
        },
      ],
    },
  },
  {
    files: ["src/**/*.test.ts"],
    ...vitest.configs.recommended,
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/expect-expect": "error",
      "vitest/no-conditional-expect": "error",
      "vitest/no-disabled-tests": "error",
      "vitest/no-focused-tests": "error",
      "vitest/valid-title": "error",
      "max-lines-per-function": "off",
    },
  },
  {
    files: ["e2e/**/*.ts"],
    rules: { "max-lines-per-function": "off" },
  },
  {
    files: ["*.ts", "*.cjs", "*.js"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["*.cjs", "*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
