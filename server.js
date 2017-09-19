{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww20560\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var connect = require('connect');<br/>\
var serveStatic = require('serve-static');<br/>\
var port = (process.env.VCAP_APP_PORT || 3000);<br/>\
var host = (process.env.VCAP_APP_HOST || 'localhost');<br/>\
connect().use(serveStatic(__dirname)).listen(port,host);<br/>}