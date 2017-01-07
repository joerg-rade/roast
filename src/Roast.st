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

title

	^title
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
!

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

Object subclass: #Link
	instanceVariableNames: 'rel href method type title'
	package: 'Roast'!
!Link commentStamp!
* rel type can be one of: self, describedBy, up
* method can be one of: GET, POST, PUT, DELETE
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

withHref: aString
	
	href := aString.
	^self
!

withMethod: aString
	
	method := aString.
	^self
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
!

tag: tagString 
		href: actionString 
		title: titleString
	
	| domite a |
	domite := Domite newElement: tagString.
	a := Domite newElement: 'a'.
	a attrAt: 'href' put: actionString.
	a << titleString.
	domite << a.
	^domite
! !

!MenuBar methodsFor: 'example'!

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
	action attrAt: 'href' put: actionString.
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
			ifFalse: [item := self buildMenuItem: a action: '#'].
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
		dd << ddm.
		nav << dd.
	].
	
	navbarCollapse << nav.
	container << navbarCollapse.
	container << self buildMenuIndicator.
	navbar << container.
	navigation << navbar.
!

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
Holds services, objects, etc. and eventually updates them.!

!RestfulObjectManager methodsFor: 'example'!

example
	"
	RestfulObjectManager new example
	"
	| rom url |
	rom := self 
		initializeWithUser: 'sven' 
		password: 'pass'.
	url := 'http://localhost:9090/restful/'.
	rom load: url. 
	rom buildMenu.
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

	| link json mDict mLinks act link2 |
	(aDictionary at: 'links') do: [: l | 
		link := Link new buildWith: l.
		(link rel = 'describedby') ifTrue: [
			json := invoker invoke: link.
			mDict := self toStObjects: json.
			mLinks := mDict at: 'members'.
			mLinks do: [: m |
				link2 := Link new buildWith: m.
				act := DomainObjectAction new initialize: link2.
				service addAction: act.
			].
		].
	].
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
			v add: a title.
		].
		(dict includesKey: k)
			ifTrue: [(dict at: k)
				add: nil;
				addAll: v]
			ifFalse: [dict at: k put: v].
	].
	menuBar := MenuBar new.
	menuBar buildNavigation: dict.

"
RestfulObjectsManager services
DomainService link title
DomainService actions
DomainObjectAction title "
"listAll"
!

buildServices: aDictionary

	| svc link json dict acts |
	(aDictionary at: 'value') do: [: s | 
		link := Link new buildWith: s.
		svc := DomainService new initialize: link.
		json := invoker invoke: svc link.
		dict := self toStObjects: json.
		self buildActions: dict for: svc.
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
	stObject := SmalltalkImage current readJSObject: jsObject.
	^stObject
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

