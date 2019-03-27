import { UseCasesModule } from './use-cases.module';

describe('UseCasesModule', () => {
  let useCasesModule: UseCasesModule;

  beforeEach(() => {
    useCasesModule = new UseCasesModule();
  });

  it('should create an instance', () => {
    expect(useCasesModule).toBeTruthy();
  });
});
