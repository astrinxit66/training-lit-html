const os = require('os');

module.exports = {
    port: 9090,
    files: ["./src/**/*.{html,css,js}", './node_modules/lit-html/**/*.js'],
    server: {
        baseDir: ["./","./src"],
    },
    browser: [os.platform === 'darwin' ? 'google chrome' : 'chrome']
};