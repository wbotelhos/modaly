require('@testing-library/jest-dom');

global.Modaly = require('../src/modaly').default;

global.context = function context(description, spec) {
  // eslint-disable-line no-redeclare, no-unused-vars
  describe(description, spec);
};

global.xcontext = function xcontext(description, spec) {
  // eslint-disable-line no-redeclare, no-unused-vars
  xdescribe(description, spec);
};

afterEach(() => {
  document.body.innerHTML = '';
});

global.Helper = {};
