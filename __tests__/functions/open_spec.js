describe('#open', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  it('opens the modal', () => {
    const modal = document.querySelector('[data-modal]');

    const modaly = new Modaly(modal).init();

    modaly.open();

    expect(Helper.isVisible(modal)).toBe(true);
  });

  it('triggers event', function (done) {
    const modal = document.querySelector('[data-modal]');
    const modaly = new Modaly(modal).init();

    modal.addEventListener('modaly:opened', () => {
      done();
    });

    modaly.open();
  });

  context('sets modal as opened', () => {
    it('is added on modal as data', () => {
      const modal = document.querySelector('[data-modal]');
      const modaly = new Modaly(modal).init();

      modaly.open();

      expect(modal.dataset.opened).toEqual('true');
    });
  });

  context('with a hash data', () => {
    it('is added on modal as data', () => {
      const modal = document.querySelector('[data-modal]');
      const modaly = new Modaly(modal).init();

      modaly.open({ foo: 'bar' });

      expect(modal.dataset.foo).toEqual('bar');
    });
  });
});
