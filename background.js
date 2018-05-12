// On install, add listener that will enable extension page action conditionally
chrome.runtime.onInstalled.addListener(function() {
	// Replace existing rules
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // Add a rule that will enable the page action
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // match when URL contains 'newyorker.com'
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'newyorker.com' },
          })
        ],
        // show the extension's page action (no longer greyed out)
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// Then add click handler on pageAction that executes skim script 
chrome.pageAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		file: 'skim.js'
	});
});
