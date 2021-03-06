import Ember from 'ember';

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  model() {
    return {
      body: this.get('fastboot.request.body')
    };
  }
});
