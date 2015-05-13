var tutorial = webpackJsonp_name_([ 2 ], {
0: function(e, t, n) {
"use strict";
function a() {
function e() {
var e = document.getElementsByClassName("sidebar__navigation-link_active");
e[0] && e[0].classList.remove("sidebar__navigation-link_active");
for (var t = document.getElementsByTagName("h2"), n = 0; n < t.length; n++) {
var a = t[n];
if (a.getBoundingClientRect().top > 1) break;
}
if (n--, n >= 0) {
var r = t[n].firstElementChild && t[n].firstElementChild.getAttribute("href"), i = document.querySelector('.sidebar__navigation-link a[href="' + r + '"]');
r && i && i.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
e(), window.addEventListener("scroll", e);
});
}
function r() {
s(document, ".task__solution", "click", function(e) {
e.target.closest(".task").classList.toggle("task__answer_open");
}), s(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task__answer_open");
}), s(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task__step_open");
});
}
function i() {
s(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
var t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n != t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
var s = n(255), o = n(277), l = (n(256), n(252));
t.init = function() {
r(), i(), a(), s(document, '[data-action="tutorial-map"]', "click", function(e) {
new l(), e.preventDefault();
}), o.init(), window.ebookType && n.e(13, function() {
n(254).init();
});
}, t.TutorialMap = n(253);
},
173: function(e) {
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var t = function() {
var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, n = self.Prism = {
util: {
encode: function(e) {
return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
},
clone: function(e) {
var t = n.util.type(e);
switch (t) {
case "Object":
var a = {};
for (var r in e) e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
return a;

case "Array":
return e.slice();
}
return e;
}
},
languages: {
extend: function(e, t) {
var a = n.util.clone(n.languages[e]);
for (var r in t) a[r] = t[r];
return a;
},
insertBefore: function(e, t, a, r) {
r = r || n.languages;
var i = r[e];
if (2 == arguments.length) {
a = arguments[1];
for (var s in a) a.hasOwnProperty(s) && (i[s] = a[s]);
return i;
}
var o = {};
for (var l in i) if (i.hasOwnProperty(l)) {
if (l == t) for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
o[l] = i[l];
}
return n.languages.DFS(n.languages, function(t, n) {
n === r[e] && t != e && (this[t] = o);
}), r[e] = o;
},
DFS: function(e, t, a) {
for (var r in e) e.hasOwnProperty(r) && (t.call(e, r, e[r], a || r), "Object" === n.util.type(e[r]) ? n.languages.DFS(e[r], t) : "Array" === n.util.type(e[r]) && n.languages.DFS(e[r], t, r));
}
},
highlightAll: function(e, t) {
for (var a, r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), i = 0; a = r[i++]; ) n.highlightElement(a, e === !0, t);
},
highlightElement: function(t, r, i) {
for (var s, o, l = t; l && !e.test(l.className); ) l = l.parentNode;
if (l && (s = (l.className.match(e) || [ , "" ])[1], o = n.languages[s]), o) {
t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, 
l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s);
var c = t.textContent;
if (c) {
var u = {
element: t,
language: s,
grammar: o,
code: c
};
if (n.hooks.run("before-highlight", u), r && self.Worker) {
var d = new Worker(n.filename);
d.onmessage = function(e) {
u.highlightedCode = a.stringify(JSON.parse(e.data), s), n.hooks.run("before-insert", u), 
u.element.innerHTML = u.highlightedCode, i && i.call(u.element), n.hooks.run("after-highlight", u);
}, d.postMessage(JSON.stringify({
language: u.language,
code: u.code
}));
} else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), 
u.element.innerHTML = u.highlightedCode, i && i.call(t), n.hooks.run("after-highlight", u);
}
}
},
highlight: function(e, t, r) {
var i = n.tokenize(e, t);
return a.stringify(n.util.encode(i), r);
},
tokenize: function(e, t) {
var a = n.Token, r = [ e ], i = t.rest;
if (i) {
for (var s in i) t[s] = i[s];
delete t.rest;
}
e: for (var s in t) if (t.hasOwnProperty(s) && t[s]) {
var o = t[s];
o = "Array" === n.util.type(o) ? o : [ o ];
for (var l = 0; l < o.length; ++l) {
var c = o[l], u = c.inside, d = !!c.lookbehind, p = 0, h = c.alias;
c = c.pattern || c;
for (var m = 0; m < r.length; m++) {
var g = r[m];
if (r.length > e.length) break e;
if (!(g instanceof a)) {
c.lastIndex = 0;
var f = c.exec(g);
if (f) {
d && (p = f[1].length);
var E = f.index - 1 + p, f = f[0].slice(p), v = f.length, y = E + v, T = g.slice(0, E + 1), b = g.slice(y + 1), w = [ m, 1 ];
T && w.push(T);
var S = new a(s, u ? n.tokenize(f, u) : f, h);
w.push(S), b && w.push(b), Array.prototype.splice.apply(r, w);
}
}
}
}
}
return r;
},
hooks: {
all: {},
add: function(e, t) {
var a = n.hooks.all;
a[e] = a[e] || [], a[e].push(t);
},
run: function(e, t) {
var a = n.hooks.all[e];
if (a && a.length) for (var r, i = 0; r = a[i++]; ) r(t);
}
}
}, a = n.Token = function(e, t, n) {
this.type = e, this.content = t, this.alias = n;
};
if (a.stringify = function(e, r, i) {
if ("string" == typeof e) return e;
if ("[object Array]" == Object.prototype.toString.call(e)) return e.map(function(t) {
return a.stringify(t, r, e);
}).join("");
var s = {
type: e.type,
content: a.stringify(e.content, r, i),
tag: t.tokenTag || "span",
classes: [ "token", e.type ],
attributes: {},
language: r,
parent: i
};
if ("comment" == s.type && (s.attributes.spellcheck = "true"), e.alias) {
var o = "Array" === n.util.type(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(s.classes, o);
}
n.hooks.run("wrap", s);
var l = "";
for (var c in s.attributes) l += c + '="' + (s.attributes[c] || "") + '"';
return "<" + s.tag + ' class="' + s.classes.join(" ") + '" ' + l + ">" + s.content + "</" + s.tag + ">";
}, !self.document) return self.addEventListener ? (self.addEventListener("message", function(e) {
var t = JSON.parse(e.data), a = t.language, r = t.code;
self.postMessage(JSON.stringify(n.util.encode(n.tokenize(r, n.languages[a])))), 
self.close();
}, !1), self.Prism) : self.Prism;
var r = document.getElementsByTagName("script");
return r = r[r.length - 1], r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), 
self.Prism;
}();
void 0 !== e && e.exports && (e.exports = t);
},
174: function() {
Prism.languages.markup = {
comment: /<!--[\w\W]*?-->/g,
prolog: /<\?.+?\?>/,
doctype: /<!DOCTYPE.+?>/,
cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
tag: {
pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,
inside: {
tag: {
pattern: /^<\/?[\w:-]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[\w-]+?:/
}
},
"attr-value": {
pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
inside: {
punctuation: /=|>|"/g
}
},
punctuation: /\/?>/g,
"attr-name": {
pattern: /[\w:-]+/g,
inside: {
namespace: /^[\w-]+?:/
}
}
}
},
entity: /\&#?[\da-z]{1,8};/gi
}, Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
},
175: function() {
Prism.languages.css = {
comment: /\/\*[\w\W]*?\*\//g,
atrule: {
pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
inside: {
punctuation: /[;:]/g
}
},
url: /url\((["']?).*?\1\)/gi,
selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
property: /(\b|\B)[\w-]+(?=\s*:)/gi,
string: /("|')(\\?.)*?\1/g,
important: /\B!important\b/gi,
punctuation: /[\{\};:]/g,
"function": /[-a-z0-9]+(?=\()/gi
}, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
style: {
pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/gi,
inside: {
tag: {
pattern: /<style[\w\W]*?>|<\/style>/gi,
inside: Prism.languages.markup.tag.inside
},
rest: Prism.languages.css
},
alias: "language-css"
}
}), Prism.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|').+?\1/gi,
inside: {
"attr-name": {
pattern: /^\s*style/gi,
inside: Prism.languages.markup.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/gi,
inside: Prism.languages.css
}
},
alias: "language-css"
}
}, Prism.languages.markup.tag));
},
176: function() {
Prism.languages.css.selector = {
pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,
"pseudo-class": /:[-\w]+(?:\(.*\))?/g,
"class": /\.[-:\.\w]+/g,
id: /#[-:\.\w]+/g
}
}, Prism.languages.insertBefore("css", "function", {
hexcode: /#[\da-f]{3,6}/gi,
entity: /\\[\da-f]{1,8}/gi,
number: /[\d%\.]+/g
});
},
177: function() {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\w\W]*?\*\//g,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*?(\r?\n|$)/g,
lookbehind: !0
} ],
string: /("|')(\\?.)*?\1/g,
"class-name": {
pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
lookbehind: !0,
inside: {
punctuation: /(\.|\\)/
}
},
keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
"boolean": /\b(true|false)\b/g,
"function": {
pattern: /[a-z0-9_]+\(/gi,
inside: {
punctuation: /\(/
}
},
number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
ignore: /&(lt|gt|amp);/gi,
punctuation: /[{}[\];(),.:]/g
};
},
178: function() {
Prism.languages.javascript = Prism.languages.extend("clike", {
keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/g,
"function": /(?!\d)[a-z0-9_$]+(?=\()/gi
}), Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
lookbehind: !0
}
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
script: {
pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/gi,
inside: {
tag: {
pattern: /<script[\w\W]*?>|<\/script>/gi,
inside: Prism.languages.markup.tag.inside
},
rest: Prism.languages.javascript
},
alias: "language-javascript"
}
});
},
179: function() {
!function(e) {
var t = /#(?!\{).+/g, n = {
pattern: /#\{[^}]+\}/g,
alias: "variable"
};
e.languages.coffeescript = e.languages.extend("javascript", {
comment: t,
string: [ /'(?:\\?[\s\S])*?'/g, {
pattern: /"(?:\\?[\s\S])*?"/g,
inside: {
interpolation: n
}
} ],
keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/g,
"class-member": {
pattern: /@(?!\d)\w+/,
alias: "variable"
}
}), e.languages.insertBefore("coffeescript", "comment", {
"multiline-comment": {
pattern: /###[\s\S]+?###/g,
alias: "comment"
},
"block-regex": {
pattern: /\/{3}[\s\S]*?\/{3}/,
alias: "regex",
inside: {
comment: t,
interpolation: n
}
}
}), e.languages.insertBefore("coffeescript", "string", {
"inline-javascript": {
pattern: /`(?:\\?[\s\S])*?`/g,
inside: {
delimiter: {
pattern: /^`|`$/g,
alias: "punctuation"
},
rest: e.languages.javascript
}
},
"multiline-string": [ {
pattern: /'''[\s\S]*?'''/,
alias: "string"
}, {
pattern: /"""[\s\S]*?"""/,
alias: "string",
inside: {
interpolation: n
}
} ]
}), e.languages.insertBefore("coffeescript", "keyword", {
property: /(?!\d)\w+(?=\s*:(?!:))/g
});
}(Prism);
},
180: function() {
Prism.languages.http = {
"request-line": {
pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,
inside: {
property: /^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/g,
"attr-name": /:\w+/g
}
},
"response-status": {
pattern: /^HTTP\/1.[01] [0-9]+.*/g,
inside: {
property: /[0-9]+[A-Z\s-]+$/gi
}
},
keyword: /^[\w-]+:(?=.+)/gm
};
var e = {
"application/json": Prism.languages.javascript,
"application/xml": Prism.languages.markup,
"text/xml": Prism.languages.markup,
"text/html": Prism.languages.markup
};
for (var t in e) if (e[t]) {
var n = {};
n[t] = {
pattern: RegExp("(content-type:\\s*" + t + "[\\w\\W]*?)\\n\\n[\\w\\W]*", "gi"),
lookbehind: !0,
inside: {
rest: e[t]
}
}, Prism.languages.insertBefore("http", "keyword", n);
}
},
181: function() {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
lookbehind: !0
},
atrule: /@[\w-]+(?=\s+(\(|\{|;))/gi,
url: /([-a-z]+-)*url(?=\()/gi,
selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
}), Prism.languages.insertBefore("scss", "property", {
variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
}), Prism.languages.insertBefore("scss", "function", {
placeholder: /%[-_\w]+/i,
statement: /\B!(default|optional)\b/gi,
"boolean": /\b(true|false)\b/g,
"null": /\b(null)\b/g,
operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g
});
},
182: function() {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/g,
lookbehind: !0
},
string: {
pattern: /(^|[^@])("|')(\\?[\s\S])*?\2/g,
lookbehind: !0
},
variable: /@[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/g,
"function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/gi,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMP(?:ORARY)?|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/gi,
"boolean": /\b(?:TRUE|FALSE|NULL)\b/gi,
number: /\b-?(0x)?\d*\.?[\da-f]+\b/g,
operator: /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//gi,
punctuation: /[;[\]()`,.]/g
};
},
183: function() {
Prism.languages.php = Prism.languages.extend("clike", {
keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/gi,
constant: /\b[A-Z0-9_]{2,}\b/g,
comment: {
pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g,
lookbehind: !0
}
}), Prism.languages.insertBefore("php", "keyword", {
delimiter: /(\?>|<\?php|<\?)/gi,
variable: /(\$\w+)\b/gi,
"package": {
pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
lookbehind: !0,
inside: {
punctuation: /\\/
}
}
}), Prism.languages.insertBefore("php", "operator", {
property: {
pattern: /(->)[\w]+/g,
lookbehind: !0
}
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
"php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}";
}));
}), Prism.hooks.add("before-insert", function(e) {
"php" === e.language && (e.code = e.backupCode, delete e.backupCode);
}), Prism.hooks.add("after-highlight", function(e) {
if ("php" === e.language) {
for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php"));
e.element.innerHTML = e.highlightedCode;
}
}), Prism.hooks.add("wrap", function(e) {
"php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'));
}), Prism.languages.insertBefore("php", "comment", {
markup: {
pattern: /<[^?]\/?(.*?)>/g,
inside: Prism.languages.markup
},
php: /\{\{\{PHP[0-9]+\}\}\}/g
}));
},
184: function() {
Prism.languages.insertBefore("php", "variable", {
"this": /\$this/g,
global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,
scope: {
pattern: /\b[\w\\]+::/g,
inside: {
keyword: /(static|self|parent)/,
punctuation: /(::|\\)/
}
}
});
},
185: function() {
Prism.languages.python = {
comment: {
pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
lookbehind: !0
},
string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/g,
keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,
"boolean": /\b(True|False)\b/g,
number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/gi,
operator: /[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,
ignore: /&(lt|gt|amp);/gi,
punctuation: /[{}[\];(),.:]/g
};
},
186: function() {
Prism.languages.ruby = Prism.languages.extend("clike", {
comment: /#[^\r\n]*(\r?\n|$)/g,
keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g
}), Prism.languages.insertBefore("ruby", "keyword", {
regex: {
pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
lookbehind: !0
},
variable: /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g
});
},
187: function() {
Prism.languages.java = Prism.languages.extend("clike", {
keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/gi,
operator: {
pattern: /(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/gm,
lookbehind: !0
}
});
},
249: function(e) {
"use strict";
function t() {
for (var e = document.querySelectorAll("[data-sticky]"), t = 0; t < e.length; t++) {
var a = e[t], r = a.dataset.sticky ? document.querySelector(a.dataset.sticky) : document.body;
if (a.getBoundingClientRect().top < 0) {
if (a.style.cssText) return;
var i = a.getBoundingClientRect().left, s = n(a);
a.parentNode.insertBefore(s, a), r.appendChild(a), a.classList.add("sticky"), a.style.position = "fixed", 
a.style.top = 0, a.style.left = i + "px", a.style.zIndex = 101, a.style.background = "white", 
a.style.margin = 0, a.style.width = s.offsetWidth + "px", a.placeholder = s;
} else a.placeholder && a.placeholder.getBoundingClientRect().top > 0 && (a.style.cssText = "", 
a.classList.remove("sticky"), a.placeholder.parentNode.insertBefore(a, a.placeholder), 
a.placeholder.remove(), a.placeholder = null);
}
}
function n(e) {
var t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.height = e.offsetHeight + "px", t.style.marginBottom = n.marginBottom, 
t.style.marginTop = n.marginTop, t;
}
e.exports = t;
},
252: function(e, t, n) {
"use strict";
function a() {
var e = this, t = new s({
hasClose: !1
}), n = new o();
t.setContent(n.elem), n.start(), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
var a = r({
url: "/tutorial/map"
});
a.addEventListener("success", function(n) {
t.remove(), document.body.insertAdjacentHTML("beforeEnd", '<div class="tutorial-map-overlay"></div>'), 
e.elem = document.body.lastChild, e.elem.innerHTML = n.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
e.elem.addEventListener("click", function(t) {
t.target.classList.contains("tutorial-map-overlay__close") && e.remove();
}), document.addEventListener("keydown", e.onDocumentKeyDown), document.body.classList.add("tutorial-map_on"), 
e.elem.addEventListener("scroll", c), new l(e.elem.firstElementChild);
}), a.addEventListener("fail", function() {
return t.remove();
});
}
var r = n(256), i = n(255), s = n(237), o = n(278), l = n(253), c = n(249);
i.delegateMixin(a.prototype), a.prototype.remove = function() {
this.elem.remove(), document.body.classList.remove("tutorial-map_on"), document.removeEventListener("keydown", this.onDocumentKeyDown);
}, a.prototype.onDocumentKeyDown = function(e) {
27 == e.keyCode && (e.preventDefault(), this.remove());
}, e.exports = a;
},
253: function(e, t, n) {
"use strict";
function a(e) {
var t = this;
this.elem = e, this.showTasksCheckbox = e.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +localStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.layoutSwitch = this.elem.querySelector("[data-tutorial-map-layout-switch]");
var n = +localStorage.isMapSingleColumn;
this.layoutSwitch.querySelector('[value="0"]').checked = !n, this.layoutSwitch.querySelector('[value="1"]').checked = n, 
this.updateLayout(), this.layoutSwitch.onchange = this.onLayoutSwitchChange.bind(this), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".close-button").onclick = function() {
t.filterInput.value = "", t.showClearButton(!1), t.filter("");
}, this.chaptersCollapsed = JSON.parse(localStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", function(e) {
e.preventDefault();
var t = e.delegateTarget.getAttribute("href");
this.chaptersCollapsed[t] ? delete this.chaptersCollapsed[t] : this.chaptersCollapsed[t] = 1, 
localStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
var a = this.elem.querySelector('[href="' + location.pathname + '"]');
a && a.classList.add("tutorial-map__link_active"), this.filterInput.focus();
}
function r(e, t) {
for (var n = 0, a = 0; n < e.length && a < t.length; ) e[n] == t[a] ? (n++, a++) : n++;
return a == t.length;
}
var i = n(290), s = n(255);
a.prototype.showChaptersCollapsed = function() {
for (var e = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link"), t = 0; t < e.length; t++) {
var n = e[t];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}, a.prototype.onLayoutSwitchChange = function() {
this.updateLayout();
}, a.prototype.updateLayout = function() {
var e = +this.elem.querySelector('[name="map-layout"]:checked').value;
e ? this.elem.classList.add("tutorial-map_singlecol") : this.elem.classList.remove("tutorial-map_singlecol"), 
localStorage.isMapSingleColumn = e ? "1" : "0";
}, a.prototype.updateShowTasks = function() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
localStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}, a.prototype.onFilterInput = function(e) {
this.showClearButton(e.target.value), this.throttleFilter(e.target.value);
}, a.prototype.onFilterKeydown = function(e) {
27 == e.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}, a.prototype.showClearButton = function(e) {
e ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}, a.prototype.focus = function() {
this.elem.tabIndex = -1, this.elem.focus();
}, a.prototype.filter = function(e) {
function t(t) {
return r(t.querySelector("a").innerHTML.toLowerCase(), e.replace(/\s/g, ""));
}
e = e.toLowerCase();
for (var n = this.showTasksCheckbox.checked, a = (this.elem.querySelectorAll(".tutorial-map-link"), 
this.elem.querySelectorAll(".tutorial-map__item")), i = 0; i < a.length; i++) {
var s = a[i], o = s.querySelectorAll(".tutorial-map__sub-item"), l = Array.prototype.reduce.call(o, function(e, a) {
var r = !1;
if (n) {
var i = a.querySelectorAll(".tutorial-map__sub-sub-item");
r = Array.prototype.reduce.call(i, function(e, n) {
var a = t(n);
return n.hidden = !a, e || a;
}, !1);
}
var s = r || t(a);
return a.hidden = !s, e || s;
}, !1);
s.hidden = !(l || t(s));
}
}, a.prototype.throttleFilter = i(a.prototype.filter, 200), s.delegateMixin(a.prototype), 
e.exports = a;
},
256: function(e, t, n) {
"use strict";
function a(e) {
function t(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function n(e, n) {
var a = t("fail", n);
a.reason = e, r.dispatchEvent(a);
}
function a(e, n) {
var a = t("success", n);
a.result = e, r.dispatchEvent(a);
}
var r = new XMLHttpRequest(), s = e.method || "GET", o = e.body, l = e.url;
r.open(s, l, e.sync ? !1 : !0), r.method = s;
var c = i();
c && !e.skipCsrf && r.setRequestHeader("X-XSRF-TOKEN", c), "[object Object]" == {}.toString.call(o) && (r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
o = JSON.stringify(o)), e.noDocumentEvents || (r.addEventListener("loadstart", function(e) {
r.timeStart = Date.now();
var n = t("xhrstart", e);
document.dispatchEvent(n);
}), r.addEventListener("loadend", function(e) {
var n = t("xhrend", e);
document.dispatchEvent(n);
}), r.addEventListener("success", function(e) {
var n = t("xhrsuccess", e);
n.result = e.result, document.dispatchEvent(n);
}), r.addEventListener("fail", function(e) {
var n = t("xhrfail", e);
n.reason = e.reason, document.dispatchEvent(n);
})), e.raw || r.setRequestHeader("Accept", "application/json"), r.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var u = e.normalStatuses || [ 200 ];
return r.addEventListener("error", function(e) {
n("Ошибка связи с сервером.", e);
}), r.addEventListener("timeout", function(e) {
n("Превышено максимально допустимое время ожидания ответа от сервера.", e);
}), r.addEventListener("abort", function(e) {
n("Запрос был прерван.", e);
}), r.addEventListener("load", function(t) {
if (!r.status) return void n("Не получен ответ от сервера.", t);
if (-1 == u.indexOf(r.status)) return void n("Ошибка на стороне сервера (код " + r.status + "), попытайтесь позднее", t);
var i = r.responseText, s = r.getResponseHeader("Content-Type");
if (s.match(/^application\/json/) || e.json) try {
i = JSON.parse(i);
} catch (t) {
return void n("Некорректный формат ответа от сервера", t);
}
a(i, t);
}), setTimeout(function() {
r.send(o);
}, 0), r;
}
var r = n(251), i = n(291);
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = a;
},
277: function(e, t, n) {
"use strict";
function a(e) {
for (var t = e.querySelectorAll(".code-example:not([data-prism-done])"), n = 0; n < t.length; n++) {
var a = t[n];
new s(a), a.setAttribute("data-prism-done", "1");
}
}
function r(e) {
for (var t = e.querySelectorAll("div.code-tabs:not([data-prism-done])"), n = 0; n < t.length; n++) new o(t[n]), 
t[n].setAttribute("data-prism-done", "1");
}
function i(e) {
a(e), r(e);
}
n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), 
n(183), n(184), n(185), n(186), n(187), Prism.tokenTag = "code";
var s = n(294), o = n(295);
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
i(document);
});
}, t.highlight = i;
},
291: function(e) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
294: function(e, t, n) {
"use strict";
function a(e) {
function t() {
var e = g.contentWindow;
return "function" != typeof e.postMessage ? void alert("Извините, запуск кода требует более современный браузер") : void e.postMessage(m, "https://ru.lookatcode.com/showjs");
}
function n() {
var t;
if (f && e.hasAttribute("data-refresh") && (f.remove(), f = null), f || (f = e.querySelector(".code-result")), 
f) t = f.querySelector("iframe"); else {
if (f = document.createElement("div"), f.className = "code-result code-example__result", 
t = document.createElement("iframe"), t.name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) t.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
var n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
f.appendChild(t), e.appendChild(f);
}
if (y) {
var a = t.contentDocument || t.contentWindow.document;
a.open(), a.write(u(m)), a.close(), "epub" == window.ebookType && setTimeout(function() {
[].forEach.call(a.querySelectorAll("script"), function(e) {
e.remove();
});
}, 2e3), e.hasAttribute("data-demo-height") || s.iframe(t), T && e.hasAttribute("data-autorun") || o(f) || f.scrollIntoView(!1);
} else {
var r = document.createElement("form");
r.style.display = "none", r.method = "POST", r.enctype = "multipart/form-data", 
r.action = "https://ru.lookatcode.com/showhtml", r.target = t.name;
var i = document.createElement("textarea");
i.name = "code", i.value = u(m), r.appendChild(i), t.parentNode.insertBefore(r, t.nextSibling), 
r.submit(), r.remove(), T && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || s.iframe(t), o(f) || f.scrollIntoView(!1);
});
}
}
function a() {
if (y) try {
window.eval.call(window, m);
} catch (n) {
alert("Ошибка: " + n.message);
} else e.hasAttribute("data-refresh") && g && (g.remove(), g = null), g ? t() : (g = document.createElement("iframe"), 
g.className = "js-frame", g.src = "https://ru.lookatcode.com/showjs", g.style.width = 0, 
g.style.height = 0, g.style.border = "none", g.onload = function() {
t();
}, document.body.appendChild(g));
}
function c() {
var e;
if (v) e = u(m); else {
var t = m.replace(/^/gim, "    ");
e = "<!DOCTYPE html>\n<html>\n\n<body>\n  <script>\n" + t + "\n  </script>\n</body>\n\n</html>";
}
var n = document.createElement("form");
n.action = "http://plnkr.co/edit/?p=preview", n.method = "POST", n.target = "_blank", 
document.body.appendChild(n);
var a = document.createElement("textarea");
a.name = "files[index.html]", a.value = e, n.appendChild(a);
var r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, n.appendChild(r), 
n.submit(), n.remove();
}
function u() {
var e = m.toLowerCase(), t = e.match("<body>"), n = e.match("</body>"), a = e.match("<html>"), r = e.match("</html>"), i = e.match(/^\s*<!doctype/);
if (i) return m;
var s = m;
return a || (s = "<html>\n" + s), r || (s += "\n</html>"), t || (s = s.replace("<html>", '<html>\n<head>\n  <meta charset="utf-8">\n</head><body>\n')), 
n || (s = s.replace("</html>", "\n</body>\n</html>")), s = "<!DOCTYPE HTML>\n" + s;
}
function d() {
E ? a() : n(), T = !1;
}
var p = e.querySelector("pre"), h = p.querySelector("code"), m = h.textContent;
Prism.highlightElement(h), l(p), r(p, e.getAttribute("data-highlight-block")), i(p, e.getAttribute("data-highlight-inline"));
var g, f, E = p.classList.contains("language-javascript"), v = p.classList.contains("language-markup"), y = +e.getAttribute("data-trusted"), T = !0;
if (E || v) {
var b = e.querySelector('[data-action="run"]');
b && (b.onclick = function() {
return this.blur(), d(), !1;
});
var w = e.querySelector('[data-action="edit"]');
w && (w.onclick = function() {
return this.blur(), c(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(d, 100));
}
}
function r(e, t) {
if (t) for (var n, a = t.replace(/\s+/g, "").split(","), r = 0; n = a[r++]; ) {
n = n.split("-");
var i = +n[0], s = +n[1] || i, o = '<code class="block-highlight" data-start="' + i + '" data-end="' + s + '">' + Array(i + 1).join("\n") + '<code class="mask">' + Array(s - i + 2).join("\n") + "</code></code>";
e.insertAdjacentHTML("afterBegin", o);
}
}
function i(e, t) {
var n = e.querySelector('code[class*="language-"]');
t = t ? t.split(",") : [];
for (var a = 0; a < t.length; a++) {
var r = t[a].split(":"), i = +r[0], s = r[1].split("-"), o = +s[0], l = +s[1], c = '<code class="inline-highlight">' + Array(i + 1).join("\n") + Array(o + 1).join(" ") + '<code class="mask">' + Array(l - o + 1).join(" ") + "</code></code>";
n.insertAdjacentHTML("afterBegin", c);
}
}
var s = n(246), o = n(305), l = n(303);
e.exports = a;
},
295: function(e, t, n) {
"use strict";
function a(e) {
window.ebookType || (this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = function(e) {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.arrowRight.onclick = function(e) {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.delegate(".code-tabs__switch", "click", this.onSwitchClick));
}
var r = n(255), i = n(303);
a.prototype.onSwitchClick = function(e) {
e.preventDefault();
for (var t, n = e.delegateTarget.parentNode.children, a = this.elem.querySelector("[data-code-tabs-content]").children, r = 0; r < n.length; r++) {
var i = n[r], s = a[r];
i == e.delegateTarget ? (t = r, s.classList.add("code-tabs__section_current"), i.classList.add("code-tabs__switch_current")) : (s.classList.remove("code-tabs__section_current"), 
i.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(a[t]));
}, a.prototype.highlightTab = function(e) {
if (!e.highlighted) {
var t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), i(t), e.highlighted = !0;
}
}, a.prototype.renderTranslate = function() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}, r.delegateMixin(a.prototype), e.exports = a;
},
303: function(e) {
"use strict";
function t(e) {
var t, n = 1 + e.innerHTML.split("\n").length, a = Array(n);
a = a.join("<span></span>"), t = document.createElement("span"), t.className = "line-numbers-rows", 
t.innerHTML = a, e.hasAttribute("data-start") && (e.style.counterReset = "linenumber " + +e.dataset.start - 1), 
e.appendChild(t);
}
e.exports = t;
},
305: function(e) {
"use strict";
function t(e) {
var t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
}
e.exports = t;
}
});
//# sourceMappingURL=tutorial.a2992011de92e4d217f9.js.map