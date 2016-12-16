define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
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
$core.packages["Roast"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
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



$core.addClass('DomainObjectAction', $globals.Object, ['description', 'link', 'title'], 'Roast');
$core.addMethod(
$core.method({
selector: "initialize:",
protocol: 'as yet unclassified',
fn: function (aLink){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@link"]=aLink;
self["@title"]=$recv($recv($recv(self["@link"])._href())._tokenize_("/"))._last();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize:",{aLink:aLink},$globals.DomainObjectAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLink"],
source: "initialize: aLink\x0a\x0a\x09link := aLink.\x0a\x09title := (link href tokenize: '/') last.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "tokenize:", "href"]
}),
$globals.DomainObjectAction);



$core.addClass('DomainObjectCollection', $globals.Object, ['description'], 'Roast');


$core.addClass('DomainObjectProperty', $globals.Object, ['description'], 'Roast');


$core.addClass('DomainService', $globals.Object, ['actions', 'link', 'title'], 'Roast');
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
$globals.DomainService);

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
}, function($ctx1) {$ctx1.fill(self,"addAction:",{aDomainObjectAction:aDomainObjectAction},$globals.DomainService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainObjectAction"],
source: "addAction: aDomainObjectAction\x0a\x0a\x09actions add: aDomainObjectAction ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.DomainService);

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
}, function($ctx1) {$ctx1.fill(self,"id",{arr:arr},$globals.DomainService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09| arr |\x0a\x09arr := link href tokenize: '/'.\x0a\x09^arr last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tokenize:", "href", "last"]
}),
$globals.DomainService);

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
}, function($ctx1) {$ctx1.fill(self,"initialize:",{aLink:aLink},$globals.DomainService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLink"],
source: "initialize: aLink\x0a\x0a\x09actions := OrderedCollection new.\x0a\x09link := aLink.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.DomainService);

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
$globals.DomainService);

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
$globals.DomainService);



$core.addClass('DomainObject', $globals.DomainService, ['properties', 'collections'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DomainObject.comment="DomainObjects are stateful in addition to\x0a\x0a* actions\x0a\x0athey can have\x0a\x0a* properties and\x0a* collections, ie. lists of other DomainObjects";
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
}, function($ctx1) {$ctx1.fill(self,"addCollection:",{aDomainObjectCollection:aDomainObjectCollection},$globals.DomainObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainObjectCollection"],
source: "addCollection: aDomainObjectCollection\x0a\x0a\x09collections add: aDomainObjectCollection ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.DomainObject);

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
}, function($ctx1) {$ctx1.fill(self,"addProperty:",{aDomainObjectProperty:aDomainObjectProperty},$globals.DomainObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainObjectProperty"],
source: "addProperty: aDomainObjectProperty\x0a\x0a\x09properties add: aDomainObjectProperty ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.DomainObject);

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
($globals.DomainObject.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
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
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.DomainObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09properties := OrderedCollection new.\x0a\x09collections := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.DomainObject);



$core.addClass('Invoker', $globals.Object, ['request', 'authentication'], 'Roast');
$core.addMethod(
$core.method({
selector: "get:",
protocol: 'as yet unclassified',
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
var httpBa;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@request"]=$recv($globals.XMLHttpRequest)._new();
$recv(self["@request"])._open_url_asynchronous_($recv(aLink)._method(),$recv(aLink)._href(),false);
httpBa=$recv(self["@authentication"])._encodeBase64();
$recv(self["@request"])._setRequestHeader_basicAuth_("Authorization","Basic ".__comma(httpBa));
$recv(self["@request"])._send_("");
return $recv(self["@request"])._responseText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invoke:",{aLink:aLink,httpBa:httpBa},$globals.Invoker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLink"],
source: "invoke: aLink\x0a\x09\x22invokes a url and answers the response text\x22\x0a\x0a\x09| httpBa |\x0a\x09request := XMLHttpRequest new.\x0a\x09\x22TODO: asynchronous must be set to true in order to have multiple request in parallel and dont have the user waiting\x22\x0a\x09request open: (aLink method) url: (aLink href) asynchronous: false.\x0a\x09httpBa := authentication encodeBase64.\x0a\x09request setRequestHeader: 'Authorization' basicAuth: 'Basic ', httpBa.\x0a\x09request send: ''.\x0a\x09^request responseText.",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
messageSends: ["new", "open:url:asynchronous:", "method", "href", "encodeBase64", "setRequestHeader:basicAuth:", ",", "send:", "responseText"]
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
$globals.Link.comment="* rel type can be one of: self, describedBy, up\x0a* method can be one of: GET, POST, PUT, DELETE\x0a* title is optional";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buildWith:",
protocol: 'fluent',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@rel"]=$recv(aDictionary)._at_ifAbsent_("rel",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
self["@href"]=$recv(aDictionary)._at_ifAbsent_("href",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
self["@method"]=$recv(aDictionary)._at_ifAbsent_("method",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=3;
//>>excludeEnd("ctx");
self["@type"]=$recv(aDictionary)._at_ifAbsent_("type",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=4;
//>>excludeEnd("ctx");
self["@title"]=$recv(aDictionary)._at_ifAbsent_("title",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildWith:",{aDictionary:aDictionary},$globals.Link)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "buildWith: aDictionary\x0a\x0a\x09rel := (aDictionary at: 'rel' ifAbsent: nil).\x0a\x09href := (aDictionary at: 'href' ifAbsent: nil).\x0a\x09method := (aDictionary at: 'method' ifAbsent: nil).\x0a\x09type := (aDictionary at: 'type' ifAbsent: nil).\x0a\x09title := (aDictionary at: 'title' ifAbsent: nil).\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.Link);

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
$8=$recv($globals.RestfulObjectManager)._new();
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
source: "collectValues\x0a\x09| rom |\x0a    (('#myForm1' asJQuery get: 0) checkValidity) ifTrue: [\x0a        formInputs do: [ :each | | recipe name |\x0a            name := each at: 'name'.\x0a            recipe := extractionRecipes at: name\x0a                    ifAbsent: [extractionRecipes at: '_default'].\x0a            (recipe value: each)\x0a                ifNotNil: [ :formValue |\x0a                    formValues at: name put: formValue ]].\x0a        formValues keysAndValuesDo: [ :key :value |\x0a            '#output-list' asJQuery append: '<br>',key,': ',value].\x0a\x09\x09\x0a\x09\x09rom := RestfulObjectManager new \x0a\x09\x09\x09initializeWithUser: (formValues at: 'Username')\x0a\x09\x09\x09password: (formValues at: 'Password').\x0a\x09\x09rom load: (formValues at: 'URL').\x09\x09\x0a    ^false]",
referencedClasses: ["RestfulObjectManager"],
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
$recv($3)._value_("http://localhost:8080/restful/");
$recv($3)._with_("http://localhost:8080/restful/");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"urlOptions:",{html:html},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "urlOptions: html\x0a    html option value: 'http://localhost:9090/restful/'; with: 'http://localhost:9090/restful/'. \x22KNIfe\x22\x0a    html option value: 'http://localhost:8080/restful/'; with: 'http://localhost:8080/restful/'. \x22default port - ToDo App\x22\x0a ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "option", "with:"]
}),
$globals.LoginForm);



$core.addClass('MenuBar', $globals.Widget, ['div'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MenuBar.comment="Groups Menus with MenuItems";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buildMenu:",
protocol: 'example',
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
protocol: 'example',
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
protocol: 'example',
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
$recv(action)._attrAt_put_("href",actionString);
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
source: "buildMenuItem: titleString action: actionString\x0a\x09\x22Constructs a single menu item, usually with an action (url/function).\x22\x0a\x0a\x09| action menuItem |\x0a\x09\x0a\x09action :=  Domite newElement: 'a'.\x0a\x09action attrAt: 'href' put: actionString.\x0a\x09action << titleString.\x0a\x0a\x09menuItem := Domite newElement: 'li'.\x0a\x09menuItem << action.\x0a\x0a\x09^menuItem",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:", "attrAt:put:", "<<"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "buildMenuItems:",
protocol: 'example',
fn: function (actionCollection){
var self=this;
var menu,item1,divider,item2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
menu=self._tag_class_("ul","dropdown-menu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tag:class:"]=1;
//>>excludeEnd("ctx");
item1=self._buildMenuItem_action_("Action1","#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["buildMenuItem:action:"]=1;
//>>excludeEnd("ctx");
$recv(menu).__lt_lt(item1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
divider=self._tag_class_("li","divider");
$recv(menu).__lt_lt(divider);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
item2=self._buildMenuItem_action_("Action2","#");
$recv(menu).__lt_lt(item2);
return menu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildMenuItems:",{actionCollection:actionCollection,menu:menu,item1:item1,divider:divider,item2:item2},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actionCollection"],
source: "buildMenuItems: actionCollection\x0a\x09\x22Constructs a list of menu items.\x22\x0a\x0a\x09| menu item1 divider item2 |\x0a\x09menu := self tag: 'ul' class: 'dropdown-menu'.\x0a\x0a\x09item1 := self buildMenuItem: 'Action1' action: '#'.\x0a\x09menu << item1.\x0a\x09\x0a\x09divider := self tag: 'li' class: 'divider'.\x0a\x09menu << divider.\x0a\x09\x0a\x09item2 := self buildMenuItem: 'Action2' action: '#'.\x0a\x09menu << item2.\x0a\x0a\x09^menu",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tag:class:", "buildMenuItem:action:", "<<"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "domite",
protocol: 'example',
fn: function (){
var self=this;
var navigation,navbar,container,navbarCollapse,nav,dropdown,dropdownMenu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
navigation=$recv($globals.Domite)._at_("#navigation");
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
dropdown=self._buildMenu_("DropDown");
dropdownMenu=self._buildMenuItems_(nil);
$recv(dropdown).__lt_lt(dropdownMenu);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$recv(nav).__lt_lt(dropdown);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
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
}, function($ctx1) {$ctx1.fill(self,"domite",{navigation:navigation,navbar:navbar,container:container,navbarCollapse:navbarCollapse,nav:nav,dropdown:dropdown,dropdownMenu:dropdownMenu},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "domite\x0a\x22MenuBar new domite\x22\x09\x0a\x09| navigation navbar container navbarCollapse nav dropdown dropdownMenu |\x0a\x09navigation := Domite at: '#navigation'.\x0a\x09navigation resetContents.\x0a\x09navbar := self tag: 'div' class: 'navbar navbar-default navbar-static-top'.\x0a\x09container := self tag: 'div' class: 'container'.\x0a\x09navbarCollapse := self tag: 'div' class: 'navbar-collapse collapse'.\x0a\x09nav := self tag: 'ul' class: 'nav navbar-nav'.\x0a\x0a\x09dropdown := self buildMenu: 'DropDown'.\x0a\x09dropdownMenu := self buildMenuItems: nil.\x0a\x09dropdown << dropdownMenu.\x0a\x09\x0a\x09nav << dropdown.\x0a\x09navbarCollapse << nav.\x0a\x09container << navbarCollapse.\x0a\x09container << self buildMenuIndicator.\x0a\x09navbar << container.\x0a\x09navigation << navbar.",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["at:", "resetContents", "tag:class:", "buildMenu:", "buildMenuItems:", "<<", "buildMenuIndicator"]
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "example",
protocol: 'example',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x22\x0a\x09MenuBar new domite\x0a\x22\x09\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MenuBar);

$core.addMethod(
$core.method({
selector: "silk",
protocol: 'example',
fn: function (){
var self=this;
var aSilk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$9,$11,$13,$15,$17,$19,$21,$23,$24,$25,$26,$27,$29,$31,$30,$28,$22,$20,$33,$35,$34,$32,$18,$16,$14,$12,$10,$8,$6,$4,$2;
aSilk="#navigation"._asSilk();
$1=aSilk;
$3="class".__minus_gt("navbar navbar-default navbar-static-top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$5=aSilk;
$7="class".__minus_gt("container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$9=aSilk;
$11="class".__minus_gt("navbar-collapse collapse");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$13=aSilk;
$15="class".__minus_gt("nav navbar-nav");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$17=aSilk;
$19="class".__minus_gt("dropdown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$21=aSilk;
$23="href".__minus_gt("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$24="class".__minus_gt("dropdown-toggle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$25="data-toggle".__minus_gt("dropdown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=8;
//>>excludeEnd("ctx");
$26="aria-haspopup".__minus_gt("true");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=9;
//>>excludeEnd("ctx");
$27="aria-expanded".__minus_gt("false");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=10;
//>>excludeEnd("ctx");
$29=aSilk;
$31="class".__minus_gt("caret");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=11;
//>>excludeEnd("ctx");
$30=[$31];
$28=$recv($29)._B_($30);
$22=[$23,$24,$25,$26,$27,"DropDownMenu",$28];
$20=$recv($21)._A_($22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["A:"]=1;
//>>excludeEnd("ctx");
$33=aSilk;
$35="class".__minus_gt("dropdown-menu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=12;
//>>excludeEnd("ctx");
$34=[$35,$recv(aSilk)._LI_([$recv(aSilk)._A_(["href".__minus_gt("#"),"a1"])])];
$32=$recv($33)._UL_($34);
$18=[$19,$20,$32];
$16=$recv($17)._LI_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["LI:"]=1;
//>>excludeEnd("ctx");
$14=[$15,$16];
$12=$recv($13)._UL_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["UL:"]=1;
//>>excludeEnd("ctx");
$10=[$11,$12];
$8=$recv($9)._DIV_($10);
$6=[$7,$8];
$4=$recv($5)._DIV_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=2;
//>>excludeEnd("ctx");
$2=[$3,$4];
$recv($1)._DIV_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silk",{aSilk:aSilk},$globals.MenuBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silk\x0a\x22MenuBar new silk\x22\x09\x0a\x09| aSilk |\x0a\x09aSilk := '#navigation' asSilk.\x0a\x09aSilk DIV: {\x0a\x09 \x09'class' -> 'navbar navbar-default navbar-static-top'.\x0a\x09\x09 aSilk DIV: {\x0a\x09\x09\x09'class' -> 'container'.\x0a\x09\x09\x09aSilk DIV: {\x0a\x09\x09\x09\x09'class' -> 'navbar-collapse collapse'.\x0a\x09\x09\x09\x09aSilk UL: { \x0a\x09\x09\x09\x09\x09'class' -> 'nav navbar-nav'.\x0a\x09\x09\x09\x09\x09aSilk  LI: {\x0a\x09\x09\x09\x09\x09\x09'class' -> 'dropdown'.\x0a\x09\x09\x09\x09\x09\x09aSilk A: {\x0a\x09\x09\x09\x09\x09\x09\x09'href' -> '#'.\x0a\x09\x09\x09\x09\x09\x09\x09'class' -> 'dropdown-toggle'.\x0a\x09\x09\x09\x09\x09\x09\x09'data-toggle' -> 'dropdown'.\x0a\x09\x09\x09\x09\x09\x09\x09'aria-haspopup' -> 'true'.\x0a\x09\x09\x09\x09\x09\x09\x09'aria-expanded' -> 'false'.\x0a\x09\x09\x09\x09\x09\x09\x09'DropDownMenu'.\x0a\x09\x09\x09\x09\x09\x09\x09aSilk B: {\x0a\x09\x09\x09\x09\x09\x09\x09\x09'class' -> 'caret'\x0a\x09\x09\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09\x09\x09aSilk UL: {\x0a\x09\x09\x09\x09\x09\x09\x09'class' -> 'dropdown-menu'.\x0a\x09\x09\x09\x09\x09\x09\x09aSilk LI: {\x0a\x09\x09\x09\x09\x09\x09\x09\x09aSilk A: {\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09'href' -> '#'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09'a1'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09\x09\x09}.\x09\x0a\x09\x09\x09\x09\x09}.\x0a\x09\x09\x09\x09}.\x09\x0a\x09\x09\x09}.\x0a\x09\x09}.\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSilk", "DIV:", "->", "UL:", "LI:", "A:", "B:"]
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
protocol: 'convenience',
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
$recv(a)._attrAt_put_("href",actionString);
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
source: "tag: tagString \x0a\x09\x09href: actionString \x0a\x09\x09title: titleString\x0a\x09\x0a\x09| domite a |\x0a\x09domite := Domite newElement: tagString.\x0a\x09a := Domite newElement: 'a'.\x0a\x09a attrAt: 'href' put: actionString.\x0a\x09a << titleString.\x0a\x09domite << a.\x0a\x09^domite",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: ["newElement:", "attrAt:put:", "<<"]
}),
$globals.MenuBar);


$core.addMethod(
$core.method({
selector: "tryExample",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryExample",{},$globals.MenuBar.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22MenuBar tryExample\x22\x0a\x09\x09self new appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.MenuBar.klass);


$core.addClass('RestfulObjectManager', $globals.Object, ['services', 'objects', 'authentication', 'invoker', 'links'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RestfulObjectManager.comment="Holds services, objects, etc. and eventually updates them.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buildActions:for:",
protocol: 'loading',
fn: function (aDictionary,service){
var self=this;
var link,json,mDict,mLinks,act,link2;
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
$4=$recv($globals.Link)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["new"]=2;
//>>excludeEnd("ctx");
link2=$recv($4)._buildWith_(m);
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
}, function($ctx1) {$ctx1.fill(self,"buildActions:for:",{aDictionary:aDictionary,service:service,link:link,json:json,mDict:mDict,mLinks:mLinks,act:act,link2:link2},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "service"],
source: "buildActions: aDictionary for: service\x0a\x0a\x09| link json mDict mLinks act link2 |\x0a\x09(aDictionary at: 'links') do: [: l | \x0a\x09\x09link := Link new buildWith: l.\x0a\x09\x09(link rel = 'describedby') ifTrue: [\x0a\x09\x09\x09json := invoker invoke: link.\x0a\x09\x09\x09mDict := self toStObjects: json.\x0a\x09\x09\x09mLinks := mDict at: 'members'.\x0a\x09\x09\x09mLinks do: [: m |\x0a\x09\x09\x09\x09link2 := Link new buildWith: m.\x0a\x09\x09\x09\x09act := DomainObjectAction new initialize: link2.\x0a\x09\x09\x09\x09service addAction: act.\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
referencedClasses: ["Link", "DomainObjectAction"],
//>>excludeEnd("ide");
messageSends: ["do:", "at:", "buildWith:", "new", "ifTrue:", "=", "rel", "invoke:", "toStObjects:", "initialize:", "addAction:"]
}),
$globals.RestfulObjectManager);

$core.addMethod(
$core.method({
selector: "buildLinks:",
protocol: 'loading',
fn: function (aDictionary){
var self=this;
var link;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aDictionary)._at_("links"))._do_((function(l){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
link=$recv($recv($globals.Link)._new())._buildWith_(l);
link;
return $recv(self["@links"])._add_(link);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildLinks:",{aDictionary:aDictionary,link:link},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "buildLinks: aDictionary\x0a\x0a\x09| link |\x0a\x09(aDictionary at: 'links') do: [: l | \x0a\x09\x09link := Link new buildWith: l.\x0a\x09\x09links add: link].",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
messageSends: ["do:", "at:", "buildWith:", "new", "add:"]
}),
$globals.RestfulObjectManager);

$core.addMethod(
$core.method({
selector: "buildServices:",
protocol: 'loading',
fn: function (aDictionary){
var self=this;
var svc,link,json,dict,acts;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(aDictionary)._at_("value"))._do_((function(s){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.Link)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
link=$recv($1)._buildWith_(s);
link;
svc=$recv($recv($globals.DomainService)._new())._initialize_(link);
svc;
json=$recv(self["@invoker"])._invoke_($recv(svc)._link());
json;
dict=self._toStObjects_(json);
dict;
self._buildActions_for_(dict,svc);
return $recv(self["@services"])._add_(svc);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildServices:",{aDictionary:aDictionary,svc:svc,link:link,json:json,dict:dict,acts:acts},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "buildServices: aDictionary\x0a\x0a\x09| svc link json dict acts |\x0a\x09(aDictionary at: 'value') do: [: s | \x0a\x09\x09link := Link new buildWith: s.\x0a\x09\x09svc := DomainService new initialize: link.\x0a\x09\x09json := invoker invoke: svc link.\x0a\x09\x09dict := self toStObjects: json.\x0a\x09\x09self buildActions: dict for: svc.\x0a\x09\x09services add: svc].",
referencedClasses: ["Link", "DomainService"],
//>>excludeEnd("ide");
messageSends: ["do:", "at:", "buildWith:", "new", "initialize:", "invoke:", "link", "toStObjects:", "buildActions:for:", "add:"]
}),
$globals.RestfulObjectManager);

$core.addMethod(
$core.method({
selector: "example",
protocol: 'testing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09\x22Select the comment below and press 'DoIt'\x22\x0a\x0a\x22\x0a\x09| rom url |\x0a\x09rom := RestfulObjectManager new \x0a\x09\x09initializeWithUser: 'sven' \x0a\x09\x09password: 'pass'.\x0a\x09url := 'http://localhost:9090/restful/'.\x0a\x09rom load: url. \x0a\x09rom inspect.\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RestfulObjectManager);

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
}, function($ctx1) {$ctx1.fill(self,"findServiceLink",{},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "findServiceLink\x0a\x0a\x09links do: [: l |\x0a\x09\x09(l rel includesSubString: 'service') \x0a\x09\x09\x09ifTrue: [^ l]\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "includesSubString:", "rel"]
}),
$globals.RestfulObjectManager);

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
}, function($ctx1) {$ctx1.fill(self,"initializeWithUser:password:",{username:username,password:password},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["username", "password"],
source: "initializeWithUser: username password:password\x0a\x09\x0a\x09authentication := Authentication new user: username password: password.\x0a\x09invoker := Invoker new.\x0a\x09invoker setAuthentication: authentication.\x0a\x0a\x09services := OrderedCollection new.\x0a\x09objects := OrderedCollection new.\x0a\x09links := OrderedCollection new.",
referencedClasses: ["Authentication", "Invoker", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["user:password:", "new", "setAuthentication:"]
}),
$globals.RestfulObjectManager);

$core.addMethod(
$core.method({
selector: "load:",
protocol: 'loading',
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
self._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{rootUrl:rootUrl,rLink:rLink,jsonString:jsonString,dict:dict,sLink:sLink,js2String:js2String},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rootUrl"],
source: "load: rootUrl \x0a\x09\x22Entry point for accessing the server.\x22\x0a\x0a\x09| rLink jsonString dict sLink js2String |\x0a\x09rLink := Link new withHref: rootUrl; withMethod: 'GET'.\x0a\x09jsonString := invoker invoke: rLink.\x09\x0a\x09dict := self toStObjects: jsonString.\x0a\x09self buildLinks: dict.\x0a\x09\x0a\x09sLink := self findServiceLink.\x0a\x09js2String := invoker invoke: sLink.\x0a\x09dict := self toStObjects: js2String.\x0a\x09self buildServices: dict.\x0a\x09\x0a\x09self inspect.",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
messageSends: ["withHref:", "new", "withMethod:", "invoke:", "toStObjects:", "buildLinks:", "findServiceLink", "buildServices:", "inspect"]
}),
$globals.RestfulObjectManager);

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
stObject=$recv($recv($globals.SmalltalkImage)._current())._readJSObject_(jsObject);
return stObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toStObjects:",{jsonString:jsonString,jsObject:jsObject,stObject:stObject},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonString"],
source: "toStObjects: jsonString\x0a\x0a\x09| jsObject stObject|\x0a\x09jsObject := JSON parse: jsonString.\x0a\x09stObject := SmalltalkImage current readJSObject: jsObject.\x0a\x09^stObject",
referencedClasses: ["JSON", "SmalltalkImage"],
//>>excludeEnd("ide");
messageSends: ["parse:", "readJSObject:", "current"]
}),
$globals.RestfulObjectManager);



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

});
