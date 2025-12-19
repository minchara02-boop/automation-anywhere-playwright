const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  globalSetup: require.resolve('./global-setup'),

  use: {
    browserName: 'chromium',
    storageState: 'auth.json',
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
    },
  ],
});
