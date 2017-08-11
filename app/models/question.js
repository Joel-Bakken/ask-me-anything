import DS from 'ember-data';

export default DS.Model.extend({
  asker: DS.attr(),
  subject: DS.attr(),
  inquiry: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
