var util = require('util'),
    colors = require('colors'),
    http = require('http');

var pagelines = ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
'<html xmlns="http://www.w3.org/1999/xhtml">',
'<head><meta http-equiv="Content-Type" content="text/html; charset=utf8" /><title>BNU = Be Near U</title>',
"<script>",
"  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){",
"  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),",
"  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)",
"  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');",
"  ga('create', 'UA-43668963-1', 'benearu.com');",
"  ga('send', 'pageview');",
'</script>',
'</head>',
'<style>',
'body {padding: 0; margin: 0;}',
'body,html{height: 100%;}',
'#outer {',
'    height: 100%;',
'    overflow: hidden;',
'    position: relative;',
'    width: 100%;',
'    background:#FFFFFF;',
'    display:table;',
'}',
'#outer[id] {',
'    display: table;',
'    position: static;',
'    *position:relative;  ',
'    _position: static;',
'}',
'#middle {',
'    position: absolute;',
'    top: 50%;',
'    left: 0;',
'    vertical-align:middle;',
'    display:table-cell;',
'    width:100%;',
'    *vertical-align:middle;',
'    *display:table-cell;',
'    *width:100%;',
'    _vertical-align:;',
'    _display:;',
'    _width:;',
'}',
'#middle[id] {',
'    display: table-cell;',
'    vertical-align: middle;',
'    position: static;',
'    top:50%;',
'    left:0;',
'    width:100%;',
'    *position:absolute;',
'    _position: ;',
'}',
'#inner {',
'    position: relative;',
'    top: -50%;',
'    margin: 0 auto;',
'    text-align: center;',
'}',
'#content{',
'    width:800px;',
'    height:400px;',
'    border:0px;',
'    background:#FFFFFF;',
'    margin: 0 auto;',
'    text-align: center;',
'    font-family: Arial;',
'    font-size: 75pt;',
'	color: #004DFF;',
'}',
'strong{',
'	font-weight: normal;',
'	color: #FF0000;',
'}',
'</style>',
'<body>',
'<div id="outer"><div id="middle"><div id="inner"><div id="content"><!--<img width="40%" src="http://a4.att.hudong.com/38/86/19300001090235133638865884238.jpg"/>-->',
'<br/>BNU = <strong>B</strong>e <strong>N</strong>ear <strong>U</strong></div></div></div></div></body></html>'];

//
// Http Server
//
route = {
 "baidu" : "http://www.baidu.com", 
 "google" : "http://www.google.com", 
 "cist06" : "http://konjac-proxy.herokuapp.com/forms/d/1S1sFbowm9-IufTfa5XJTcTXiNV4QEG-Qzb-Gxk6h6RQ/viewform"
};
console.log(process.env.PORT);
var PORT = process.env.PORT || 9778;
http.createServer(function (req, res) {
  console.log(req.url);
  url = req.url.replace(/\//g,' ').trim().split(" ")[0];
  console.log(url);
  target = route[url];
  console.log(target);
  if(target){
  	res.writeHead(301, { 'Location': target });
  	console.log('request successfully proxied to: ' + target + '\n' + JSON.stringify(req.headers, true, 2));
  	res.end();
  }else{
  	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(pagelines.join("\n"));
	res.end();
  }
}).listen(PORT);

util.puts('http server '.blue + 'started '.green.bold + 'on port '.blue + PORT.yellow);
