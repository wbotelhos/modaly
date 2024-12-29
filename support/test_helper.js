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

global.Helper = {
  isVisible: (modal) => {
    const style = window.getComputedStyle(modal);

    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
  },
  load: (file) => require('fs').readFileSync(require('path').resolve(process.cwd(), '__fixtures__', file), 'utf-8'),
  pressEsc: () => {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      code: 'Escape',
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    document.dispatchEvent(event);
  },
};
