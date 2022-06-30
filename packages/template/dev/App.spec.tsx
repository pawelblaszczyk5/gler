import { test, expect } from 'playwright-ct-solidjs';
import { App } from './App';

test('should render heading with greeting', async ({ mount, page }) => {
	await mount(<App />);

	await expect(page.locator('role=heading[level=1][name="Hello world!"]')).toBeVisible();
});
