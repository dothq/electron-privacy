const { join } = require('path');

function randomizedUserAgent (style) {
  if(style == 'Firefox') {
    let version = Math.floor(Math.random() * (69 - 53) + 53);
    return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:' + version + '.0) Gecko/20100101 Firefox/' + version + '.0';
  } else if (style == 'Chrome') {
    let version = Math.floor(Math.random() * (74 - 60) + 74);
    return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
  }
}

function setUserAgent (webContents, agent) {
  webContents.setUserAgent(agent);
  webContents.session.webRequest.onBeforeSendHeaders(async (details, callback) => {
    let headers = details.requestHeaders;
    headers['User-Agent'] = agent;
    callback({ cancel: false, requestHeaders: headers });
  });
}

function addPreload (session, preloadName) {
  let preloads = session.getPreloads();
  preloads.push(join(__dirname, 'preloads/' + preloadName));
  session.setPreloads(preloads);
}

exports.enableFingerprintProtection = function (webContents, options={}) {
  let session = webContents.session;
  let userAgent;

  if(options.userAgentRandomization != false) {
    userAgent = randomizedUserAgent(options.userAgentStyle || 'Firefox');
    setUserAgent(webContents, userAgent);
  }

  if(options.removeBatteryAPI != false) {
    addPreload(session, 'remove_battery_api.js');
  }

  if(options.miscRandomization != false) {
    addPreload(session, 'misc_randomization.js');
  }
}

exports.enableDoNotTrack = function (session) {
  addPreload(session, 'do_not_track.js');
  session.webRequest.onBeforeSendHeaders(async (details, callback) => {
    let headers = details.requestHeaders;
    headers['DNT'] = '1';
    callback({ cancel: false, requestHeaders: headers });
  });
}

exports.blockThirdPartyCookies = function (webContents, removed) {
  let session = webContents.session;

  session.cookies.on('changed', async (e, cookie, cause, rem) => {
    if(!rem) {
      let split = cookie.domain.split('.');
      let domain = split[split.length - 2] + '.' + split[split.length - 1];
      split = (new URL(view.webContents.getURL())).host.split('.');
      let host = split[split.length - 2] + '.' + split[split.length - 1];
      if(domain != host) {
        if(removed) removed(cookie);
        session.cookies.remove(webContents.getURL(), cookie.name);
      }
    }
  });
}
