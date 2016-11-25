define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Roast-Tests');
$core.packages["Roast-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Roast-Tests"].transport = {"type":"amd","amdNamespace":"amber-roast"};

$core.addClass('RoastTest', $globals.TestCase, [], 'Roast-Tests');

});
