import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      console.log("Log 1");
      var params = {
        asker: this.get('asker'),
        subject: this.get('subject'),
        inquiry: this.get('inquiry'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
      console.log("Log 2");
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  },
});
