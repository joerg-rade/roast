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



$core.addClass('DomainObjectAction', $globals.Object, ['description'], 'Roast');


$core.addClass('DomainObjectCollection', $globals.Object, ['description'], 'Roast');


$core.addClass('DomainObjectProperty', $globals.Object, ['description'], 'Roast');


$core.addClass('DomainService', $globals.Object, ['actions'], 'Roast');
$core.addMethod(
$core.method({
selector: "addAction:",
protocol: 'as yet unclassified',
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
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@actions"]=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.DomainService)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09actions := OrderedCollection new.",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
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


$core.addClass('LoginForm', $globals.Widget, ['formValues', 'formInputs', 'inputFactories', 'extractionRecipes'], 'Roast');
$core.addMethod(
$core.method({
selector: "collectValues",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$7,$6,$8,$receiver;
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
$8=$recv(self["@formValues"])._at_("Username");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
self._verifyUser_password_($8,$recv(self["@formValues"])._at_("Password"));
return false;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collectValues",{},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collectValues\x0a    (('#myForm1' asJQuery get: 0) checkValidity) ifTrue: [\x0a        formInputs do: [ :each | | recipe name |\x0a            name := each at: 'name'.\x0a            recipe := extractionRecipes at: name\x0a                    ifAbsent: [extractionRecipes at: '_default'].\x0a            (recipe value: each)\x0a                ifNotNil: [ :formValue |\x0a                    formValues at: name put: formValue ]].\x0a        formValues keysAndValuesDo: [ :key :value |\x0a            '#output-list' asJQuery append: '<br>',key,': ',value].\x0a\x09self verifyUser: (formValues at: 'Username')\x0a     \x09password: (formValues at: 'Password').\x0a\x09\x09\x0a    ^false]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "checkValidity", "get:", "asJQuery", "do:", "at:", "at:ifAbsent:", "ifNotNil:", "value:", "at:put:", "keysAndValuesDo:", "append:", ",", "verifyUser:password:"]
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
var $1,$2,$3,$4,$5,$6,$7,$8;
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
self["@extractionRecipes"]=$globals.HashedCollection._newFromPairs_(["RememberMe",(function(input){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8=$recv(input)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
return $recv($8)._prop_("checked");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({input:input},$ctx1,6)});
//>>excludeEnd("ctx");
}),"_default",(function(input){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(input)._asJQuery())._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({input:input},$ctx1,7)});
//>>excludeEnd("ctx");
})]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    formValues := Dictionary new.\x0a    formInputs := Array new.\x0a    inputFactories := #{\x0a        'Username' -> [ :html :name :type |\x0a            html input name: name;\x0a                       type: type;\x0a                       at: 'required' put: 'required';\x0a                       yourself].\x0a        'Password' -> [ :html :name :type |\x0a            html input name: name;\x0a                       type: type;\x0a                       at: 'required' put: 'required';\x0a                       yourself].\x0a        'URL' -> [ :html :name :type |\x0a            html select name: name;\x0a                        with: [self urlOptions: html];\x0a                        yourself].\x0a\x09\x09'_default' -> [ :html :name :type |\x0a            html input name: name;\x0a                       type: type;\x0a                       yourself]   \x0a\x09}.\x0a    extractionRecipes := #{\x0a        'RememberMe' -> [ :input |\x0a            input asJQuery prop: 'checked'].\x0a        '_default' -> [ :input |\x0a            input asJQuery val]\x0a        }",
referencedClasses: ["Dictionary", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "name:", "input", "type:", "at:put:", "yourself", "select", "with:", "urlOptions:", "prop:", "asJQuery", "val"]
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
return $recv($globals.HashedCollection._newFromPairs_(["URL",["URL:","string"],"Username",["Username:","email"],"Password",["Password:","password"],"RememberMe",["Remember me","checkbox"]]))._keysAndValuesDo_((function(key,value){
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
source: "renderOn: html\x0a\x0a\x09formInputs removeAll.\x0a\x09\x22Each table row is described by 'name -> {label. type}'.\x22\x0a    html form id: 'myForm1'; with: [\x0a        html table with: [\x0a            #{'URL'->{'URL:'. 'string'}.\x0a\x09\x09\x09  'Username'->{'Username:'. 'email'}.\x0a              'Password'->{'Password:'. 'password'}.\x0a              'RememberMe'->{'Remember me'. 'checkbox'}}\x0a            keysAndValuesDo: [ :key :value |\x0a                self renderInput: key\x0a                     label: value first\x0a                     type: value second\x0a                     on: html ]].\x0a        html p: [\x0a            html input\x0a                type: 'submit';\x0a                value: 'Collect Input Field Values';\x0a                onClick: [ self collectValues ]]]",
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
var $1;
$1=$recv(html)._option();
$recv($1)._value_("http://localhost:9090/restful");
$recv($1)._with_("http://localhost:9090/restful");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"urlOptions:",{html:html},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "urlOptions: html\x0a    html option value: 'http://localhost:9090/restful'; with: 'http://localhost:9090/restful'. \x22KNIfe\x22\x0a ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "option", "with:"]
}),
$globals.LoginForm);

$core.addMethod(
$core.method({
selector: "verifyUser:password:",
protocol: 'as yet unclassified',
fn: function (user,pwd){
var self=this;
var auth,req,txt;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Authentication)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
auth=$recv($1)._user_password_(user,pwd);
req=$recv($globals.Invoker)._new();
$recv(req)._setAuthentication_(auth);
txt=$recv(req)._get_("http://localhost:9090/restful/");
$recv($globals.Transcript)._show_(txt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"verifyUser:password:",{user:user,pwd:pwd,auth:auth,req:req,txt:txt},$globals.LoginForm)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["user", "pwd"],
source: "verifyUser: user password: pwd\x0a\x09\x22Entry point for accessing the server. \x0a\x09Copy&paste into workspace and evaluate.\x22\x0a\x0a\x09| auth req txt|\x0a\x09auth := Authentication new user: user password: pwd.\x0a\x09req := Invoker new.\x0a\x09req setAuthentication: auth.\x0a\x09txt := req get: 'http://localhost:9090/restful/'.\x0a\x09Transcript show: txt.",
referencedClasses: ["Authentication", "Invoker", "Transcript"],
//>>excludeEnd("ide");
messageSends: ["user:password:", "new", "setAuthentication:", "get:", "show:"]
}),
$globals.LoginForm);



$core.addClass('MenuBar', $globals.Object, [], 'Roast');


$core.addClass('RestfulObjectManager', $globals.Object, ['services', 'objects'], 'Roast');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RestfulObjectManager.comment="Holds services, objects, etc. and eventually updates them.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addService:",
protocol: 'as yet unclassified',
fn: function (aDomainService){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@services"])._add_(aDomainService);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addService:",{aDomainService:aDomainService},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomainService"],
source: "addService: aDomainService\x0a\x09\x0a\x09services add: aDomainService",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.RestfulObjectManager);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@services"]=$recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@objects"]=$recv($globals.OrredCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.RestfulObjectManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x0a\x09services := OrderedCollection new.\x0a\x09objects := OrredCollection new.",
referencedClasses: ["OrderedCollection", "OrredCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.RestfulObjectManager);



$core.addClass('RestfulObjectParser', $globals.Object, [], 'Roast');


$core.addClass('Roast', $globals.Object, [], 'Roast');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#client-main"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$recv($recv($globals.LoginForm)._new())._appendToJQuery_("#client-main"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Roast)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#client-main' asJQuery empty. \x22make sure it's empty\x22\x0a\x09LoginForm new appendToJQuery: '#client-main' asJQuery.\x0a\x22\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ]\x0a\x09\x22",
referencedClasses: ["LoginForm"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "appendToJQuery:", "new"]
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


$core.addClass('Table', $globals.Object, [], 'Roast');

});
