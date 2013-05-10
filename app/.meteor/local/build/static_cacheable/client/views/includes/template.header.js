(function(){ Meteor._def_template("header",Handlebars.json_ast_to_func(["<header class=\"navbar\">\n    <div class=\"navbar-inner\">\n      <a class=\"brand\" href=\"/\">Microscope</a>\n      <ul class=\"nav\">\n        <li class=\"",["{",[[0,"activeRouteClass"],"home","newPosts"]],"\">\n          <a href=\"",["{",[[0,"homePath"]]],"\">New</a>\n        </li>\n        <li class=\"",["{",[[0,"activeRouteClass"],"bestPosts"]],"\">\n          <a href=\"",["{",[[0,"bestPostsPath"]]],"\">Best</a>\n        </li>\n        ",["#",[[0,"if"],[0,"currentUser"]],["\n          <li class=\"",["{",[[0,"activeRouteClass"],"postSubmit"]],"\">\n            <a href=\"/submit\">Submit Post</a>\n          </li>\n          <li class=\"dropdown\">\n            ",[">","notifications"],"\n          </li>\n        "]],"\n      </ul>\n      <ul class=\"nav pull-right\">\n        <li>",["{",[[0,"loginButtons"]]],"</li>\n      </ul>\n    </div>\n  </header>"]));

}).call(this);
