import { TamanhoPizzaPipe } from './tamanho-pizza.pipe';

describe('TamanhoPizzaPipe', () => {
  it('create an instance', () => {
    const pipe = new TamanhoPizzaPipe();
    expect(pipe).toBeTruthy();
  });
});
