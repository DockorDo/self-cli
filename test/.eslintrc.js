module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "prettier",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "vue"],
    rules: {
        camelcase: 1, // 强制使用驼峰命名
        "consistent-return": 1, // 函数要么指定值要么不指定
        curly: ["error", "multi"], // if语句尽量都使用大括号
        "default-case-last": 1,
        "default-param-last": ["error"],
        eqeqeq: ["error", "smart"],
        "logical-assignment-operators": [2, "always"],
        "multiline-comment-style": [2, "starred-block"],
        "no-empty": 2, // 禁止空语句块 {}
        "no-empty-function": 2, // 禁止声明函数后不写内容
        "no-empty-static-block": "error", // 禁止类中声明空的static
        "no-eval": "error", // 禁止使用eval
        "no-invalid-this": "error",
        "no-unneeded-ternary": "error",
        "no-var": "error",
        "one-var": ["error", "always"],
        "lines-around-comment": ["error", { beforeBlockComment: true }],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
};
