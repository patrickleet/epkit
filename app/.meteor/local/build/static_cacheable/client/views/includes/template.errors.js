(function(){ Meteor._def_template("errors",Handlebars.json_ast_to_func(["<div class=\"errors row-fluid\">    \n    ",["#",[[0,"each"],[0,"errors"]],["\n      ",[">","error"],"\n    "]],"\n  </div>"]));
Meteor._def_template("error",Handlebars.json_ast_to_func(["<div class=\"alert alert-error\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    ",["{",[[0,"message"]]],"\n  </div>"]));

}).call(this);
