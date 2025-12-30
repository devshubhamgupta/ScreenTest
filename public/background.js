chrome.action.onClicked.addListener(async (tab) => {
  const currentUrl = tab.url || 'https://www.google.com';
  const encodedUrl = encodeURIComponent(currentUrl);
  chrome.tabs.create({ url: `index.html?url=${encodedUrl}` });
});
