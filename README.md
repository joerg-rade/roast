# roast

Restful Object viewer in Amber SmallTalk

This is a viewer for [Restful Objects] (http://www.restfulobjects.org/) written in Amber Smalltalk, ie. a generic client for applications that implement the Restful Objects Specification. An [Apache Isis] (https://isis.apache.org/) application, eg. the TODO app can be used for the server part. You need to take CORS into account, see (https://github.com/danhaywood/isis-angularjs-simpleapp).

## TODO's
* Wrap jsGrid in Table
** $npm install --global bower
** $bower install js-grid --save
* Invoke Actions from MenuItems
http://localhost:9090/restful/domain-types/Application
http://localhost:9090/restful/objects/Application/0
http://localhost:9090/restful/services/Endpoints/actions/checkApplicationVersion
OK: GET http://localhost:9090/restful/objects/ife.cfg.Endpoint/0
OK: http://localhost:9090/restful/domain-types/ife.cfg.Endpoints
OK: http://localhost:9090/restful/domain-types/ife.cfg.Endpoints/actions/listAll

OK: http://localhost:9090/restful/services/Applications
OK: http://localhost:9090/restful/services/Applications/actions/listAll
OK: http://localhost:9090/restful/services/Applications/actions/listAll/invoke
* Implement PopUp Dialogs
* Load and Parse Layout.xml
* MenuBar
** Group services, Secondary to the right
** Add Icons
* Show user in MenuBar or Status Line
* Add brand image
* Implement timeline widget:
** Either: install and Wrap Morphic.js (http://forum.world.st/amber-lang-Morphic-js-Amber-td3827277.html) 
** Or: better use Athens and port existing code
* Implement View for Directed Graph

## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://lolg.it/amber/amber#prerequisites).

## Use Roast as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
bower install Roast --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use Roast,
add `'amber-roast/Roast'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
