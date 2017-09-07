import Ember from 'ember';

export default Ember.Controller.extend({
  amountToDecrease: null,
  startingTotal: null,

  totalRemaining: Ember.computed('amountToDecrease', 'startingTotal', function() {
    return this.get('startingTotal') - this.get('amountToDecrease');
  }),

  showDecreases: Ember.computed.gt('totalRemaining', 0)
});