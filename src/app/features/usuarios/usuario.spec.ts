import { Role } from 'src/app/shared/models/enums/role';
import { Usuario } from './usuario';

describe('Usario', () => {
  it('should create an instance', () => {
    expect(new Usuario('', '', '', Role.FUNCIONARIO, '', 0, []),
    ).toBeTruthy();
  });
});
