(function(){ Meteor._def_template("newPosts",Handlebars.json_ast_to_func([["#",[[0,"with"],[0,"options"]],[[">","postsList"]]]]));
Meteor._def_template("bestPosts",Handlebars.json_ast_to_func([["#",[[0,"with"],[0,"options"]],[[">","postsList"]]]]));
Meteor._def_template("postsList",Handlebars.json_ast_to_func(["<div class=\"posts\">\n    ",["#",[[0,"each"],[0,"postsWithRank"]],["\n      ",[">","postItem"],"\n    "]],"\n    \n    ",["#",[[0,"if"],[0,"postsReady"]],["\n      ",["#",[[0,"unless"],[0,"allPostsLoaded"]],["\n    \t\t<a class=\"load-more\" href=\"#\">Load more</a>\n      "]],"\n    "],["\n      <div>",[">","spinner"],"</div>\n    "]],"\n  </div>"]));

}).call(this);
