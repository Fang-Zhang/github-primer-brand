/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: OrderedList', () => {
  test('OrderedList / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-orderedlist--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('OrderedList / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-orderedlist--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
