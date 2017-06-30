define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "jsgrid", "silk/Silk"
//>>excludeEnd("imports");
, "amber/web/Web", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Roast');
$core.packages["Roast"].innerEval = function (expr) { return eval(expr); };
$core.packages["Roast"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "jsgrid", "silk/Silk"];
$core.packages["Roast"].transport = {"type":"amd","amdNamespace":"amber-roast"};

$core.addClass('Authentication', $globals.Object, ['username', 'password'], 'Roast');
$core.addMethod(
$core.method({
selector: "encodeBase64",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var s,answer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
s=$recv($recv(self["@username"]).__comma(":")).__comma(self["@password"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
answer=$recv(btoa)._value_(s);
return answer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encodeBase64",{s:s,answer:answer},$globals.Authentication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "encodeBase64\x0a\x09\x22answers user and pass as base64 encoded string\x22\x0a\x09\x0a\x09| s answer |\x0a\x09s := username, ':', password. \x0a\x09\x22btoa is a global JS function\x22\x0a\x09answer := btoa value: s.\x0a\x09^answer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "value:"]
}),
$globals.Authentication);

$core.addMethod(
$core.method({
selector: "user:password:",
protocol: 'as yet unclassified',
fn: function (uString,pString){
var self=this;
self["@username"]=uString;
self["@password"]=pString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["uString", "pString"],
source: "user: uString password: pString\x0a\x09\x22initializes instance variables\x22\x0a\x0a\x09username := uString.\x0a\x09password := pString.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Authentication);



$core.addClass('Invoker', $globals.Object, ['request', 'authentication'], 'Roast');
$core.addMethod(
$core.method({
selector: "get:",
protocol: 'deprecated',
fn: function (urlString){
var self=this;
var httpBa;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@request"]=$recv($globals.XMLHttpRequest)._new();
$recv(self["@request"])._open_url_asynchronous_("GET",urlString,false);
httpBa=$recv(self["@authentication"])._encodeBase64();
$recv(self["@request"])._setRequestHeader_basicAuth_("Authorization","Basic ".__comma(httpBa));
$recv(self["@request"])._send_("");
return $recv(self["@request"])._responseText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get:",{urlString:urlString,httpBa:httpBa},$globals.Invoker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["urlString"],
source: "get: urlString\x0a\x09\x22invokes a url and answers the response text\x22\x0a\x0a\x09| httpBa |\x0a\x09request := XMLHttpRequest new.\x0a\x09\x22TODO: asynchronous must be set to true in order to have multiple request in parallel and dont have the user waiting\x22\x0a\x09request open: 'GET' url: urlString asynchronous: false.\x0a\x09httpBa := authentication encodeBase64.\x0a\x09request setRequestHeader: 'Authorization' basicAuth: 'Basic ', httpBa.\x0a\x09request send: ''.\x0a\x09^request responseText.",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
messageSends: ["new", "open:url:asynchronous:", "encodeBase64", "setRequestHeader:basicAuth:", ",", "send:", "responseText"]
}),
$globals.Invoker);

$core.addMethod(
$core.method({
selector: "invoke:",
protocol: 'as yet unclassified',
fn: function (aLink){
var self=this;
var httpBa,contentType;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aLink)._href();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["href"]=1;
//>>excludeEnd("ctx");
$1="Invoke: ".__comma($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_($1);
$recv($globals.Transcript)._cr();
self["@request"]=$recv($globals.XMLHttpRequest)._new();
$recv(self["@request"])._open_url_asynchronous_($recv(aLink)._method(),$recv(aLink)._href(),false);
httpBa=$recv(self["@authentication"])._encodeBase64();
$recv(contentType).__eq("application/json");
$recv(self["@request"])._setRequestHeader_value_("Authorization","Basic ".__comma(httpBa));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setRequestHeader:value:"]=1;
//>>excludeEnd("ctx");
$recv(self["@request"])._setRequestHeader_value_("Accept",contentType);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setRequestHeader:value:"]=2;
//>>excludeEnd("ctx");
$recv(self["@request"])._setRequestHeader_value_("Content-Type",contentType);
$recv(self["@request"])._withCredentials_(true);
$recv(self["@request"])._send();
return $recv(self["@request"])._responseText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invoke:",{aLink:aLink,httpBa:httpBa,contentType:contentType},$globals.Invoker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLink"],
source: "invoke: aLink\x0a\x09\x22invokes a url and answers the response text\x22\x0a\x0a\x09| httpBa contentType |\x0aTranscript show: ('Invoke: ' ,aLink href); cr.\x0a\x09request := XMLHttpRequest new.\x0a\x22TODO: asynchronous must be set to true in order to have multiple request in parallel and dont have the user waiting\x22\x0a\x09request open: (aLink method) url: (aLink href) asynchronous: false.\x0a\x09httpBa := authentication encodeBase64.\x0a\x09contentType = 'application/json'.\x0a\x09request setRequestHeader: 'Authorization' value: 'Basic ', httpBa.\x0a\x09request setRequestHeader: 'Accept' value: contentType.\x0a\x09request setRequestHeader: 'Content-Type' value: contentType.\x0a\x09request withCredentials: true.\x0a\x09request send.\x0a\x09^request responseText.",
referencedClasses: ["Transcript", "XMLHttpRequest"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "href", "cr", "new", "open:url:asynchronous:", "method", "encodeBase64", "=", "setRequestHeader:value:", "withCredentials:", "send", "responseText"]
}),
$globals.Invoker);

$core.addMethod(
$core.method({
selector: "setAuthentication:",
protocol: 'as yet unclassified',
fn: function (anAuthentication){
var self=this;
self["@authentication"]=anAuthentication;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAuthentication"],
source: "setAuthentication: anAuthentication\x0a\x09\x22set instance variable\x22\x0a\x0a\x09authentication := anAuthentication",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Invoker);



$core.addClass('Link', $globals.Object, ['rel', 'href', 'method', 'type', 'title'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Link.comment="* rel type can be one of: self, describedBy, up\x0a* href contains the RO operation (http link)\x0a* method can be one of: GET, POST, PUT, DELETE\x0a* type is the kind of object(s) returned\x0a* title is optional";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "href",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@href"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "href\x0a\x09\x0a\x09^href",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "initialize:",
protocol: 'fluent',
fn: function (linkDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@rel"]=$recv(linkDictionary)._at_ifAbsent_("rel",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
self["@href"]=$recv(linkDictionary)._at_ifAbsent_("href",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
self["@method"]=$recv(linkDictionary)._at_ifAbsent_("method",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=3;
//>>excludeEnd("ctx");
self["@type"]=$recv(linkDictionary)._at_ifAbsent_("type",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=4;
//>>excludeEnd("ctx");
self["@title"]=$recv(linkDictionary)._at_ifAbsent_("title",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize:",{linkDictionary:linkDictionary},$globals.Link)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["linkDictionary"],
source: "initialize: linkDictionary\x0a\x0a\x09rel := (linkDictionary at: 'rel' ifAbsent: nil).\x0a\x09href := (linkDictionary at: 'href' ifAbsent: nil).\x0a\x09method := (linkDictionary at: 'method' ifAbsent: nil).\x0a\x09type := (linkDictionary at: 'type' ifAbsent: nil).\x0a\x09title := (linkDictionary at: 'title' ifAbsent: nil).\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@method"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09\x0a\x09^method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "rel",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@rel"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rel\x0a\x09\x0a\x09^rel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@title"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09\x0a\x09^title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "toString",
protocol: 'fluent',
fn: function (){
var self=this;
var s,nl;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $14,$13,$12,$11,$10,$9,$8,$7,$6,$5,$4,$3,$2,$1;
nl=$recv($globals.String)._crlf();
$14=$recv("[rel: ".__comma(self._rel())).__comma(nl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=15;
//>>excludeEnd("ctx");
$13=$recv($14).__comma("href: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=14;
//>>excludeEnd("ctx");
$12=$recv($13).__comma(self._href());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=13;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(nl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
$10=$recv($11).__comma("method: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
$9=$recv($10).__comma(self._method());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(nl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$7=$recv($8).__comma("type: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(self._type());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(nl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$4=$recv($5).__comma("title: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(self._title());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(nl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
s=$recv($1).__comma(nl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toString",{s:s,nl:nl},$globals.Link)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toString\x0a\x0a\x09| s nl |\x0a\x09nl := String crlf.\x0a\x09s :='[rel: ', self rel , nl,\x0a\x09'href: ', self href, nl,\x0a\x09'method: ', self method, nl,\x0a\x09'type: ', self type, nl,\x0a\x09'title: ', self title, nl,\x0a\x09']', nl.\x0a\x09^s",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["crlf", ",", "rel", "href", "method", "type", "title"]
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@type"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09\x0a\x09^type",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "withHref:",
protocol: 'fluent',
fn: function (aString){
var self=this;
self["@href"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "withHref: aString\x0a\x09\x0a\x09href := aString.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);

$core.addMethod(
$core.method({
selector: "withMethod:",
protocol: 'fluent',
fn: function (aString){
var self=this;
self["@method"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "withMethod: aString\x0a\x09\x0a\x09method := aString.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Link);



$core.addClass('Login', $globals.Widget, [], 'Roast');
$core.addMethod(
$core.method({
selector: "passwordRow",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$7,$8,$6,$5,$4,$3,$1;
$2=$recv($globals.Silk)._TD_("Password:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=1;
//>>excludeEnd("ctx");
$7="name".__minus_gt("password");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$8="type".__minus_gt("password");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$6=[$7,$8,"required".__minus_gt("required")];
$5=$recv($globals.Silk)._INPUT_($6);
$4=[$5];
$3=$recv($globals.Silk)._TD_($4);
$1=[$2,$3];
return $recv($globals.Silk)._TR_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"passwordRow",{},$globals.Login)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "passwordRow\x0a    ^Silk TR: {\x0a        Silk TD: 'Password:'.\x0a        Silk TD: {Silk INPUT: {'name'->'password'.\x0a                               'type'->'password'.\x0a                               'required'->'required'}}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["TR:", "TD:", "INPUT:", "->"]
}),
$globals.Login);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#client-main"._asSilk())._FORM_(["id".__minus_gt("myForm1"),$recv($globals.Silk)._TABLE_([self._urlRow(),self._usernameRow(),self._passwordRow(),self._submitRow()])]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Login)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a    '#client-main' asSilk\x0a  FORM: {\x0a    'id' -> 'myForm1'.\x0a    Silk TABLE: {\x0a      self urlRow.\x0a      self usernameRow.\x0a      self passwordRow.\x0a      self submitRow}}.",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["FORM:", "asSilk", "->", "TABLE:", "urlRow", "usernameRow", "passwordRow", "submitRow"]
}),
$globals.Login);

$core.addMethod(
$core.method({
selector: "submitRow",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $7,$6,$5,$4,$3,$2,$1;
$7="type".__minus_gt("submit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6=[$7,"value".__minus_gt("Okay")];
$5=$recv($globals.Silk)._INPUT_($6);
$4=$recv($5)._on_bind_("click",(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSubmit_(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=[$4];
$2=$recv($globals.Silk)._TD_($3);
$1=[$2];
return $recv($globals.Silk)._TR_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"submitRow",{},$globals.Login)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "submitRow\x0a    ^Silk TR: {\x0a        Silk TD: {(Silk INPUT: {'type'->'submit'. 'value'->'Okay'})\x0a                        on: #click\x0a                        bind: [:e | self doSubmit: e] }}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["TR:", "TD:", "on:bind:", "INPUT:", "->", "doSubmit:"]
}),
$globals.Login);

$core.addMethod(
$core.method({
selector: "urlOptions:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["option"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("http://localhost:9090/restful/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("http://localhost:9090/restful/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._option();
$recv($3)._value_("http://localhost:8888/restful/");
$recv($3)._with_("http://localhost:8888/restful/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"urlOptions:",{html:html},$globals.Login)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "urlOptions: html\x0a    html option value: 'http://localhost:9090/restful/'; with: 'http://localhost:9090/restful/'. \x22KNIfe\x22\x0a    html option value: 'http://localhost:8888/restful/'; with: 'http://localhost:8888/restful/'. \x22default port - ToDo App\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "option", "with:"]
}),
$globals.Login);

$core.addMethod(
$core.method({
selector: "urlRow",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($globals.Silk)._TD_("URL:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=1;
//>>excludeEnd("ctx");
$1=[$2,$recv($globals.Silk)._TD_([$recv($globals.Silk)._SELECT_(["name".__minus_gt("url"),self._urlOptions()])])];
return $recv($globals.Silk)._TR_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"urlRow",{},$globals.Login)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "urlRow\x0a    ^Silk TR: {\x0a        Silk TD: 'URL:'.\x0a        Silk TD: {Silk SELECT: {'name'->'url'.\x0a                                self urlOptions}}}.",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["TR:", "TD:", "SELECT:", "->", "urlOptions"]
}),
$globals.Login);

$core.addMethod(
$core.method({
selector: "usernameRow",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$7,$6,$5,$4,$3,$1;
$2=$recv($globals.Silk)._TD_("Username:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=1;
//>>excludeEnd("ctx");
$7="name".__minus_gt("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$6=[$7,"required".__minus_gt("required")];
$5=$recv($globals.Silk)._INPUT_($6);
$4=[$5];
$3=$recv($globals.Silk)._TD_($4);
$1=[$2,$3];
return $recv($globals.Silk)._TR_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"usernameRow",{},$globals.Login)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "usernameRow\x0a    ^Silk TR: {\x0a        Silk TD: 'Username:'.\x0a        Silk TD: {Silk INPUT: {'name'->'name'.\x0a                               'required'->'required'}}}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["TR:", "TD:", "INPUT:", "->"]
}),
$globals.Login);



$core.addClass('LoginForm', $globals.Widget, ['formValues', 'formInputs', 'inputFactories', 'extractionRecipes'], 'Roast');
$core.addMethod(
$core.method({
selector: "collectValues",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var rom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$7,$6,$8,$9,$10,$receiver;
$3="#myForm1"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._get_((0));
$1=$recv($2)._checkValidity();
if($core.assert($1)){
$recv(self["@formInputs"])._do_((function(each){
var recipe,name;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
name=$recv(each)._at_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
name;
recipe=$recv(self["@extractionRecipes"])._at_ifAbsent_(name,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@extractionRecipes"])._at_("_default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
recipe;
$4=$recv(recipe)._value_(each);
if(($receiver = $4) == null || $receiver.isNil){
return $4;
} else {
var formValue;
formValue=$receiver;
return $recv(self["@formValues"])._at_put_(name,formValue);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,recipe:recipe,name:name},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@formValues"])._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5="#output-list"._asJQuery();
$7=$recv("<br>".__comma(key)).__comma(": ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($5)._append_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$8=$recv($globals.ROManager)._new();
$9=$recv(self["@formValues"])._at_("Username");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$10=$recv(self["@formValues"])._at_("Password");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
rom=$recv($8)._initializeWithUser_password_($9,$10);
rom;
$recv(rom)._load_($recv(self["@formValues"])._at_("URL"));
return false;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectValues",{rom:rom},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectValues\x0a\x09| rom |\x0a    (('#myForm1' asJQuery get: 0) checkValidity) ifTrue: [\x0a        formInputs do: [ :each | | recipe name |\x0a            name := each at: 'name'.\x0a            recipe := extractionRecipes at: name\x0a                    ifAbsent: [extractionRecipes at: '_default'].\x0a            (recipe value: each)\x0a                ifNotNil: [ :formValue |\x0a                    formValues at: name put: formValue ]].\x0a        formValues keysAndValuesDo: [ :key :value |\x0a            '#output-list' asJQuery append: '<br>',key,': ',value].\x0a\x09\x09\x0a\x09\x09rom := ROManager new \x0a\x09\x09\x09initializeWithUser: (formValues at: 'Username')\x0a\x09\x09\x09password: (formValues at: 'Password').\x0a\x09\x09rom load: (formValues at: 'URL').\x09\x09\x0a    ^false]",
referencedClasses: ["ROManager"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "checkValidity", "get:", "asJQuery", "do:", "at:", "at:ifAbsent:", "ifNotNil:", "value:", "at:put:", "keysAndValuesDo:", "append:", ",", "initializeWithUser:password:", "new", "load:"]
}),
$globals.LoginForm);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
self["@formValues"]=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@formInputs"]=$recv($globals.Array)._new();
self["@inputFactories"]=$globals.HashedCollection._newFromPairs_(["Username",(function(html,name,type){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._input();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["input"]=1;
//>>excludeEnd("ctx");
$recv($1)._name_(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=1;
//>>excludeEnd("ctx");
$recv($1)._type_(type);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["type:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("required","required");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,name:name,type:type},$ctx1,1)});
//>>excludeEnd("ctx");
}),"Password",(function(html,name,type){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._input();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["input"]=2;
//>>excludeEnd("ctx");
$recv($3)._name_(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=2;
//>>excludeEnd("ctx");
$recv($3)._type_(type);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["type:"]=2;
//>>excludeEnd("ctx");
$recv($3)._at_put_("required","required");
$4=$recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,name:name,type:type},$ctx1,2)});
//>>excludeEnd("ctx");
}),"URL",(function(html,name,type){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(html)._select();
$recv($5)._name_(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._urlOptions_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
$6=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,name:name,type:type},$ctx1,3)});
//>>excludeEnd("ctx");
}),"_default",(function(html,name,type){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv(html)._input();
$recv($7)._name_(name);
$recv($7)._type_(type);
return $recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,name:name,type:type},$ctx1,5)});
//>>excludeEnd("ctx");
})]);
self["@extractionRecipes"]=$globals.HashedCollection._newFromPairs_(["_default",(function(input){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(input)._asJQuery())._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({input:input},$ctx1,6)});
//>>excludeEnd("ctx");
})]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    formValues := Dictionary new.\x0a    formInputs := Array new.\x0a    inputFactories := #{\x0a        'Username' -> [ :html :name :type |\x0a            html input name: name;\x0a                       type: type;\x0a                       at: 'required' put: 'required';\x0a                       yourself].\x0a        'Password' -> [ :html :name :type |\x0a            html input name: name;\x0a                       type: type;\x0a                       at: 'required' put: 'required';\x0a                       yourself].\x0a        'URL' -> [ :html :name :type |\x0a            html select name: name;\x0a                        with: [self urlOptions: html];\x0a                        yourself].\x0a\x09\x09'_default' -> [ :html :name :type |\x0a            html input name: name;\x0a                       type: type;\x0a                       yourself]   \x0a\x09}.\x0a    extractionRecipes := #{\x0a        '_default' -> [ :input |\x0a            input asJQuery val]\x0a        }",
referencedClasses: ["Dictionary", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "name:", "input", "type:", "at:put:", "yourself", "select", "with:", "urlOptions:", "val", "asJQuery"]
}),
$globals.LoginForm);

$core.addMethod(
$core.method({
selector: "renderInput:label:type:on:",
protocol: 'as yet unclassified',
fn: function (name,inputLabel,type,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._label())._with_(inputLabel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $recv($recv(html)._td())._with_((function(){
var factory,input;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
factory=$recv(self["@inputFactories"])._at_ifAbsent_(name,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(self["@inputFactories"])._at_("_default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
factory;
input=$recv(factory)._value_value_value_(html,name,type);
input;
$2=input;
if(($receiver = $2) == null || $receiver.isNil){
return $2;
} else {
return $recv(self["@formInputs"])._add_(input);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({factory:factory,input:input},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderInput:label:type:on:",{name:name,inputLabel:inputLabel,type:type,html:html},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "inputLabel", "type", "html"],
source: "renderInput: name label: inputLabel type: type on: html\x0a    html tr with: [\x0a        html td with: [html label with: inputLabel].\x0a        html td with: [ | factory input |\x0a            factory := inputFactories at: name\x0a                        ifAbsent: [inputFactories at: '_default'].\x0a            input := factory value: html value: name value: type.\x0a            input ifNotNil: [formInputs add: input]\x0a\x09\x09]\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "tr", "td", "label", "at:ifAbsent:", "at:", "value:value:value:", "ifNotNil:", "add:"]
}),
$globals.LoginForm);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$recv(self["@formInputs"])._removeAll();
$1=$recv(html)._form();
$recv($1)._id_("myForm1");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._table())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.HashedCollection._newFromPairs_(["URL",["URL:","string"],"Username",["Username:","string"],"Password",["Password:","password"]]))._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renderInput_label_type_on_(key,$recv(value)._first(),$recv(value)._second(),html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({key:key,value:value},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(html)._p_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._input();
$recv($3)._type_("submit");
$recv($3)._value_("Collect Input Field Values");
return $recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._collectValues();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09formInputs removeAll.\x0a\x09\x22Each table row is described by 'name -> {label. type}'.\x22\x0a    html form id: 'myForm1'; with: [\x0a        html table with: [\x0a            #{'URL'->{'URL:'. 'string'}.\x0a\x09\x09\x09  'Username'->{'Username:'. 'string'}.\x0a              'Password'->{'Password:'. 'password'}}\x0a            keysAndValuesDo: [ :key :value |\x0a                self renderInput: key\x0a                     label: value first\x0a                     type: value second\x0a                     on: html ]].\x0a        html p: [\x0a            html input\x0a                type: 'submit';\x0a                value: 'Collect Input Field Values';\x0a                onClick: [ self collectValues ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeAll", "id:", "form", "with:", "table", "keysAndValuesDo:", "renderInput:label:type:on:", "first", "second", "p:", "type:", "input", "value:", "onClick:", "collectValues"]
}),
$globals.LoginForm);

$core.addMethod(
$core.method({
selector: "urlOptions:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["option"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("http://localhost:9090/restful/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("http://localhost:9090/restful/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._option();
$recv($3)._value_("http://localhost:8888/restful/");
$recv($3)._with_("http://localhost:8888/restful/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"urlOptions:",{html:html},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "urlOptions: html\x0a    html option value: 'http://localhost:9090/restful/'; with: 'http://localhost:9090/restful/'. \x22KNIfe\x22\x0a    html option value: 'http://localhost:8888/restful/'; with: 'http://localhost:8888/restful/'. \x22default port - ToDo App\x22\x0a ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "option", "with:"]
}),
$globals.LoginForm);



$core.addClass('MenuBar', $globals.Widget, [], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MenuBar.comment="Groups Menus with MenuItems";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buildCallback:",
protocol: 'build',
fn: function (actionString){
var self=this;
var cb;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
cb="require('amber/helpers').globals.";
$1=$recv($recv(cb).__comma("ROManager._current()._invoke_('")).__comma(actionString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
cb=$recv($1).__comma("');");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return cb;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildCallback:",{actionString:actionString,cb:cb},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actionString"],
source: "buildCallback: actionString\x0a\x09\x22When mneu item is clicked, call ST method via JS.\x0a\x09Pass on the URL to be invoked.\x22\x0a\x0a\x09| cb |\x0a\x09cb := 'require(''amber/helpers'').globals.'.\x0a\x09\x22cb := cb, 'Browser._open();'.\x22\x0a\x09cb := cb,\x0a\x09\x09'ROManager._current()._invoke_(''', actionString,''');'.\x0a\x09^cb",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "buildMenu:",
protocol: 'build',
fn: function (titleString){
var self=this;
var a,b,menu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
a=self._tag_class_href_dataToggle_title_("a","dropdown-toggle","#","dropdown",titleString);
b=self._tag_class_("b","caret");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=1;
//>>excludeEnd("ctx");
$recv(a).__lt_lt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
menu=self._tag_class_("li","dropdown");
$recv(menu).__lt_lt(a);
return menu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildMenu:",{titleString:titleString,a:a,b:b,menu:menu},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["titleString"],
source: "buildMenu: titleString\x0a\x09\x22Constructs the 'button' including it's dropdown indicator.\x22\x0a\x0a\x09| a b menu |\x0a\x09a := self tag: 'a' \x0a\x09\x09\x09class: 'dropdown-toggle' \x0a\x09\x09\x09href: '#' \x0a\x09\x09\x09dataToggle: 'dropdown' \x0a\x09\x09\x09title: titleString.\x0a\x09b := self tag: 'b' class: 'caret'.\x0a\x09a << b.\x0a\x09menu := self tag: 'li' class: 'dropdown'.\x0a\x09menu << a.\x0a\x09^menu",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:class:href:dataToggle:title:", "tag:class:", "<<"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "buildMenuIndicator",
protocol: 'build',
fn: function (){
var self=this;
var button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
button=$recv($globals.Domite)._newElement_("button");
$recv(button)._attrAt_put_("class","navbar-toggle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(button)._attrAt_put_("data-toggle","collapse");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["attrAt:put:"]=2;
//>>excludeEnd("ctx");
$recv(button)._attrAt_put_("data-target",".navbar-collapse");
$1=button;
$2=self._tag_class_("span","icon-bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=1;
//>>excludeEnd("ctx");
$recv($1).__lt_lt($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$3=button;
$4=self._tag_class_("span","icon-bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=2;
//>>excludeEnd("ctx");
$recv($3).__lt_lt($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(button).__lt_lt(self._tag_class_("span","icon-bar"));
return button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildMenuIndicator",{button:button},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buildMenuIndicator\x0a\x09\x22Constructs a button indicating that there are menuitems not shown due to space restrictions.\x22\x0a\x0a\x09| button |\x0a\x09button := Domite newElement: 'button'. \x0a\x09button attrAt: 'class' put: 'navbar-toggle'.\x0a\x09button attrAt: 'data-toggle' put: 'collapse'.\x0a\x09button attrAt: 'data-target' put: '.navbar-collapse'.\x0a\x09button << (self tag: 'span' class: 'icon-bar'). \x0a\x09button << (self tag: 'span' class: 'icon-bar'). \x0a\x09button << (self tag: 'span' class: 'icon-bar').\x0a\x09^button\x0a\x09",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:", "attrAt:put:", "<<", "tag:class:"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "buildMenuItem:action:",
protocol: 'build',
fn: function (titleString,actionString){
var self=this;
var action,menuItem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
action=$recv($globals.Domite)._newElement_("a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$recv(action)._attrAt_put_("href","javascript:void(0)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(action)._attrAt_put_("onclick",self._buildCallback_(actionString));
$recv(action).__lt_lt(titleString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
menuItem=$recv($globals.Domite)._newElement_("li");
$recv(menuItem).__lt_lt(action);
return menuItem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildMenuItem:action:",{titleString:titleString,actionString:actionString,action:action,menuItem:menuItem},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["titleString", "actionString"],
source: "buildMenuItem: titleString action: actionString\x0a\x09\x22Constructs a single menu item, usually with an action (url/function).\x22\x0a\x0a\x09| action menuItem |\x0a\x09\x0a\x09action :=  Domite newElement: 'a'.\x0a\x09action attrAt: 'href' put: 'javascript:void(0)'.\x0a\x09action attrAt: 'onclick' put: (self buildCallback: actionString).\x0a\x09action << titleString.\x0a\x0a\x09menuItem := Domite newElement: 'li'.\x0a\x09menuItem << action.\x0a\x0a\x09^menuItem",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:", "attrAt:put:", "buildCallback:", "<<"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "buildMenuItems:",
protocol: 'build',
fn: function (actionCollection){
var self=this;
var menu,item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
menu=self._tag_class_("ul","dropdown-menu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=1;
//>>excludeEnd("ctx");
$recv(actionCollection)._do_((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._isNil();
if($core.assert($1)){
item=self._tag_class_("li","divider");
item;
} else {
item=self._buildMenuItem_action_($recv(a)._title(),$recv($recv(a)._link())._href());
item;
};
return $recv(menu).__lt_lt(item);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return menu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildMenuItems:",{actionCollection:actionCollection,menu:menu,item:item},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actionCollection"],
source: "buildMenuItems: actionCollection\x0a\x09\x22Constructs a list of menu items.\x22\x0a\x0a\x09| menu item |\x0a\x09menu := self tag: 'ul' class: 'dropdown-menu'.\x0a\x0a\x09actionCollection do: [: a |\x0a\x09\x09a isNil \x0a\x09\x09\x09ifTrue: [item := self tag: 'li' class: 'divider']\x0a\x09\x09\x09ifFalse: [item := self buildMenuItem: (a title) action: (a link href)].\x0a\x09\x09menu << item.\x0a\x09].\x0a\x09^menu",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:class:", "do:", "ifTrue:ifFalse:", "isNil", "buildMenuItem:action:", "title", "href", "link", "<<"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "buildNavigation:",
protocol: 'build',
fn: function (aDictionary){
var self=this;
var navigation,navbar,container,navbarCollapse,nav,dd,ddm;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
navigation=$recv($globals.Domite)._at_("#navigation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv(navigation)._resetContents();
navbar=self._tag_class_("div","navbar navbar-default navbar-static-top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=1;
//>>excludeEnd("ctx");
container=self._tag_class_("div","container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=2;
//>>excludeEnd("ctx");
navbarCollapse=self._tag_class_("div","navbar-collapse collapse");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=3;
//>>excludeEnd("ctx");
nav=self._tag_class_("ul","nav navbar-nav");
$recv(aDictionary)._keysDo_((function(k){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
dd=self._buildMenu_(k);
dd;
ddm=self._buildMenuItems_($recv(aDictionary)._at_(k));
ddm;
$recv(dd).__lt_lt(ddm);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
return $recv(nav).__lt_lt(dd);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(navbarCollapse).__lt_lt(nav);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$recv(container).__lt_lt(navbarCollapse);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$recv(container).__lt_lt(self._buildMenuIndicator());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
$recv(navbar).__lt_lt(container);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=6;
//>>excludeEnd("ctx");
$recv(navigation).__lt_lt(navbar);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildNavigation:",{aDictionary:aDictionary,navigation:navigation,navbar:navbar,container:container,navbarCollapse:navbarCollapse,nav:nav,dd:dd,ddm:ddm},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "buildNavigation: aDictionary\x0a\x22\x22\x09\x0a\x09| navigation navbar container navbarCollapse nav dd ddm |\x0a\x09navigation := Domite at: '#navigation'.\x0a\x09navigation resetContents.\x0a\x09navbar := self tag: 'div' class: 'navbar navbar-default navbar-static-top'.\x0a\x09container := self tag: 'div' class: 'container'.\x0a\x09navbarCollapse := self tag: 'div' class: 'navbar-collapse collapse'.\x0a\x09nav := self tag: 'ul' class: 'nav navbar-nav'.\x0a\x0a\x09aDictionary keysDo: [: k |\x0a\x09\x09dd := self buildMenu: k.\x0a\x09\x09ddm := self buildMenuItems: (aDictionary at: k).\x0a\x22self halt.\x22\x0a\x09\x09dd << ddm.\x0a\x09\x09nav << dd.\x0a\x09].\x0a\x0a\x09navbarCollapse << nav.\x0a\x09container << navbarCollapse.\x0a\x09container << self buildMenuIndicator.\x0a\x09navbar << container.\x0a\x09navigation << navbar.",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["at:", "resetContents", "tag:class:", "keysDo:", "buildMenu:", "buildMenuItems:", "<<", "buildMenuIndicator"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "example",
protocol: 'example',
fn: function (){
var self=this;
var dict,coll1,coll2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
dict=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
coll1=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$1=coll1;
$recv($1)._add_("1.1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._add_("1.2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
coll2=$recv($globals.OrderedCollection)._new();
$3=coll2;
$recv($3)._add_("2.1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($3)._add_("2.2");
$recv(dict)._at_put_("Oans",coll1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(dict)._at_put_("Zwoa",coll2);
self._buildNavigation_(dict);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{dict:dict,coll1:coll1,coll2:coll2},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x22\x0a\x09MenuBar new example\x0a\x22\x09\x0a\x09| dict coll1 coll2 |\x0a\x09dict := Dictionary new.\x0a\x09coll1 := OrderedCollection new.\x0a\x09coll1 add: '1.1'; add: nil; add: '1.2'.\x0a\x09coll2 := OrderedCollection new.\x0a\x09coll2 add: '2.1'; add: '2.2'.\x0a\x09dict at: 'Oans' put: coll1.\x0a\x09dict at: 'Zwoa' put: coll2.\x0a\x0a\x09self buildNavigation: dict",
referencedClasses: ["Dictionary", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "add:", "at:put:", "buildNavigation:"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "tag:class:",
protocol: 'convenience',
fn: function (tagString,classString){
var self=this;
var domite;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
domite=$recv($globals.Domite)._newElement_(tagString);
$recv(domite)._attrAt_put_("class",classString);
return domite;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tag:class:",{tagString:tagString,classString:classString,domite:domite},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tagString", "classString"],
source: "tag: tagString class: classString\x0a\x09\x0a\x09| domite |\x0a\x09domite := Domite newElement: tagString.\x0a\x09domite attrAt: 'class' put: classString.\x0a\x09^domite",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:", "attrAt:put:"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "tag:class:href:dataToggle:title:",
protocol: 'convenience',
fn: function (tagString,classString,actionString,toggleString,titleString){
var self=this;
var domite;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
domite=self._tag_class_(tagString,classString);
$recv(domite)._attrAt_put_("href",actionString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(domite)._attrAt_put_("data-toggle",toggleString);
$recv(domite).__lt_lt(titleString);
return domite;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tag:class:href:dataToggle:title:",{tagString:tagString,classString:classString,actionString:actionString,toggleString:toggleString,titleString:titleString,domite:domite},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tagString", "classString", "actionString", "toggleString", "titleString"],
source: "tag: tagString \x0a\x09\x09class: classString \x0a\x09\x09href: actionString \x0a\x09\x09dataToggle: toggleString \x0a\x09\x09title: titleString\x0a\x09\x0a\x09| domite |\x0a\x09domite := self tag: tagString class: classString.\x0a\x09domite attrAt: 'href' put: actionString.\x0a\x09domite attrAt: 'data-toggle' put: toggleString.\x0a\x09domite << titleString.\x0a\x09^domite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:class:", "attrAt:put:", "<<"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "tag:href:title:",
protocol: 'deprecated',
fn: function (tagString,actionString,titleString){
var self=this;
var domite,a;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
domite=$recv($globals.Domite)._newElement_(tagString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
a=$recv($globals.Domite)._newElement_("a");
$recv(a)._attrAt_put_("href","javascript:void(0)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["attrAt:put:"]=1;
//>>excludeEnd("ctx");
$recv(a)._attrAt_put_("onclick","alert('actionString');");
$recv(a).__lt_lt(titleString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$recv(domite).__lt_lt(a);
return domite;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tag:href:title:",{tagString:tagString,actionString:actionString,titleString:titleString,domite:domite,a:a},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tagString", "actionString", "titleString"],
source: "tag: tagString \x0a\x09\x09href: actionString \x0a\x09\x09title: titleString\x0a\x22deprecated, use buildMenuItem:action\x22\x0a\x09\x0a\x09| domite a |\x0a\x09domite := Domite newElement: tagString.\x0a\x09a := Domite newElement: 'a'.\x0a\x09a attrAt: 'href' put: 'javascript:void(0)'.\x0a\x09a attrAt: 'onclick' put: 'alert(''actionString'');'.\x0a\x09a << titleString.\x0a\x09domite << a.\x0a\x09^domite",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:", "attrAt:put:", "<<"]
}),
$globals.MenuBar);



$core.addClass('ROAction', $globals.Object, ['description', 'link', 'title'], 'Roast');
$core.addMethod(
$core.method({
selector: "initialize:",
protocol: 'as yet unclassified',
fn: function (actionDictionary){
var self=this;
var linksDictionary;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(actionDictionary)._at_("links");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
linksDictionary=$recv($1)._first();
self["@link"]=$recv($recv($globals.Link)._new())._initialize_(linksDictionary);
self["@title"]=$recv(actionDictionary)._at_("id");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize:",{actionDictionary:actionDictionary,linksDictionary:linksDictionary},$globals.ROAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actionDictionary"],
source: "initialize: actionDictionary\x0a\x0a\x09\x22 ensure (actionDictionary at: 'memberType') = 'action' \x22\x0a\x09| linksDictionary | \x0a\x09linksDictionary := (actionDictionary at: 'links') first.\x0a\x09link := Link new initialize: linksDictionary.\x0a\x09title := actionDictionary at: 'id'.\x0a\x09^self",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
messageSends: ["first", "at:", "initialize:", "new"]
}),
$globals.ROAction);

$core.addMethod(
$core.method({
selector: "link",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@link"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "link\x0a\x0a\x09^link",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROAction);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@title"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROAction);

$core.addMethod(
$core.method({
selector: "toString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self["@title"]).__comma(" (link: ")).__comma($recv(self["@link"])._toString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toString",{},$globals.ROAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toString\x0a\x0a\x09^title, ' (link: ' , link toString , ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "toString"]
}),
$globals.ROAction);



$core.addClass('ROCollection', $globals.Object, ['description'], 'Roast');


$core.addClass('ROManager', $globals.Object, ['services', 'objects', 'authentication', 'invoker', 'links'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ROManager.comment="Singleton Pattern\x0a\x0aHolds services, objects, etc. and eventually updates them.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buildActions1:for:",
protocol: 'deprecated',
fn: function (aDictionary,service){
var self=this;
var link,json,mDict,mLinks,act,link2,linkDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(aDictionary)._at_("links");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(l){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($globals.Link)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
link=$recv($2)._buildWith_(l);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["buildWith:"]=1;
//>>excludeEnd("ctx");
link;
$3=$recv($recv(link)._rel()).__eq("describedby");
if($core.assert($3)){
json=$recv(self["@invoker"])._invoke_(link);
json;
mDict=self._toStObjects_(json);
mDict;
mLinks=$recv(mDict)._at_("members");
mLinks;
return $recv(mLinks)._do_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
linkDict=self._fixActionUrl_(m);
linkDict;
$4=$recv($globals.Link)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["new"]=2;
//>>excludeEnd("ctx");
link2=$recv($4)._buildWith_(linkDict);
link2;
act=$recv($recv($globals.DomainObjectAction)._new())._initialize_(link2);
act;
return $recv(service)._addAction_(act);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({m:m},$ctx2,3)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildActions1:for:",{aDictionary:aDictionary,service:service,link:link,json:json,mDict:mDict,mLinks:mLinks,act:act,link2:link2,linkDict:linkDict},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "service"],
source: "buildActions1: aDictionary for: service\x0a\x0a\x09| link json mDict mLinks act link2 linkDict|\x0a\x09(aDictionary at: 'links') do: [: l | \x0a\x09\x09link := Link new buildWith: l.\x0a\x09\x09(link rel = 'describedby') ifTrue: [\x0a\x09\x09\x09json := invoker invoke: link.\x0a\x09\x09\x09mDict := self toStObjects: json.\x0a\x09\x09\x09mLinks := mDict at: 'members'.\x0a\x09\x09\x09mLinks do: [: m |\x0a\x09\x09\x09\x09linkDict := self fixActionUrl: m.\x0a\x09\x09\x09\x09link2 := Link new buildWith: linkDict.\x0a\x09\x09\x09\x09act := DomainObjectAction new initialize: link2.\x0a\x09\x09\x09\x09service addAction: act.\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
referencedClasses: ["Link", "DomainObjectAction"],
//>>excludeEnd("ide");
messageSends: ["do:", "at:", "buildWith:", "new", "ifTrue:", "=", "rel", "invoke:", "toStObjects:", "fixActionUrl:", "initialize:", "addAction:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "buildActions:",
protocol: 'building',
fn: function (serviceDictionary){
var self=this;
var actionDict,actionList,action;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
actionDict=self._extractActions_(serviceDictionary);
actionList=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(actionDict)._do_((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
action=$recv($recv($globals.ROAction)._new())._initialize_(a);
action;
return $recv(actionList)._add_(action);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return actionList;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildActions:",{serviceDictionary:serviceDictionary,actionDict:actionDict,actionList:actionList,action:action},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["serviceDictionary"],
source: "buildActions: serviceDictionary\x0a\x0a\x09| actionDict actionList action |\x0a\x09actionDict := self extractActions: serviceDictionary.\x0a\x09actionList := OrderedCollection new.\x0a\x09actionDict do: [: a | \x0a\x09\x09action := ROAction new initialize: a.\x0a\x09\x09actionList add: action].\x0a\x09^ actionList",
referencedClasses: ["OrderedCollection", "ROAction"],
//>>excludeEnd("ide");
messageSends: ["extractActions:", "new", "do:", "initialize:", "add:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "buildLinks:",
protocol: 'building',
fn: function (aDictionary){
var self=this;
var link;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._extractLinks_(aDictionary))._do_((function(l){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
link=$recv($recv($globals.Link)._new())._initialize_(l);
link;
return $recv(self["@links"])._add_(link);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildLinks:",{aDictionary:aDictionary,link:link},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "buildLinks: aDictionary\x0a\x0a\x09| link |\x0a\x09(self extractLinks: aDictionary) do: [: l | \x0a\x09\x09link := Link new initialize: l.\x0a\x09\x09links add: link].",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
messageSends: ["do:", "extractLinks:", "initialize:", "new", "add:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "buildMenu",
protocol: 'building',
fn: function (){
var self=this;
var dict,k,v,menuBar;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
dict=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(self["@services"])._do_((function(s){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
k=$recv($recv(s)._link())._title();
k;
v=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
v;
$recv($recv(s)._actions())._do_((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(v)._add_(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({a:a},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$1=$recv(dict)._includesKey_(k);
if($core.assert($1)){
$2=$recv(dict)._at_(k);
$recv($2)._add_(nil);
return $recv($2)._addAll_(v);
} else {
return $recv(dict)._at_put_(k,v);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
menuBar=$recv($globals.MenuBar)._new();
$recv(menuBar)._buildNavigation_(dict);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildMenu",{dict:dict,k:k,v:v,menuBar:menuBar},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buildMenu\x0a\x09\x22Iterate over services. When title of two services is the same, \x0a\x09use title for menu item. Add each actions, \x0a\x09eventually separated with a line.\x22\x0a\x09\x0a\x09| dict k v menuBar |\x0a\x09dict := Dictionary new.\x0a\x09services do: [: s | \x0a\x09\x09k := s link title.\x0a\x09\x09v := OrderedCollection new.\x0a\x09\x09s actions do: [: a | v add: a].\x0a\x22self halt. v is empty, eg. for Diffs\x22\x0a\x09\x09(dict includesKey: k)\x0a\x09\x09\x09ifTrue: [(dict at: k)\x0a\x09\x09\x09\x09add: nil;\x0a\x09\x09\x09\x09addAll: v]\x0a\x09\x09\x09ifFalse: [dict at: k put: v]].\x0a\x09menuBar := MenuBar new.\x0a\x09menuBar buildNavigation: dict.",
referencedClasses: ["Dictionary", "OrderedCollection", "MenuBar"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "title", "link", "actions", "add:", "ifTrue:ifFalse:", "includesKey:", "at:", "addAll:", "at:put:", "buildNavigation:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "buildService:",
protocol: 'building',
fn: function (s){
var self=this;
var svc,link,json,dict,actions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Link)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
link=$recv($1)._initialize_(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["initialize:"]=1;
//>>excludeEnd("ctx");
svc=$recv($recv($globals.ROService)._new())._initialize_(link);
json=$recv(self["@invoker"])._invoke_($recv(svc)._link());
dict=self._toStObjects_(json);
actions=self._buildActions_(dict);
$recv(actions)._do_((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_($recv(a)._toString());
$recv($globals.Transcript)._cr();
return $recv(svc)._addAction_(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return svc;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildService:",{s:s,svc:svc,link:link,json:json,dict:dict,actions:actions},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["s"],
source: "buildService: s\x0a\x0a\x09| svc link json dict actions |\x0a\x09link := Link new initialize: s.\x0a\x09svc := ROService new initialize: link.\x0a\x09json := invoker invoke: svc link.\x0a\x09dict := self toStObjects: json.\x0a\x09actions := self buildActions: dict.\x0a\x09actions do: [: a | \x09\x0aTranscript show: a toString; cr.\x0a\x09\x09svc addAction: a].\x0a\x09^ svc",
referencedClasses: ["Link", "ROService", "Transcript"],
//>>excludeEnd("ide");
messageSends: ["initialize:", "new", "invoke:", "link", "toStObjects:", "buildActions:", "do:", "show:", "toString", "cr", "addAction:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "buildServices:",
protocol: 'building',
fn: function (aDictionary){
var self=this;
var vDict,svc;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
vDict=self._extractValue_(aDictionary);
$recv(vDict)._do_((function(s){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
svc=self._buildService_(s);
svc;
return $recv(self["@services"])._add_(svc);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildServices:",{aDictionary:aDictionary,vDict:vDict,svc:svc},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "buildServices: aDictionary\x0a\x0a\x09| vDict svc |\x0a\x09vDict := self extractValue: aDictionary.\x0a\x09vDict do: [: s | \x0a\x09\x09svc := self buildService: s.\x0a\x09\x09services add: svc.]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["extractValue:", "do:", "buildService:", "add:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "exampleKNIfe",
protocol: 'example',
fn: function (){
var self=this;
var rom,url;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
rom=self._initializeWithUser_password_("sven","pass");
url="http://localhost:8080/restful/";
$recv(rom)._load_(url);
$recv(rom)._buildMenu();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exampleKNIfe",{rom:rom,url:url},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exampleKNIfe\x0a\x09\x22\x0a\x09ROManager current exampleKNIfe\x0a\x09\x22\x0a\x09| rom url |\x0a\x09rom := self \x0a\x09\x09initializeWithUser: 'sven' \x0a\x09\x09password: 'pass'.\x0a\x09url := 'http://localhost:8080/restful/'.\x0a\x09rom load: url. \x0a\x09rom buildMenu.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithUser:password:", "load:", "buildMenu"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "exampleToDo",
protocol: 'example',
fn: function (){
var self=this;
var rom,url;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
rom=self._initializeWithUser_password_("todoapp-admin","pass");
url="http://localhost:8888/restful/";
$recv(rom)._load_(url);
$recv(rom)._buildMenu();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exampleToDo",{rom:rom,url:url},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exampleToDo\x0a\x09\x22\x0a\x09ROManager current exampleToDo\x0a\x09\x22\x0a\x09| rom url |\x0a\x09rom := self \x0a\x09\x09initializeWithUser: 'todoapp-admin' \x0a\x09\x09password: 'pass'.\x0a\x09url := 'http://localhost:8888/restful/'.\x0a\x09rom load: url. \x0a\x09rom buildMenu.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithUser:password:", "load:", "buildMenu"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "extractActions:",
protocol: 'filtering',
fn: function (serviceDictionary){
var self=this;
var members,actions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
members=self._extractMembers_(serviceDictionary);
actions=$recv(members)._collect_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(m)._at_("memberType")).__eq("action");
if($core.assert($1)){
return m;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return actions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractActions:",{serviceDictionary:serviceDictionary,members:members,actions:actions},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["serviceDictionary"],
source: "extractActions: serviceDictionary\x0a\x0a\x09| members actions |\x0a\x09members := self extractMembers: serviceDictionary. \x0a\x09actions := members collect:[:m | (m at: 'memberType' ) = 'action' ifTrue: [m]].\x0a\x09^ actions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["extractMembers:", "collect:", "ifTrue:", "=", "at:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "extractLinks:",
protocol: 'filtering',
fn: function (serviceDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(serviceDictionary)._at_ifAbsent_("links",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_("[WARN] no links in serviceDictionary");
$recv($globals.Transcript)._cr();
return nil;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractLinks:",{serviceDictionary:serviceDictionary},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["serviceDictionary"],
source: "extractLinks: serviceDictionary\x0a\x0a\x09^ serviceDictionary \x0a\x09\x09at: 'links'\x0a\x09\x09ifAbsent: [\x0a\x09\x09\x09Transcript show: '[WARN] no links in serviceDictionary'; cr. \x0a\x09\x09\x09nil]",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "show:", "cr"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "extractMembers:",
protocol: 'filtering',
fn: function (serviceDictionary){
var self=this;
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dict=$recv(serviceDictionary)._at_ifAbsent_("members",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_("[WARN] no members in serviceDictionary");
$recv($globals.Transcript)._cr();
return nil;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractMembers:",{serviceDictionary:serviceDictionary,dict:dict},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["serviceDictionary"],
source: "extractMembers: serviceDictionary\x0a\x0a\x09| dict |\x0a\x09dict := serviceDictionary \x0a\x09\x09at: 'members'\x0a\x09\x09ifAbsent: [\x0a\x09\x09\x09Transcript show: '[WARN] no members in serviceDictionary'; cr. \x0a\x09\x09\x09nil].\x0a\x09^ dict",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "show:", "cr"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "extractValue:",
protocol: 'filtering',
fn: function (serviceDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(serviceDictionary)._at_ifAbsent_("value",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_("[WARN] no value in serviceDictionary");
$recv($globals.Transcript)._cr();
return nil;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractValue:",{serviceDictionary:serviceDictionary},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["serviceDictionary"],
source: "extractValue: serviceDictionary\x0a\x0a\x09^ serviceDictionary \x0a\x09\x09at: 'value'\x0a\x09\x09ifAbsent: [\x0a\x09\x09\x09Transcript show: '[WARN] no value in serviceDictionary'; cr. \x0a\x09\x09\x09nil]",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "show:", "cr"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "findServiceLink",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(self["@links"])._do_((function(l){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(l)._rel())._includesSubString_("service");
if($core.assert($1)){
throw $early=[l];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findServiceLink",{},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "findServiceLink\x0a\x0a\x09links do: [: l |\x0a\x09\x09(l rel includesSubString: 'service') \x0a\x09\x09\x09ifTrue: [^ l]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "includesSubString:", "rel"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "fixActionUrl:",
protocol: 'deprecated',
fn: function (rawDictionary){
var self=this;
var sep,fixedDict,rawUrl,list,fixedUrl,svcClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$18,$17,$19,$16,$15,$20,$14,$13,$21,$12,$11,$10,$9,$8,$7,$22,$6,$5,$4,$3;
sep="/";
fixedDict=$recv(rawDictionary)._shallowCopy();
rawUrl=$recv(rawDictionary)._at_("href");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
list=$recv(rawUrl)._tokenize_(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tokenize:"]=1;
//>>excludeEnd("ctx");
$2=$recv(list)._at_((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._tokenize_(".");
svcClass=$recv($1)._last();
$18=$recv(list)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$17=$recv($18).__comma(sep);
$19=$recv(list)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$16=$recv($17).__comma($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=15;
//>>excludeEnd("ctx");
$15=$recv($16).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=14;
//>>excludeEnd("ctx");
$20=$recv(list)._at_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
$14=$recv($15).__comma($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=13;
//>>excludeEnd("ctx");
$13=$recv($14).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
$21=$recv(list)._at_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$12=$recv($13).__comma($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
$10=$recv($11).__comma("services");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$9=$recv($10).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(svcClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$7=$recv($8).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$22=$recv(list)._at_((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=7;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($recv(list)._at_((8)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(sep);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
fixedUrl=$recv($3).__comma("invoke");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(fixedUrl);
$recv($globals.Transcript)._cr();
$recv(fixedDict)._at_put_("href",fixedUrl);
return fixedDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fixActionUrl:",{rawDictionary:rawDictionary,sep:sep,fixedDict:fixedDict,rawUrl:rawUrl,list:list,fixedUrl:fixedUrl,svcClass:svcClass},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rawDictionary"],
source: "fixActionUrl: rawDictionary \x0a\x0a\x09| sep fixedDict rawUrl list fixedUrl svcClass|\x0a\x09sep := '/'.\x0a\x09fixedDict := rawDictionary shallowCopy.\x0a\x09rawUrl := rawDictionary at: 'href'.\x0a\x09list := rawUrl tokenize: sep.\x0a\x09svcClass := ((list at: 6) tokenize: '.') last.\x0a\x09fixedUrl := (list at: 1), sep,\x0a\x09\x09(list at: 2), sep,\x0a\x09\x09(list at: 3), sep,\x0a\x09\x09(list at: 4), sep,\x0a\x09\x09'services', sep,\x0a\x09\x09svcClass, sep,\x0a\x09\x09(list at: 7), sep,\x0a\x09\x09(list at: 8), sep,\x0a\x09\x09'invoke'.\x0aTranscript show: fixedUrl; cr.\x0a\x09fixedDict at: 'href' put: fixedUrl.\x0a\x09^ fixedDict",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["shallowCopy", "at:", "tokenize:", "last", ",", "show:", "cr", "at:put:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "initializeWithUser:password:",
protocol: 'initialization',
fn: function (username,password){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Authentication)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@authentication"]=$recv($1)._user_password_(username,password);
self["@invoker"]=$recv($globals.Invoker)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv(self["@invoker"])._setAuthentication_(self["@authentication"]);
self["@services"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self["@objects"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
self["@links"]=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithUser:password:",{username:username,password:password},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["username", "password"],
source: "initializeWithUser: username password:password\x0a\x09\x0a\x09authentication := Authentication new user: username password: password.\x0a\x09invoker := Invoker new.\x0a\x09invoker setAuthentication: authentication.\x0a\x0a\x09services := OrderedCollection new.\x0a\x09objects := OrderedCollection new.\x0a\x09links := OrderedCollection new.",
referencedClasses: ["Authentication", "Invoker", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["user:password:", "new", "setAuthentication:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "invoke:",
protocol: 'invoking',
fn: function (urlString){
var self=this;
var link;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Link)._new();
$recv($1)._withHref_(urlString);
link=$recv($1)._withMethod_("GET");
$recv(self["@invoker"])._invoke_(link);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invoke:",{urlString:urlString,link:link},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["urlString"],
source: "invoke: urlString\x0a\x09\x22convert string into link in order to use invoker\x22\x0a\x0a\x09| link |\x0a\x09link := Link new \x0a\x09\x09withHref: urlString;\x0a\x09\x09withMethod: 'GET'.\x0a\x09invoker invoke: link",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
messageSends: ["withHref:", "new", "withMethod:", "invoke:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "load:",
protocol: 'invoking',
fn: function (rootUrl){
var self=this;
var rLink,jsonString,dict,sLink,js2String;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Link)._new();
$recv($1)._withHref_(rootUrl);
rLink=$recv($1)._withMethod_("GET");
jsonString=$recv(self["@invoker"])._invoke_(rLink);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["invoke:"]=1;
//>>excludeEnd("ctx");
dict=self._toStObjects_(jsonString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toStObjects:"]=1;
//>>excludeEnd("ctx");
self._buildLinks_(dict);
sLink=self._findServiceLink();
js2String=$recv(self["@invoker"])._invoke_(sLink);
dict=self._toStObjects_(js2String);
self._buildServices_(dict);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{rootUrl:rootUrl,rLink:rLink,jsonString:jsonString,dict:dict,sLink:sLink,js2String:js2String},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rootUrl"],
source: "load: rootUrl \x0a\x09\x22Entry point for accessing the server.\x22\x0a\x0a\x09| rLink jsonString dict sLink js2String |\x0a\x09rLink := Link new withHref: rootUrl; withMethod: 'GET'.\x0a\x09jsonString := invoker invoke: rLink.\x09\x0a\x09dict := self toStObjects: jsonString.\x0a\x09self buildLinks: dict.\x0a\x09\x0a\x09sLink := self findServiceLink.\x0a\x09js2String := invoker invoke: sLink.\x0a\x09dict := self toStObjects: js2String.\x0a\x09self buildServices: dict.",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
messageSends: ["withHref:", "new", "withMethod:", "invoke:", "toStObjects:", "buildLinks:", "findServiceLink", "buildServices:"]
}),
$globals.ROManager);

$core.addMethod(
$core.method({
selector: "toStObjects:",
protocol: 'private',
fn: function (jsonString){
var self=this;
var jsObject,stObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
jsObject=$recv($globals.JSON)._parse_(jsonString);
stObject=$recv($globals.Smalltalk)._readJSObject_(jsObject);
return stObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toStObjects:",{jsonString:jsonString,jsObject:jsObject,stObject:stObject},$globals.ROManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonString"],
source: "toStObjects: jsonString\x0a\x0a\x09| jsObject stObject|\x0a\x09jsObject := JSON parse: jsonString.\x0a\x09stObject := Smalltalk readJSObject: jsObject.\x0a\x09^stObject",
referencedClasses: ["JSON", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:", "readJSObject:"]
}),
$globals.ROManager);


$globals.ROManager.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@current"];
if(($receiver = $1) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ROManager.klass.superclass||$boot.nilAsClass).fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self["@current"];
} else {
return self["@current"];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.ROManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current \x0a\x09\x09ifNil: [ current := super new ] \x0a\x09\x09ifNotNil: [ current ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "new"]
}),
$globals.ROManager.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.ROManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.ROManager.klass);


$core.addClass('ROProperty', $globals.Object, ['description'], 'Roast');


$core.addClass('ROService', $globals.Object, ['actions', 'link', 'title'], 'Roast');
$core.addMethod(
$core.method({
selector: "actions",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@actions"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actions\x0a\x0a\x09^actions ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROService);

$core.addMethod(
$core.method({
selector: "addAction:",
protocol: 'private',
fn: function (aDomainObjectAction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@actions"])._add_(aDomainObjectAction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAction:",{aDomainObjectAction:aDomainObjectAction},$globals.ROService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainObjectAction"],
source: "addAction: aDomainObjectAction\x0a\x0a\x09actions add: aDomainObjectAction ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.ROService);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var arr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
arr=$recv($recv(self["@link"])._href())._tokenize_("/");
return $recv(arr)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{arr:arr},$globals.ROService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09| arr |\x0a\x09arr := link href tokenize: '/'.\x0a\x09^arr last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tokenize:", "href", "last"]
}),
$globals.ROService);

$core.addMethod(
$core.method({
selector: "initialize:",
protocol: 'initialize',
fn: function (aLink){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@actions"]=$recv($globals.OrderedCollection)._new();
self["@link"]=aLink;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize:",{aLink:aLink},$globals.ROService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLink"],
source: "initialize: aLink\x0a\x0a\x09actions := OrderedCollection new.\x0a\x09link := aLink.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ROService);

$core.addMethod(
$core.method({
selector: "link",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@link"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "link\x0a\x0a\x09^link ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROService);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@title"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x0a\x09^title ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROService);



$core.addClass('RObject', $globals.ROService, ['properties', 'collections'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RObject.comment="DomainObjects are stateful in addition to\x0a\x0a* actions\x0a\x0athey can have\x0a\x0a* properties and\x0a* collections, ie. lists of other DomainObjects";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addCollection:",
protocol: 'as yet unclassified',
fn: function (aDomainObjectCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@collections"])._add_(aDomainObjectCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addCollection:",{aDomainObjectCollection:aDomainObjectCollection},$globals.RObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainObjectCollection"],
source: "addCollection: aDomainObjectCollection\x0a\x0a\x09collections add: aDomainObjectCollection ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.RObject);

$core.addMethod(
$core.method({
selector: "addProperty:",
protocol: 'as yet unclassified',
fn: function (aDomainObjectProperty){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@properties"])._add_(aDomainObjectProperty);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addProperty:",{aDomainObjectProperty:aDomainObjectProperty},$globals.RObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainObjectProperty"],
source: "addProperty: aDomainObjectProperty\x0a\x0a\x09properties add: aDomainObjectProperty ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.RObject);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.RObject.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@properties"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@collections"]=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.RObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09properties := OrderedCollection new.\x0a\x09collections := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.RObject);



$core.addClass('Roast', $globals.Object, [], 'Roast');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
var spa;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
spa="#client-main"._asJQuery();
$recv(spa)._empty();
$recv($recv($globals.LoginForm)._new())._appendToJQuery_(spa);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{spa:spa},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| spa |\x0a\x09spa := '#client-main' asJQuery.\x0a\x09spa empty. \x0a\x09LoginForm new appendToJQuery: spa",
referencedClasses: ["LoginForm"],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "empty", "appendToJQuery:", "new"]
}),
$globals.Roast);

$core.addMethod(
$core.method({
selector: "augmentPageNew",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Login)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPageNew",{},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPageNew\x0a\x09Login new ",
referencedClasses: ["Login"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Roast);

$core.addMethod(
$core.method({
selector: "augmentPageOld",
protocol: 'starting',
fn: function (){
var self=this;
var spa;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
spa="#client-main"._asJQuery();
$recv(spa)._empty();
$recv($recv($globals.LoginForm)._new())._appendToJQuery_(spa);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPageOld",{spa:spa},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPageOld\x0a\x09| spa |\x0a\x09spa := '#client-main' asJQuery.\x0a\x09spa empty. \x0a\x09LoginForm new appendToJQuery: spa",
referencedClasses: ["LoginForm"],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "empty", "appendToJQuery:", "new"]
}),
$globals.Roast);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
var self=this;
var tag;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($globals.HTMLCanvas)._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.Roast);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.Roast);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.Roast);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Roast.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.Roast.klass);


$core.addClass('Table', $globals.Widget, [], 'Roast');
$core.addMethod(
$core.method({
selector: "createTag:",
protocol: 'domite',
fn: function (tagString){
var self=this;
var t;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
t=$recv($globals.Domite)._newElement_(tagString);
return t;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createTag:",{tagString:tagString,t:t},$globals.Table)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tagString"],
source: "createTag: tagString\x0a\x0a\x09| t |\x0a\x09t := Domite newElement: tagString.\x0a\x09^t",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:"]
}),
$globals.Table);

$core.addMethod(
$core.method({
selector: "example",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var div,script,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
div=self._readDiv();
$recv(div)._resetContents();
script=self._createTag_("script");
s=self._gridSpec();
$recv(script).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$recv(div).__lt_lt(script);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{div:div,script:script,s:s},$globals.Table)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x22Table new example\x22\x09\x0a\x09| div script s |\x0a\x09div := self readDiv.\x0a\x09div resetContents.\x0a\x09script := self createTag: 'script'.\x0a\x09s := self gridSpec.\x0a\x09script << s.\x0a\x09div << script.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readDiv", "resetContents", "createTag:", "gridSpec", "<<"]
}),
$globals.Table);

$core.addMethod(
$core.method({
selector: "gridSpec",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var content;
content="$(function() {\x0a\x09\x09\x09$('#content').jsGrid({\x0a\x09\x09\x09\x09height: '100%',\x0a\x09\x09\x09\x09width: '100%',\x0a\x0a\x09\x09\x09\x09filtering: true,\x0a\x09\x09\x09\x09editing: true,\x0a\x09\x09\x09\x09sorting: true,\x0a\x09\x09\x09\x09paging: false,\x0a\x09\x09\x09\x09autoload: true,\x0a\x0a\x09\x09\x09\x09deleteConfirm: 'Do you really want to delete the client?',\x0a\x0a\x09\x09\x09\x09controller: db,\x0a\x0a\x09\x09\x09\x09fields: [\x0a\x09\x09\x09\x09\x09{ name: 'Name', type: 'text', width: 150 },\x0a\x09\x09\x09\x09\x09{ name: 'Age', type: 'number', width: 50 },\x0a\x09\x09\x09\x09\x09{ name: 'Address', type: 'text', width: 200 },\x0a\x09\x09\x09\x09\x09{ name: 'Married', type: 'checkbox', title: 'Verheiratet', sorting: true },\x0a\x09\x09\x09\x09\x09{ type: 'control' }\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09});\x0a\x0a\x09\x09});";
return content;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gridSpec\x0a\x0a\x09| content |\x0a\x09content := '$(function() {\x0a\x09\x09\x09$(''#content'').jsGrid({\x0a\x09\x09\x09\x09height: ''100%'',\x0a\x09\x09\x09\x09width: ''100%'',\x0a\x0a\x09\x09\x09\x09filtering: true,\x0a\x09\x09\x09\x09editing: true,\x0a\x09\x09\x09\x09sorting: true,\x0a\x09\x09\x09\x09paging: false,\x0a\x09\x09\x09\x09autoload: true,\x0a\x0a\x09\x09\x09\x09deleteConfirm: ''Do you really want to delete the client?'',\x0a\x0a\x09\x09\x09\x09controller: db,\x0a\x0a\x09\x09\x09\x09fields: [\x0a\x09\x09\x09\x09\x09{ name: ''Name'', type: ''text'', width: 150 },\x0a\x09\x09\x09\x09\x09{ name: ''Age'', type: ''number'', width: 50 },\x0a\x09\x09\x09\x09\x09{ name: ''Address'', type: ''text'', width: 200 },\x0a\x09\x09\x09\x09\x09{ name: ''Married'', type: ''checkbox'', title: ''Verheiratet'', sorting: true },\x0a\x09\x09\x09\x09\x09{ type: ''control'' }\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09});\x0a\x0a\x09\x09});'.\x0a\x09^content\x0a\x09 ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Table);

$core.addMethod(
$core.method({
selector: "readDiv",
protocol: 'domite',
fn: function (){
var self=this;
var div;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
div=$recv($globals.Domite)._at_("#content");
return div;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readDiv",{div:div},$globals.Table)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readDiv\x0a\x0a\x09| div |\x0a\x09div := Domite at: '#content'.\x0a\x09^div",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Table);


});
