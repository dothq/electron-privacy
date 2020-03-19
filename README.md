<p align="center"><img src="https://i.spike.codes/u/V2Nkp.png" alt="Logo" width="175"></p>
<h3 align="center">electron-privacy</h3>
<p align="center">Restrict fingerprinting, block third-party cookies and enhance privacy in your Electron application.</p>
<p align="center">
	<img alt="npm" src="https://img.shields.io/npm/v/electron-privacy?style=for-the-badge"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/electron-privacy?color=orange&style=for-the-badge">
  <a href="https://discord.gg/PZjDSX3"><img alt="Discord" src="https://img.shields.io/discord/630199884229771314?color=%237289DA&label=discord&logo=Discord&logoColor=white&style=for-the-badge"></a>
</p>
<p align="center">
	<a href="https://github.com/spike-the-coder/electron-privacy/blob/master/README.md#install">Install</a> ·
<!-- 	<a href="https://caddyserver.com/docs">Documentation</a> · -->
	<a href="https://discord.gg/PZjDSX3">Support</a>
</p>

---

The package, `electron-privacy` requires **no dependencies**, has a itty bitty **small bundled size** and ensures your Electron application has the **maximum level of privacy** and security.

## 🎉 Install

```
npm install electron-privacy
```

Use it in your code by requiring it at the top of any JS file which you'll use it in.

```js
const privacy = require('electron-privacy');
```

Unfortunately, `electron-privacy` **will not work in any non-Electron applications.**

## ⭐ Features

- Block third party cookies
- User-agent scrambling
- Do Not Track header
- Remove Battery API
- Fingerprint randomization
- **Lots more coming in the near future!**

## 🙋‍ FAQ

> Can I install this for normal websites or non-Electron projects?

Unfortunately, `electron-privacy` only works for Electron applications.
<br><br>
> Why did you start this project?

Electron is an amazing framework with tons of customization but lacks a lot of really crucial privacy features like blocking third party cookies and preventing fingerprinting. With `electron-privacy`, I hope to implement some of those features into Electron incredibly easily.
