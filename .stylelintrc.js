module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "comment-empty-line-before": null,
    "comment-whitespace-inside": null,
    "comment-no-empty": null,
    "plugin/selector-bem-pattern": {
      preset: "bem",
    },
    "selector-class-pattern": null,
    "custom-property-pattern": "[a-z0-9-]+",
  },
};
