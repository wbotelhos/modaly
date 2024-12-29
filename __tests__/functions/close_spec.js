describe('#close', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('default.html');
  });

  it('closes the modal', () => {
    const el = document.querySelector('[data-link]');

    const modaly = new Modaly(el).init();

    modaly.open();

    modaly.close();

    expect(el.dataset.opened).toBe('false');
  });

  it('triggers event', function (done) {
    const modal = document.querySelector('[data-modal]');
    const modaly = new Modaly(modal).init();

    modaly.open();

    modal.addEventListener('modaly:closed', () => {
      done();
    });

    modaly.close();
  });

  context('with an array params', () => {
    it('removes the given data parameters from modal', () => {
      const el = document.querySelector('[data-link]');

      const modaly = new Modaly(el).init();

      modaly.open({ keep: true, key: 'value', target: 'open' });

      modaly.close(['keep', 'target']);

      expect(el.dataset.keep).toEqual(undefined);
      expect(el.dataset.key).toEqual('value');
      expect(el.dataset.target).toEqual(undefined);
    });
  });
});
