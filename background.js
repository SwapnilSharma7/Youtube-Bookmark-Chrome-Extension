chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters); // it will search v and t. which are parameters.
      // url parameters will help to find the unique video
      // https://www.youtube.com/watch?v=07259nd4Zu875&t=142s
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"), // 07259nd4Zu875&t=142s
      });
    }
  });
  