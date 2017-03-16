This is a boilerplate project for [wdio][wdio] to connect [web-driverify][web-driverify].

# Initialize Web Driverify Server

Install web-driverify:

> there will be online services soon

```bash
$ npm install -g web-driverify
```

Start test server:

```bash
$ wd
```

# Run Test Cases

Download and install dependencies:

```bash
git clone git@github.com:web-driverify/wdio-boilerplate.git
cd wdio-boilerplate && npm install
```

Run test cases:

```bash
$ npm test
```

In case you're looking for test configurations, take a look at `wdio.conf.js`

[wdio]: http://webdriver.io
[web-driverify]: https://github.com/web-driverify/web-driverify
