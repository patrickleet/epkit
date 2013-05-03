(function(){ Meteor._def_template("postPage",Handlebars.json_ast_to_func([["#",[[0,"with"],[0,"currentPost"]],["\n    ",[">","postItem"],"\n    \n    <ul class=\"comments\">\n      ",["#",[[0,"each"],[0,"comments"]],["\n        ",[">","comment"],"\n      "]],"\n    </ul>\n    \n    ",["#",[[0,"if"],[0,"currentUser"]],["\n      ",[">","commentSubmit"],"\n    "]],"\n  "]]]));

})();
