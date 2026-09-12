import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],

  use: {
    trace: 'on',                 // enables network logs + trace viewer
    video: 'on',                 // records video for each test
    screenshot: 'on',            // captures screenshots on failure
    console: 'retain-on-failure' // keeps console logs
  },

  projects: [
    {
      name: 'Chromium-Windows',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox-Linux',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit-macOS',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});