import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
    expect: { requireAssertions: true },
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/main.ts"],
      reporter: ["text", "html"],
      reportsDirectory: "reports/coverage",
      thresholds: {
        lines: 90,
        branches: 90,
        functions: 90,
        statements: 90,
        "src/domain/**": { 100: true },
        "src/application/**": { 100: true },
      },
    },
  },
});
