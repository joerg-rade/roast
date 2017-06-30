define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Roast-Tests');
$core.packages["Roast-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Roast-Tests"].transport = {"type":"amd","amdNamespace":"amber-roast"};

$core.addClass('ROManagerTest', $globals.TestCase, [], 'Roast-Tests');
$core.addMethod(
$core.method({
selector: "singleServiceResponse",
protocol: 'fixtures',
fn: function (){
var self=this;
return "{\x0a\x0a    \x22links\x22: [\x0a        {\x0a            \x22rel\x22: \x22self\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services/Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object\x5c\x22\x22,\x0a            \x22title\x22: \x22Applications\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22describedby\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/domain-types/ife.dep.Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/domain-type\x5c\x22\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22up\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/list\x5c\x22\x22\x0a        }\x0a    ],\x0a    \x22extensions\x22: {\x0a        \x22oid\x22: \x22ife.dep.Applications:1\x22,\x0a        \x22isService\x22: true,\x0a        \x22isPersistent\x22: true\x0a    },\x0a    \x22title\x22: \x22Applications\x22,\x0a    \x22serviceId\x22: \x22Applications\x22,\x0a    \x22members\x22: {\x0a        \x22listAll\x22: {\x0a            \x22id\x22: \x22listAll\x22,\x0a            \x22memberType\x22: \x22action\x22,\x0a            \x22links\x22: [\x0a                {\x0a                    \x22rel\x22: \x22urn:org.restfulobjects:rels/details;action=\x5c\x22listAll\x5c\x22\x22,\x0a                    \x22href\x22: \x22http://localhost:9090/restful/services/Applications/actions/listAll\x22,\x0a                    \x22method\x22: \x22GET\x22,\x0a                    \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object-action\x5c\x22\x22\x0a                }\x0a            ]\x0a        },\x0a        \x22listVersioned\x22: {\x0a            \x22id\x22: \x22listVersioned\x22,\x0a            \x22memberType\x22: \x22action\x22,\x0a            \x22links\x22: [\x0a                {\x0a                    \x22rel\x22: \x22urn:org.restfulobjects:rels/details;action=\x5c\x22listVersioned\x5c\x22\x22,\x0a                    \x22href\x22: \x22http://localhost:9090/restful/services/Applications/actions/listVersioned\x22,\x0a                    \x22method\x22: \x22GET\x22,\x0a                    \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object-action\x5c\x22\x22\x0a                }\x0a            ]\x0a        },\x0a        \x22findByName\x22: {\x0a            \x22id\x22: \x22findByName\x22,\x0a            \x22memberType\x22: \x22action\x22,\x0a            \x22links\x22: [\x0a                {\x0a                    \x22rel\x22: \x22urn:org.restfulobjects:rels/details;action=\x5c\x22findByName\x5c\x22\x22,\x0a                    \x22href\x22: \x22http://localhost:9090/restful/services/Applications/actions/findByName\x22,\x0a                    \x22method\x22: \x22GET\x22,\x0a                    \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object-action\x5c\x22\x22\x0a                }\x0a            ]\x0a        }\x0a    }\x0a\x0a}";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "singleServiceResponse\x0a\x09^ '{\x0a\x0a    \x22links\x22: [\x0a        {\x0a            \x22rel\x22: \x22self\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services/Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object\x5c\x22\x22,\x0a            \x22title\x22: \x22Applications\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22describedby\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/domain-types/ife.dep.Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/domain-type\x5c\x22\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22up\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/list\x5c\x22\x22\x0a        }\x0a    ],\x0a    \x22extensions\x22: {\x0a        \x22oid\x22: \x22ife.dep.Applications:1\x22,\x0a        \x22isService\x22: true,\x0a        \x22isPersistent\x22: true\x0a    },\x0a    \x22title\x22: \x22Applications\x22,\x0a    \x22serviceId\x22: \x22Applications\x22,\x0a    \x22members\x22: {\x0a        \x22listAll\x22: {\x0a            \x22id\x22: \x22listAll\x22,\x0a            \x22memberType\x22: \x22action\x22,\x0a            \x22links\x22: [\x0a                {\x0a                    \x22rel\x22: \x22urn:org.restfulobjects:rels/details;action=\x5c\x22listAll\x5c\x22\x22,\x0a                    \x22href\x22: \x22http://localhost:9090/restful/services/Applications/actions/listAll\x22,\x0a                    \x22method\x22: \x22GET\x22,\x0a                    \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object-action\x5c\x22\x22\x0a                }\x0a            ]\x0a        },\x0a        \x22listVersioned\x22: {\x0a            \x22id\x22: \x22listVersioned\x22,\x0a            \x22memberType\x22: \x22action\x22,\x0a            \x22links\x22: [\x0a                {\x0a                    \x22rel\x22: \x22urn:org.restfulobjects:rels/details;action=\x5c\x22listVersioned\x5c\x22\x22,\x0a                    \x22href\x22: \x22http://localhost:9090/restful/services/Applications/actions/listVersioned\x22,\x0a                    \x22method\x22: \x22GET\x22,\x0a                    \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object-action\x5c\x22\x22\x0a                }\x0a            ]\x0a        },\x0a        \x22findByName\x22: {\x0a            \x22id\x22: \x22findByName\x22,\x0a            \x22memberType\x22: \x22action\x22,\x0a            \x22links\x22: [\x0a                {\x0a                    \x22rel\x22: \x22urn:org.restfulobjects:rels/details;action=\x5c\x22findByName\x5c\x22\x22,\x0a                    \x22href\x22: \x22http://localhost:9090/restful/services/Applications/actions/findByName\x22,\x0a                    \x22method\x22: \x22GET\x22,\x0a                    \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object-action\x5c\x22\x22\x0a                }\x0a            ]\x0a        }\x0a    }\x0a\x0a}'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROManagerTest);

$core.addMethod(
$core.method({
selector: "singleServiceResponseFaulty",
protocol: 'fixtures',
fn: function (){
var self=this;
return "{\x0a\x0a    \x22links\x22: [\x0a        {\x0a            \x22rel\x22: \x22self\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services/Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object\x5c\x22\x22,\x0a            \x22title\x22: \x22Applications\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22describedby\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/domain-types/ife.dep.Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/domain-type\x5c\x22\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22up\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/list\x5c\x22\x22\x0a        }\x0a    ],\x0a    \x22extensions\x22: {\x0a        \x22oid\x22: \x22ife.dep.Applications:1\x22,\x0a        \x22isService\x22: true,\x0a        \x22isPersistent\x22: true\x0a    },\x0a    \x22title\x22: \x22Applications\x22,\x0a    \x22serviceId\x22: \x22Applications\x22,\x0a    \x22members\x22: { }\x0a\x0a}";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "singleServiceResponseFaulty\x0a\x0a\x09\x22ISIS-1572: members are sometimes empty\x22\x0a\x09^ '{\x0a\x0a    \x22links\x22: [\x0a        {\x0a            \x22rel\x22: \x22self\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services/Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/object\x5c\x22\x22,\x0a            \x22title\x22: \x22Applications\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22describedby\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/domain-types/ife.dep.Applications\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/domain-type\x5c\x22\x22\x0a        },\x0a        {\x0a            \x22rel\x22: \x22up\x22,\x0a            \x22href\x22: \x22http://localhost:9090/restful/services\x22,\x0a            \x22method\x22: \x22GET\x22,\x0a            \x22type\x22: \x22application/json;profile=\x5c\x22urn:org.restfulobjects:repr-types/list\x5c\x22\x22\x0a        }\x0a    ],\x0a    \x22extensions\x22: {\x0a        \x22oid\x22: \x22ife.dep.Applications:1\x22,\x0a        \x22isService\x22: true,\x0a        \x22isPersistent\x22: true\x0a    },\x0a    \x22title\x22: \x22Applications\x22,\x0a    \x22serviceId\x22: \x22Applications\x22,\x0a    \x22members\x22: { }\x0a\x0a}'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ROManagerTest);

$core.addMethod(
$core.method({
selector: "testSingleServiceResponse",
protocol: 'tests',
fn: function (){
var self=this;
var serviceDict,rom,svc,actions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3;
rom=$recv($globals.ROManager)._current();
serviceDict=$recv(rom)._toStObjects_(self._singleServiceResponse());
svc=$recv($globals.ROService)._new();
actions=$recv(rom)._buildActions_(serviceDict);
self._assert_equals_($recv(actions)._size(),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(actions)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._title();
self._assert_equals_($1,"listAll");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$5=$recv(actions)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._link();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["link"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._href();
self._assert_equals_($3,"http://localhost:9090/restful/services/Applications/actions/listAll");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv($recv(actions)._first())._link())._method(),"GET");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSingleServiceResponse",{serviceDict:serviceDict,rom:rom,svc:svc,actions:actions},$globals.ROManagerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSingleServiceResponse\x0a\x09\x0a\x09| serviceDict rom svc actions | \x0a\x09rom := ROManager current.\x0a\x09serviceDict := rom toStObjects: self singleServiceResponse.\x0a\x09svc := ROService new.\x0a\x09actions := rom buildActions: serviceDict.\x0a\x09self assert: actions size equals: 3.\x0a\x09self assert: actions first title equals: 'listAll'.\x0a\x09self assert: actions first link href equals: 'http://localhost:9090/restful/services/Applications/actions/listAll'.\x09\x0a\x09self assert: actions first link method equals: 'GET'.",
referencedClasses: ["ROManager", "ROService"],
//>>excludeEnd("ide");
messageSends: ["current", "toStObjects:", "singleServiceResponse", "new", "buildActions:", "assert:equals:", "size", "title", "first", "href", "link", "method"]
}),
$globals.ROManagerTest);



$core.addClass('RoastTest', $globals.TestCase, [], 'Roast-Tests');

});
