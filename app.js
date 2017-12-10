import Vue from 'vue/dist/vue.js';

const app = new Vue({
  el: '#app',
  template: `<h1>{{name}}</h1>`,
  data() {
    return {
      name: 'Paul Halliday',
    };
  },
});

if (module.hot) {
  module.hot.dispose(() => {
    console.log('About to be replaced!');
  });
  module.hot.accept(() => {
    console.log('Updated!');
  });
}
