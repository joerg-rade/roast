Smalltalk createPackage: 'Roast'!
(Smalltalk packageAt: 'Roast') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'jsgrid'. 'silk/Silk'}!
Object subclass: #Authentication
	instanceVariableNames: 'username password'
	package: 'Roast'!

!Authentication methodsFor: 'as yet unclassified'!

encodeBase64
	"answers user and pass as base64 encoded string"
	
	| s answer |
	s := username, ':', password. 
	"btoa is a global JS function"
	answer := btoa value: s.
	^answer
!

user: uString password: pString
	"initializes instance variables"

	username := uString.
	password := pString.
	^self
! !

Object subclass: #DomainObjectAction
	instanceVariableNames: 'description link title'
	package: 'Roast'!

!DomainObjectAction methodsFor: 'accessing'!

link

	^link
!

title

	^title
!

toString

	^title, ' (link: ' , link toString , ')'
! !

!DomainObjectAction methodsFor: 'as yet unclassified'!

initialize: aLink

	link := aLink.
	title := (link href tokenize: '/') last.
	^self
! !

Object subclass: #DomainObjectCollection
	instanceVariableNames: 'description'
	package: 'Roast'!

Object subclass: #DomainObjectProperty
	instanceVariableNames: 'description'
	package: 'Roast'!

Object subclass: #DomainService
	instanceVariableNames: 'actions link title'
	package: 'Roast'!

!DomainService methodsFor: 'accessing'!

actions

	^actions
!

id

	| arr |
	arr := link href tokenize: '/'.
	^arr last
!

link

	^link
!

title

	^title
! !

!DomainService methodsFor: 'initialize'!

initialize: aLink

	actions := OrderedCollection new.
	link := aLink.
! !

!DomainService methodsFor: 'private'!

addAction: aDomainObjectAction

	actions add: aDomainObjectAction
! !

DomainService subclass: #DomainObject
	instanceVariableNames: 'properties collections'
	package: 'Roast'!
!DomainObject commentStamp!
DomainObjects are stateful in addition to

* actions

they can have

* properties and
* collections, ie. lists of other DomainObjects!

!DomainObject methodsFor: 'as yet unclassified'!

addCollection: aDomainObjectCollection

	collections add: aDomainObjectCollection
!

addProperty: aDomainObjectProperty

	properties add: aDomainObjectProperty
!

initialize

	super initialize.
	properties := OrderedCollection new.
	collections := OrderedCollection new.
! !

Object subclass: #Invoker
	instanceVariableNames: 'request authentication'
	package: 'Roast'!

!Invoker methodsFor: 'as yet unclassified'!

invoke: aLink
	"invokes a url and answers the response text"

	| httpBa |
	request := XMLHttpRequest new.
"TODO: asynchronous must be set to true in order to have multiple request in parallel and dont have the user waiting"
	request open: (aLink method) url: (aLink href) asynchronous: false.
	httpBa := authentication encodeBase64.
	request setRequestHeader: 'Authorization' basicAuth: 'Basic ', httpBa.
	request send: ''.
	^request responseText.
!

setAuthentication: anAuthentication
	"set instance variable"

	authentication := anAuthentication
! !

!Invoker methodsFor: 'deprecated'!

get: urlString
	"invokes a url and answers the response text"

	| httpBa |
	request := XMLHttpRequest new.
	"TODO: asynchronous must be set to true in order to have multiple request in parallel and dont have the user waiting"
	request open: 'GET' url: urlString asynchronous: false.
	httpBa := authentication encodeBase64.
	request setRequestHeader: 'Authorization' basicAuth: 'Basic ', httpBa.
	request send: ''.
	^request responseText.
! !

Object subclass: #Link
	instanceVariableNames: 'rel href method type title'
	package: 'Roast'!
!Link commentStamp!
* rel type can be one of: self, describedBy, up
* href contains the RO operation (http link)
* method can be one of: GET, POST, PUT, DELETE
* type is the kind of object(s) returned
* title is optional!

!Link methodsFor: 'accessing'!

href
	
	^href
!

method
	
	^method
!

rel
	
	^rel
!

title
	
	^title
!

type
	
	^type
! !

!Link methodsFor: 'fluent'!

buildWith: aDictionary

	rel := (aDictionary at: 'rel' ifAbsent: nil).
	href := (aDictionary at: 'href' ifAbsent: nil).
	method := (aDictionary at: 'method' ifAbsent: nil).
	type := (aDictionary at: 'type' ifAbsent: nil).
	title := (aDictionary at: 'title' ifAbsent: nil).
	^self
!

toString

	| s nl |
	nl := String crlf.
	s :='[rel: ', self rel , nl,
	'href: ', self href, nl,
	'method: ', self method, nl,
	'type: ', self type, nl,
	'title: ', self title, nl,
	']', nl.
	^s
!

withHref: aString
	
	href := aString.
	^self
!

withMethod: aString
	
	method := aString.
	^self
! !

Widget subclass: #Login
	instanceVariableNames: ''
	package: 'Roast'!

!Login methodsFor: 'as yet unclassified'!

passwordRow
    ^Silk TR: {
        Silk TD: 'Password:'.
        Silk TD: {Silk INPUT: {'name'->'password'.
                               'type'->'password'.
                               'required'->'required'}}}
!

renderOn: html
    '#client-main' asSilk
  FORM: {
    'id' -> 'myForm1'.
    Silk TABLE: {
      self urlRow.
      self usernameRow.
      self passwordRow.
      self submitRow}}.
!

submitRow
    ^Silk TR: {
        Silk TD: {(Silk INPUT: {'type'->'submit'. 'value'->'Okay'})
                        on: #click
                        bind: [:e | self doSubmit: e] }}
!

urlOptions: html
    html option value: 'http://localhost:9090/restful/'; with: 'http://localhost:9090/restful/'. "KNIfe"
    html option value: 'http://localhost:8080/restful/'; with: 'http://localhost:8080/restful/'. "default port - ToDo App"
!

urlRow
    ^Silk TR: {
        Silk TD: 'URL:'.
        Silk TD: {Silk SELECT: {'name'->'url'.
                                self urlOptions}}}.
!

usernameRow
    ^Silk TR: {
        Silk TD: 'Username:'.
        Silk TD: {Silk INPUT: {'name'->'name'.
                               'required'->'required'}}}
! !

Widget subclass: #LoginForm
	instanceVariableNames: 'formValues formInputs inputFactories extractionRecipes'
	package: 'Roast'!

!LoginForm methodsFor: 'as yet unclassified'!

collectValues
	| rom |
    (('#myForm1' asJQuery get: 0) checkValidity) ifTrue: [
        formInputs do: [ :each | | recipe name |
            name := each at: 'name'.
            recipe := extractionRecipes at: name
                    ifAbsent: [extractionRecipes at: '_default'].
            (recipe value: each)
                ifNotNil: [ :formValue |
                    formValues at: name put: formValue ]].
        formValues keysAndValuesDo: [ :key :value |
            '#output-list' asJQuery append: '<br>',key,': ',value].
		
		rom := RestfulObjectManager new 
			initializeWithUser: (formValues at: 'Username')
			password: (formValues at: 'Password').
		rom load: (formValues at: 'URL').		
    ^false]
!

initialize
    formValues := Dictionary new.
    formInputs := Array new.
    inputFactories := #{
        'Username' -> [ :html :name :type |
            html input name: name;
                       type: type;
                       at: 'required' put: 'required';
                       yourself].
        'Password' -> [ :html :name :type |
            html input name: name;
                       type: type;
                       at: 'required' put: 'required';
                       yourself].
        'URL' -> [ :html :name :type |
            html select name: name;
                        with: [self urlOptions: html];
                        yourself].
		'_default' -> [ :html :name :type |
            html input name: name;
                       type: type;
                       yourself]   
	}.
    extractionRecipes := #{
        '_default' -> [ :input |
            input asJQuery val]
        }
!

renderInput: name label: inputLabel type: type on: html
    html tr with: [
        html td with: [html label with: inputLabel].
        html td with: [ | factory input |
            factory := inputFactories at: name
                        ifAbsent: [inputFactories at: '_default'].
            input := factory value: html value: name value: type.
            input ifNotNil: [formInputs add: input]
		]
	]
!

renderOn: html

	formInputs removeAll.
	"Each table row is described by 'name -> {label. type}'."
    html form id: 'myForm1'; with: [
        html table with: [
            #{'URL'->{'URL:'. 'string'}.
			  'Username'->{'Username:'. 'string'}.
              'Password'->{'Password:'. 'password'}}
            keysAndValuesDo: [ :key :value |
                self renderInput: key
                     label: value first
                     type: value second
                     on: html ]].
        html p: [
            html input
                type: 'submit';
                value: 'Collect Input Field Values';
                onClick: [ self collectValues ]]]
!

urlOptions: html
    html option value: 'http://localhost:9090/restful/'; with: 'http://localhost:9090/restful/'. "KNIfe"
    html option value: 'http://localhost:8080/restful/'; with: 'http://localhost:8080/restful/'. "default port - ToDo App"
! !

Widget subclass: #MenuBar
	instanceVariableNames: ''
	package: 'Roast'!
!MenuBar commentStamp!
Groups Menus with MenuItems!

!MenuBar methodsFor: 'build'!

buildCallback: actionString
	"When mneu item is clicked, call ST method via JS.
	Pass on the URL to be invoked."

	| cb |
	cb := 'require(''amber/helpers'').globals.'.
	"cb := cb, 'Browser._open();'."
	cb := cb,
		'RestfulObjectManager._current()._invoke_(''', actionString,''');'.
	^cb
!

buildMenu: titleString
	"Constructs the 'button' including it's dropdown indicator."

	| a b menu |
	a := self tag: 'a' 
			class: 'dropdown-toggle' 
			href: '#' 
			dataToggle: 'dropdown' 
			title: titleString.
	b := self tag: 'b' class: 'caret'.
	a << b.
	menu := self tag: 'li' class: 'dropdown'.
	menu << a.
	^menu
!

buildMenuIndicator
	"Constructs a button indicating that there are menuitems not shown due to space restrictions."

	| button |
	button := Domite newElement: 'button'. 
	button attrAt: 'class' put: 'navbar-toggle'.
	button attrAt: 'data-toggle' put: 'collapse'.
	button attrAt: 'data-target' put: '.navbar-collapse'.
	button << (self tag: 'span' class: 'icon-bar'). 
	button << (self tag: 'span' class: 'icon-bar'). 
	button << (self tag: 'span' class: 'icon-bar').
	^button
!

buildMenuItem: titleString action: actionString
	"Constructs a single menu item, usually with an action (url/function)."

	| action menuItem |
	
	action :=  Domite newElement: 'a'.
	action attrAt: 'href' put: 'javascript:void(0)'.
	action attrAt: 'onclick' put: (self buildCallback: actionString).
	action << titleString.

	menuItem := Domite newElement: 'li'.
	menuItem << action.

	^menuItem
!

buildMenuItems: actionCollection
	"Constructs a list of menu items."

	| menu item |
	menu := self tag: 'ul' class: 'dropdown-menu'.

	actionCollection do: [: a |
		a isNil 
			ifTrue: [item := self tag: 'li' class: 'divider']
			ifFalse: [item := self buildMenuItem: (a title) action: (a link href)].
		menu << item.
	].
	^menu
!

buildNavigation: aDictionary
""	
	| navigation navbar container navbarCollapse nav dd ddm |
	navigation := Domite at: '#navigation'.
	navigation resetContents.
	navbar := self tag: 'div' class: 'navbar navbar-default navbar-static-top'.
	container := self tag: 'div' class: 'container'.
	navbarCollapse := self tag: 'div' class: 'navbar-collapse collapse'.
	nav := self tag: 'ul' class: 'nav navbar-nav'.

	aDictionary keysDo: [: k |
		dd := self buildMenu: k.
		ddm := self buildMenuItems: (aDictionary at: k).
"self halt."
		dd << ddm.
		nav << dd.
	].

	navbarCollapse << nav.
	container << navbarCollapse.
	container << self buildMenuIndicator.
	navbar << container.
	navigation << navbar.
! !

!MenuBar methodsFor: 'convenience'!

tag: tagString class: classString
	
	| domite |
	domite := Domite newElement: tagString.
	domite attrAt: 'class' put: classString.
	^domite
!

tag: tagString 
		class: classString 
		href: actionString 
		dataToggle: toggleString 
		title: titleString
	
	| domite |
	domite := self tag: tagString class: classString.
	domite attrAt: 'href' put: actionString.
	domite attrAt: 'data-toggle' put: toggleString.
	domite << titleString.
	^domite
! !

!MenuBar methodsFor: 'deprecated'!

tag: tagString 
		href: actionString 
		title: titleString
"deprecated, use buildMenuItem:action"
	
	| domite a |
	domite := Domite newElement: tagString.
	a := Domite newElement: 'a'.
	a attrAt: 'href' put: 'javascript:void(0)'.
	a attrAt: 'onclick' put: 'alert(''actionString'');'.
	a << titleString.
	domite << a.
	^domite
! !

!MenuBar methodsFor: 'example'!

example
"
	MenuBar new example
"	
	| dict coll1 coll2 |
	dict := Dictionary new.
	coll1 := OrderedCollection new.
	coll1 add: '1.1'; add: nil; add: '1.2'.
	coll2 := OrderedCollection new.
	coll2 add: '2.1'; add: '2.2'.
	dict at: 'Oans' put: coll1.
	dict at: 'Zwoa' put: coll2.

	self buildNavigation: dict
! !

Object subclass: #RestfulObjectManager
	instanceVariableNames: 'services objects authentication invoker links'
	package: 'Roast'!
!RestfulObjectManager commentStamp!
Singleton Pattern

Holds services, objects, etc. and eventually updates them.!

!RestfulObjectManager methodsFor: 'deprecated'!

buildActions1: aDictionary for: service

	| link json mDict mLinks act link2 linkDict|
	(aDictionary at: 'links') do: [: l | 
		link := Link new buildWith: l.
		(link rel = 'describedby') ifTrue: [
			json := invoker invoke: link.
			mDict := self toStObjects: json.
			mLinks := mDict at: 'members'.
			mLinks do: [: m |
				linkDict := self fixActionUrl: m.
				link2 := Link new buildWith: linkDict.
				act := DomainObjectAction new initialize: link2.
				service addAction: act.
			].
		].
	].
!

fixActionUrl: rawDictionary 

	| sep fixedDict rawUrl list fixedUrl svcClass|
	sep := '/'.
	fixedDict := rawDictionary shallowCopy.
	rawUrl := rawDictionary at: 'href'.
	list := rawUrl tokenize: sep.
	svcClass := ((list at: 6) tokenize: '.') last.
	fixedUrl := (list at: 1), sep,
		(list at: 2), sep,
		(list at: 3), sep,
		(list at: 4), sep,
		'services', sep,
		svcClass, sep,
		(list at: 7), sep,
		(list at: 8), sep,
		'invoke'.
Transcript show: fixedUrl; cr.
	fixedDict at: 'href' put: fixedUrl.
	^ fixedDict
! !

!RestfulObjectManager methodsFor: 'example'!

example
	"
	RestfulObjectManager current example
	"
	| rom url |
	rom := self 
		initializeWithUser: 'sven' 
		password: 'pass'.
	url := 'http://localhost:9090/restful/'.
	rom load: url. 
	rom buildMenu.
!

example2
	"
	RestfulObjectManager current example2
	"
	| rom url |
	rom := self 
		initializeWithUser: 'todoapp-admin' 
		password: 'pass'.
	url := 'http://localhost:8888/restful/'.
	rom load: url. 
	rom buildMenu.
!

exampleParse
	"
	RestfulObjectManager current exampleParse
	"
	| jsonString dict |
	jsonString :='{

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

}'.
	dict := self toStObjects: jsonString.
	(dict at: 'members') inspect.
!

invoke: urlString
	"convert string into link in order to use invoker"

	| link |
	link := Link new 
		withHref: urlString;
		withMethod: 'GET'.
Transcript show: link toString; cr. 
	invoker invoke: link
! !

!RestfulObjectManager methodsFor: 'initialization'!

initializeWithUser: username password:password
	
	authentication := Authentication new user: username password: password.
	invoker := Invoker new.
	invoker setAuthentication: authentication.

	services := OrderedCollection new.
	objects := OrderedCollection new.
	links := OrderedCollection new.
! !

!RestfulObjectManager methodsFor: 'loading'!

buildActions: aDictionary for: service

	| actionDict |
	actionDict := aDictionary at: 'members'.
	actionDict isNil ifFalse: [
	"self halt."
	Transcript show: actionDict; cr. 
	actionDict do: [: a | 
		"link := Link new buildWith: l.
		(link rel = 'describedby') ifTrue: [
			json := invoker invoke: link.
			mDict := self toStObjects: json.
			mLinks := mDict at: ''.
			mLinks do: [: m |
				linkDict := self fixActionUrl: m.
				link2 := Link new buildWith: linkDict.
				act := DomainObjectAction new initialize: link2.
				service addAction: act.
			].
		]."
		Transcript show: a toString ; cr. 
	].].
!

buildLinks: aDictionary

	| link |
	(aDictionary at: 'links') do: [: l | 
		link := Link new buildWith: l.
		links add: link].
!

buildMenu
	"Iterate over services. When title of two services is the same, 
	use title for menu item. Add each actions, 
	eventually separated with a line."
	
	| dict k v menuBar |
	dict := Dictionary new.
	
	services do: [: s | 
		k := s link title.
		v := OrderedCollection new.
		s actions do: [: a | 
			v add: a.
		].
		(dict includesKey: k)
			ifTrue: [(dict at: k)
				add: nil;
				addAll: v]
			ifFalse: [dict at: k put: v].
	].
	menuBar := MenuBar new.
	menuBar buildNavigation: dict.
!

buildServices: aDictionary

	| svc link json dict acts |
	(aDictionary at: 'value') do: [: s | 
		link := Link new buildWith: s.
		svc := DomainService new initialize: link.
		json := invoker invoke: svc link.
		dict := self toStObjects: json.
		self buildActions1: dict for: svc.
		services add: svc].
!

load: rootUrl 
	"Entry point for accessing the server."

	| rLink jsonString dict sLink js2String |
	rLink := Link new withHref: rootUrl; withMethod: 'GET'.
	jsonString := invoker invoke: rLink.	
	dict := self toStObjects: jsonString.
	self buildLinks: dict.
	
	sLink := self findServiceLink.
	js2String := invoker invoke: sLink.
	dict := self toStObjects: js2String.
	self buildServices: dict.
! !

!RestfulObjectManager methodsFor: 'private'!

findServiceLink

	links do: [: l |
		(l rel includesSubString: 'service') 
			ifTrue: [^ l]
	]
!

toStObjects: jsonString

	| jsObject stObject|
	jsObject := JSON parse: jsonString.
	stObject := Smalltalk readJSObject: jsObject.
	^stObject
! !

RestfulObjectManager class instanceVariableNames: 'current'!

!RestfulObjectManager class methodsFor: 'as yet unclassified'!

current
	^ current 
		ifNil: [ current := super new ] 
		ifNotNil: [ current ]
!

new
	self shouldNotImplement
! !

Object subclass: #Roast
	instanceVariableNames: ''
	package: 'Roast'!

!Roast methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!Roast methodsFor: 'starting'!

augmentPage
	| spa |
	spa := '#client-main' asJQuery.
	spa empty. 
	LoginForm new appendToJQuery: spa
!

augmentPageNew
	Login new
!

augmentPageOld
	| spa |
	spa := '#client-main' asJQuery.
	spa empty. 
	LoginForm new appendToJQuery: spa
! !

!Roast class methodsFor: 'starting'!

start
	self new augmentPage
! !

Widget subclass: #Table
	instanceVariableNames: ''
	package: 'Roast'!

!Table methodsFor: 'as yet unclassified'!

example
"Table new example"	
	| div script s |
	div := self readDiv.
	div resetContents.
	script := self createTag: 'script'.
	s := self gridSpec.
	script << s.
	div << script.
!

gridSpec

	| content |
	content := '$(function() {
			$(''#content'').jsGrid({
				height: ''100%'',
				width: ''100%'',

				filtering: true,
				editing: true,
				sorting: true,
				paging: false,
				autoload: true,

				deleteConfirm: ''Do you really want to delete the client?'',

				controller: db,

				fields: [
					{ name: ''Name'', type: ''text'', width: 150 },
					{ name: ''Age'', type: ''number'', width: 50 },
					{ name: ''Address'', type: ''text'', width: 200 },
					{ name: ''Married'', type: ''checkbox'', title: ''Verheiratet'', sorting: true },
					{ type: ''control'' }
				]
			});

		});'.
	^content
! !

!Table methodsFor: 'domite'!

createTag: tagString

	| t |
	t := Domite newElement: tagString.
	^t
!

readDiv

	| div |
	div := Domite at: '#content'.
	^div
! !

