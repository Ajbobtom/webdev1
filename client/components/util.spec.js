import { safeCb } from './util';

describe('Util', () => {
  it('Has a safeCb function', () => {
    let notAFunction;

    expect(safeCb(notAFunction)).to.not.throw(Error);
  });
});
