(function(){ Template.comment.helpers({
  submittedText: function() {
    return new Date(this.submitted).toString();
  }
});
}).call(this);
