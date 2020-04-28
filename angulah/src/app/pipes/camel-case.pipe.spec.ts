import { CamelCasePipe } from './camel-case.pipe';

describe('Pipe: CamelCase', () => {
  let sut: CamelCasePipe;

  beforeEach(() => {
    sut = new CamelCasePipe();
  });

  for (let i = 0; i < 5; i++) {
    it('should camel-case a line of text with ' + i + ' as data', () => {
      let output = sut.transform('hallo daar even iets testen ' + i);
      expect(output).toBe('halloDaarEvenIetsTesten' + i);
    });
  }
  
  it('should lowercase a simple word', () => {
    let output = sut.transform('hALlO');
    expect(output).toBe('hallo');
  });

  it('should lowercase all the letters of other words except for the first letter and then camelcase it', () => {
    let output = sut.transform('hALlO daar EVEN iETs testen');
    expect(output).toBe('halloDaarEvenIetsTesten');
  });
});
