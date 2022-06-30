import type { PlaywrightTestConfig } from 'playwright-ct-solidjs';

import { devices } from '@playwright/test';
import { sharedConfigWithPlaywright } from './vite.config.js';

export const playwrightConfig: PlaywrightTestConfig = {
	forbidOnly: !!process.env['CI'],
	retries: process.env['CI'] ? 2 : 0,
	use: {
		trace: 'on-first-retry',
		ctViteConfig: sharedConfigWithPlaywright,
		viewport: { width: 500, height: 500 },
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],
};
