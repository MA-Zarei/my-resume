const isUnsupportedBrowser = (): boolean => {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent;

  const isFirefox = /firefox/i.test(userAgent);
  const isSafari =
    /safari/i.test(userAgent) && !/chrome|chromium|crios/i.test(userAgent);

  return isFirefox || isSafari;
};

export default isUnsupportedBrowser;