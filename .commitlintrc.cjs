module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce module-scoped commits per engineering standards Section 15.5
    // Valid: feat(auth): ...  fix(product): ...  chore(shared): ...
    'scope-enum': [
      2, // 2 = error (blocks commit)
      'always',
      [
        'auth',      // modules/auth
        'account',   // modules/account
        'product',   // modules/product
        'blogs',     // modules/blogs
        'support',   // modules/support
        'shared',    // src/shared (cross-module change)
        'infra',     // CI, GitHub Actions, tooling
        'config',    // next.config, tsconfig, eslint
        'i18n',      // i18n engine / loader
        'store',     // global store / providers
      ],
    ],
  },
};
