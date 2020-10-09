import DefineMap from "can-define/map/map";

import template from "./main.ejs!";

var data = new DefineMap({message: "Hello World"});

document.body.appendChild(template(data));