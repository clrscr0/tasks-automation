const { element, browser } = require("protractor");

describe('batch download file', function() {
  it('download all pdf', async function() {
    browser.ignoreSynchronization = true;

    await browser.get('https://ilovecoding.org/blog/js-cheatsheet');

    let links = element.all(by.xpath("//a[contains(@href, '.pdf')]"));
    await expect(await links.count()).toBe(0);

    await links.each(async (link) => {
        await link.click();
        await browser.sleep(10000);
    });

  });
});