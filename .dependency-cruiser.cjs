// Dependency rules for the hexagonal architecture, see docs/adr/0002-architecture-hexagonale.md.
/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Circular dependencies make modules impossible to understand in isolation.",
      from: {},
      to: { circular: true },
    },
    {
      name: "domain-is-pure",
      severity: "error",
      comment: "The domain depends on nothing but itself: no adapter, no library, no browser API.",
      from: { path: "^src/domain/", pathNot: "\\.test\\.ts$" },
      to: { pathNot: "^src/domain/" },
    },
    {
      name: "application-depends-on-domain-only",
      severity: "error",
      comment: "Use cases reach the outside world through ports (interfaces), never adapters.",
      from: { path: "^src/application/", pathNot: "\\.test\\.ts$" },
      to: { pathNot: "^src/(domain|application)/" },
    },
    {
      name: "adapters-are-independent",
      severity: "error",
      comment: "An adapter never imports another adapter; src/main.ts wires them together.",
      from: { path: "^src/adapters/([^/]+/[^/]+)/" },
      to: { path: "^src/adapters/", pathNot: "^src/adapters/$1/" },
    },
    {
      name: "only-main-is-the-composition-root",
      severity: "error",
      comment: "Nothing imports the composition root.",
      from: {},
      to: { path: "^src/main\\.ts$" },
    },
    {
      name: "production-code-does-not-import-tests",
      severity: "error",
      from: { pathNot: "\\.test\\.ts$" },
      to: { path: "\\.test\\.ts$" },
    },
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default", "types"],
    },
  },
};
