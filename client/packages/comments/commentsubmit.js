Template.commentSubmit.helpers({
    errorMessage: function(field) {
    return Session.get('commentSubmitErrors')[field]; },
    errorClass: function (field) {
        return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
    } });
Template.commentSubmit.events({
    'submit form': function(e, template) {
        e.preventDefault();
        var $body = $(e.target).find('[name=commentBody]');
        var comment = {
            commentBody: $body.val(),
            voteId: template.data._id
        };
        var errors = {};
        if (! comment.commentBody) {
            errors.commentBody = "Please write some content";
            return Session.set('commentSubmitErrors', errors); }

        Meteor.call('commentInsert', comment, function(error, commentId) { if (error){
            sAlert(error.reason, {}); } else {
            $body.val('');
        }
        }); }
});