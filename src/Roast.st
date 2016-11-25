Smalltalk createPackage: 'Roast'!
(Smalltalk packageAt: 'Roast') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
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
	instanceVariableNames: 'description'
	package: 'Roast'!

Object subclass: #DomainObjectCollection
	instanceVariableNames: 'description'
	package: 'Roast'!

Object subclass: #DomainObjectProperty
	instanceVariableNames: 'description'
	package: 'Roast'!

Object subclass: #DomainService
	instanceVariableNames: 'actions'
	package: 'Roast'!

!DomainService methodsFor: 'as yet unclassified'!

addAction: aDomainObjectAction

	actions add: aDomainObjectAction
!

initialize

	actions := OrderedCollection new.
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

Widget subclass: #LoginForm
	instanceVariableNames: 'formValues formInputs inputFactories extractionRecipes'
	package: 'Roast'!

!LoginForm methodsFor: 'as yet unclassified'!

collectValues
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
	self verifyUser: (formValues at: 'Username')
     	password: (formValues at: 'Password').
		
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
        'RememberMe' -> [ :input |
            input asJQuery prop: 'checked'].
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
			  'Username'->{'Username:'. 'email'}.
              'Password'->{'Password:'. 'password'}.
              'RememberMe'->{'Remember me'. 'checkbox'}}
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
    html option value: 'http://localhost:9090/restful'; with: 'http://localhost:9090/restful'. "KNIfe"
!

verifyUser: user password: pwd
	"Entry point for accessing the server. 
	Copy&paste into workspace and evaluate."

	| auth req txt|
	auth := Authentication new user: user password: pwd.
	req := Invoker new.
	req setAuthentication: auth.
	txt := req get: 'http://localhost:9090/restful/'.
	Transcript show: txt.
! !

Object subclass: #MenuBar
	instanceVariableNames: ''
	package: 'Roast'!

Object subclass: #RestfulObjectManager
	instanceVariableNames: 'services objects'
	package: 'Roast'!
!RestfulObjectManager commentStamp!
Holds services, objects, etc. and eventually updates them.!

!RestfulObjectManager methodsFor: 'as yet unclassified'!

addService: aDomainService
	
	services add: aDomainService
!

initialize
	
	services := OrderedCollection new.
	objects := OrredCollection new.
! !

Object subclass: #RestfulObjectParser
	instanceVariableNames: ''
	package: 'Roast'!

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
	'#client-main' asJQuery empty. "make sure it's empty"
	LoginForm new appendToJQuery: '#client-main' asJQuery.
"
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
	"
! !

!Roast class methodsFor: 'starting'!

start
	self new augmentPage
! !

Object subclass: #Table
	instanceVariableNames: ''
	package: 'Roast'!

