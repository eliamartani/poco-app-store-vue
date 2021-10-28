module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-strongly-recommended", "prettier"],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/require-default-prop": "off",
  },
  ignorePatterns: ["node_modules/*"],
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
  },
};
