Smalltalk createPackage: 'Roast-Tests'!
TestCase subclass: #ROManagerTest
	instanceVariableNames: ''
	package: 'Roast-Tests'!

!ROManagerTest methodsFor: 'fixtures'!

singleServiceResponse
	^ '{

    "links": [
        {
            "rel": "self",
            "href": "http://localhost:9090/restful/services/Applications",
            "method": "GET",
            "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/object\"",
            "title": "Applications"
        },
        {
            "rel": "describedby",
            "href": "http://localhost:9090/restful/domain-types/ife.dep.Applications",
            "method": "GET",
            "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/domain-type\""
        },
        {
            "rel": "up",
            "href": "http://localhost:9090/restful/services",
            "method": "GET",
            "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/list\""
        }
    ],
    "extensions": {
        "oid": "ife.dep.Applications:1",
        "isService": true,
        "isPersistent": true
    },
    "title": "Applications",
    "serviceId": "Applications",
    "members": {
        "listAll": {
            "id": "listAll",
            "memberType": "action",
            "links": [
                {
                    "rel": "urn:org.restfulobjects:rels/details;action=\"listAll\"",
                    "href": "http://localhost:9090/restful/services/Applications/actions/listAll",
                    "method": "GET",
                    "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/object-action\""
                }
            ]
        },
        "listVersioned": {
            "id": "listVersioned",
            "memberType": "action",
            "links": [
                {
                    "rel": "urn:org.restfulobjects:rels/details;action=\"listVersioned\"",
                    "href": "http://localhost:9090/restful/services/Applications/actions/listVersioned",
                    "method": "GET",
                    "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/object-action\""
                }
            ]
        },
        "findByName": {
            "id": "findByName",
            "memberType": "action",
            "links": [
                {
                    "rel": "urn:org.restfulobjects:rels/details;action=\"findByName\"",
                    "href": "http://localhost:9090/restful/services/Applications/actions/findByName",
                    "method": "GET",
                    "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/object-action\""
                }
            ]
        }
    }

}'
!

singleServiceResponseFaulty

	"ISIS-1572: members are sometimes empty"
	^ '{

    "links": [
        {
            "rel": "self",
            "href": "http://localhost:9090/restful/services/Applications",
            "method": "GET",
            "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/object\"",
            "title": "Applications"
        },
        {
            "rel": "describedby",
            "href": "http://localhost:9090/restful/domain-types/ife.dep.Applications",
            "method": "GET",
            "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/domain-type\""
        },
        {
            "rel": "up",
            "href": "http://localhost:9090/restful/services",
            "method": "GET",
            "type": "application/json;profile=\"urn:org.restfulobjects:repr-types/list\""
        }
    ],
    "extensions": {
        "oid": "ife.dep.Applications:1",
        "isService": true,
        "isPersistent": true
    },
    "title": "Applications",
    "serviceId": "Applications",
    "members": { }

}'
! !

!ROManagerTest methodsFor: 'tests'!

testSingleServiceResponse
	
	| serviceDict rom svc actions | 
	rom := ROManager current.
	serviceDict := rom toStObjects: self singleServiceResponse.
	svc := ROService new.
	actions := rom buildActions: serviceDict.
	self assert: actions size equals: 3.
	self assert: actions first title equals: 'listAll'.
	self assert: actions first link href equals: 'http://localhost:9090/restful/services/Applications/actions/listAll'.	
	self assert: actions first link method equals: 'GET'.
! !

TestCase subclass: #RoastTest
	instanceVariableNames: ''
	package: 'Roast-Tests'!

