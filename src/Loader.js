/**********************************************************\
|                                                          |
|                          hprose                          |
|                                                          |
| Official WebSite: http://www.hprose.com/                 |
|                   http://www.hprose.org/                 |
|                                                          |
\**********************************************************/

/**********************************************************\
 *                                                        *
 * Loader.js                                              *
 *                                                        *
 * hprose CommonJS/AMD/CMD loader for JavaScript.         *
 *                                                        *
 * LastModified: Sep 29, 2016                             *
 * Author: Ma Bingyao <andot@hprose.com>                  *
 *                                                        *
\**********************************************************/

/* global define, module */
(function (global) {
    'use strict';

    global.hprose.common = {
        Completer: global.hprose.Completer,
        Future: global.hprose.Future,
        ResultMode: global.hprose.ResultMode
    };

    global.hprose.io = {
        StringIO: global.hprose.StringIO,
        ClassManager: global.hprose.ClassManager,
        Tags: global.hprose.Tags,
        RawReader: global.hprose.RawReader,
        Reader: global.hprose.Reader,
        Writer: global.hprose.Writer,
        Formatter: global.hprose.Formatter
    };

    global.hprose.client = {
        Client: global.hprose.Client,
        HttpClient: global.hprose.HttpClient,
        TcpClient: global.hprose.TcpClient,
        WebSocketClient: global.hprose.WebSocketClient
    };

    if (typeof define === 'function') {
        if (define.cmd) {
            define('hprose', [], global.hprose);
        }
        else if (define.amd) {
            define('hprose', [], function() { return global.hprose; });
        }
    }
    if (typeof module === 'object') {
        module.exports = global.hprose;
    }
})(this || [eval][0]('this'));
