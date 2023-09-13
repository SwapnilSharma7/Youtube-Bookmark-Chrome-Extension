// https://developer.chrome.com/docs/extensions/reference/tabs/
// Get a current tab
//some changes are made
export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
    // return all the tabs which are open
    return tabs[0]; // we want to go with the first one.
}