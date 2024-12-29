describe('#prevent', () => {
  'use strict';

  beforeEach(() => {
    document.body.innerHTML = Helper.load('checkbox.html');
  });

  context('when enable', () => {
    context('and element is a checkbox', () => {
      it('prevents to be checked inside other callbacks', () => {
        // given
        const checkbox = document.querySelector('[data-link]');
        const modaly = new Modaly(checkbox, { prevent: true }).init();

        modaly.open();

        checkbox.addEventListener('click', () => {
          // then
          expect(checkbox.checked).toBe(false);
        });

        // when
        checkbox.click();
      });
    });
  });
});
