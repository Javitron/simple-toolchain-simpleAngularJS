var connect = require('connect');<br/>\
var serveStatic = require('serve-static');<br/>\
var port = (process.env.VCAP_APP_PORT || 3000);<br/>\
var host = (process.env.VCAP_APP_HOST || 'localhost');<br/>\
connect().use(serveStatic(__dirname)).listen(port,host);<br/>}
