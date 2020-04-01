const { resolve } = require('path');

const addPreload = (session, preload) => {
  const sessionPreloads = session.getPreloads()

  sessionPreloads.push(resolve(__dirname, 'preloads/', preload))

  session.setPreloads(sessionPreloads)
}

const loadPrivacyFeatures = (session, options) => {
  if(!options) options = {}
  if(!options.disableBatteryAPI) options.disableBatteryAPI = false;
  if(!options.block3rdPartyCookies) options.block3rdPartyCookies = false;
  if(!options.doNotTrack) options.doNotTrack = false;
  if(!options.maskSystemInformation) options.maskSystemInformation = false;
  if(!options.maskColorDepth) options.maskColorDepth = false;
  if(!options.removeReferer) options.removeReferer = false;

  if(options.verbose) options.verbose = true;

  if(session == undefined || Object.keys(session).length === 0 && session.constructor === Object || session == null || !session.cookies || !session.webRequest) return console.error("Session is invalid.")

  for (const [key, value] of Object.entries(options)) {
    if(options.verbose) console.log(key, value)

    if(value == true && key !== 'verbose' && key !== 'customReferer') {
      if(key == "doNotTrack") enableDNT(session, options)
      if(key == "block3rdPartyCookies") block3rdPartyCookies(session, options)
      if(key == "removeReferer") removeReferer(session, options)

      if(key !== "removeReferer" && key !== 'block3rdPartyCookies') {
        addPreload(session, key)

        if(options.verbose) console.log(`Added \`${key}\` to preload.`)
      }
    }
  }
}

const enableDNT = (session, options) => {
  if(options.verbose) console.log(`Enabled \`DNT\` extension`)

  session.webRequest.onBeforeSendHeaders(async (details, callback) => {
		let headers = details.requestHeaders;
		headers['DNT'] = '1';
		callback({ cancel: false, requestHeaders: headers });
	});
}

const removeReferer = (session, options) => {
  if(options.verbose) console.log(`Enabled \`Referer\` extension`)

  session.webRequest.onBeforeSendHeaders(async (details, callback) => {
		let headers = details.requestHeaders;
		headers['Referer'] = options.customReferer ? options.customReferer : '';
		callback({ cancel: false, requestHeaders: headers });
	});
}

const block3rdPartyCookies = (session, options) => {
  if(options.verbose) console.log(`Enabled \`3rd Party Cookies\` extension`)

  session.cookies.on('changed', async (e, cookie, cause, rem) => {
    if(!rem) {
      let split = cookie.domain.split('.');
      let domain = split[split.length - 2] + '.' + split[split.length - 1];
      split = (new URL(webContents.getURL())).host.split('.');
      let host = split[split.length - 2] + '.' + split[split.length - 1];
      if(domain != host) {
        if(removed) removed(cookie);
        session.cookies.remove(webContents.getURL(), cookie.name);
      }
    }
  });
}

module.exports = loadPrivacyFeatures