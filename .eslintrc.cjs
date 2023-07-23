/* eslint-env node */
module.exports = {
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    extends: ["webpractik", "next", "next/core-web-vitals"],
    rules: {
        "lodash/import-scope": "off",
        "prettier/prettier": ["error", {
            "tabWidth": 2
        }],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ]
    }
}
