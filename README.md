# roast

Restful Object viewer in Amber SmallTalk

This is a viewer for [Restful Objects] (http://www.restfulobjects.org/) written in Amber Smalltalk, ie. a generic client for applications that implement the Restful Objects Specification. An [Apache Isis] (https://isis.apache.org/) application, eg. the TODO app can be used for the server part. You need to take CORS into account, see (https://github.com/danhaywood/isis-angularjs-simpleapp).

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
