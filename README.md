<p align="center"><img src="https://i.spike.codes/u/hny.png" alt="Logo" width="175"></p>
<h3 align="center">electron-privacy</h3>
<p align="center">Restrict fingerprinting, block third-party cookies and enhance privacy in your Electron application. Forked from @spike-the-coder</p>
<p align="center">
	<img alt="npm" src="https://img.shields.io/npm/v/@dothq/electron-privacy?style=for-the-badge"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@dothq/electron-privacy?color=orange&style=for-the-badge">
  <a href="https://invite.gg/dot"><img alt="Discord" src="https://img.shields.io/discord/525056817399726102?color=%237289DA&label=discord&logo=Discord&logoColor=white&style=for-the-badge"></a>
</p>
<p align="center">
	<a href="https://github.com/dothq/electron-privacy/blob/master/README.md#install">Install</a> ·
<!-- 	<a href="https://caddyserver.com/docs">Documentation</a> · -->
	<a href="https://invite.gg/dot">Support</a>
</p>

---

The package, `electron-privacy` requires **no dependencies**, has a itty bitty **small bundled size** and ensures your Electron application has the **maximum level of privacy** and security.

## 🎉 Install

```
npm install @dothq/electron-privacy
```

Use it in your code by requiring it at the top of any JS file which you'll use it in.

```js
const privacy = require('@dothq/electron-privacy');
```

Unfortunately, `electron-privacy` **will not work in any non-Electron applications.**

## ⭐ Features

- Block third party cookies
- Do Not Track header
- Remove Battery API
- Remove Referer
- Mask system information
- **Lots more coming in the near future!**

## 🙋‍ FAQ

> Can I install this for normal websites or non-Electron projects?

Unfortunately, `electron-privacy` only works for Electron applications.
<br><br>
> Why did you start this project?

Electron is an amazing framework with tons of customization but lacks a lot of really crucial privacy features like blocking third party cookies and preventing fingerprinting. With `electron-privacy`, I hope to implement some of those features into Electron incredibly easily.
