export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation
        "style", // Code style (formatting, no code changes)
        "refactor", // Code refactoring (no new features or bug fixes)
        "test", // Testing
        "chore", // Build process or auxiliary tool changes
        "perf", // Performance optimization
        "build", // Build system or external dependency changes
        "ci", // CI configuration files and scripts changes
        "revert", // Revert commit
        "comment", // Copilot comment additions
      ],
    ],
    "subject-case": [0], // No case restriction for subject
    "subject-max-length": [2, "always", 100], // Maximum subject length
    "body-max-line-length": [2, "always", 200], // Maximum body line length
  },
};
