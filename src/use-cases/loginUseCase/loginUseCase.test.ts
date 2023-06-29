import { InMemoryLoginRepository } from './inMemoryLoginRepository';
import { LoginRepository } from './loginRepository';
import { LoginUseCase } from './loginUseCase';

describe('login use case', () => {
  let inMemoryLoginRepository: LoginRepository;
  let loginUseCase: LoginUseCase;
  beforeEach(() => {
    inMemoryLoginRepository = new InMemoryLoginRepository();
    loginUseCase = new LoginUseCase(inMemoryLoginRepository);
  });
  afterEach(() => {
    inMemoryLoginRepository.users.pop();
  });
  it('should loginUseCase a user with valid credentials', async () => {
    // ARRANGE
    const user = {
      email: 'valid@email.com',
      password: 'validpassword',
    };
    inMemoryLoginRepository.users.push(user);

    // ACT
    const response = await loginUseCase.login(user);
    const tokens = response.data.tokens;
    const status = response.data.status;

    // ASSERT
    expect(tokens).toBeDefined();
    expect(status).toBe(200);
  });
  it('should not loginUseCase a user with invalid email', async () => {
    // ARRANGE
    const validUser = {
      email: 'valid@email.com',
      password: 'validpassword',
    };
    inMemoryLoginRepository.users.push(validUser);
    const invalidUser = {
      email: 'invalid email',
      password: 'validpassword',
    };

    // ACT
    const response = await loginUseCase.login(invalidUser);
    const tokens = response.data.tokens;
    const status = response.data.status;
    const message = response.data.message;

    // ASSERT
    expect(tokens).toBeUndefined();
    expect(status).toBe(500);
    expect(message).toBe('email is invalid');
  });
  it('should not loginUseCase a user with invalid password', async () => {
    // ARRANGE
    const validUser = {
      email: 'valid@email.com',
      password: 'validpassword',
    };
    inMemoryLoginRepository.users.push(validUser);
    const invalidUser = {
      email: 'valid@email.com',
      password: 'invalidpassword',
    };

    // ACT
    const response = await loginUseCase.login(invalidUser);
    const tokens = response.data.tokens;
    const status = response.data.status;
    const message = response.data.message;

    // ASSERT
    expect(tokens).toBeUndefined();
    expect(status).toBe(500);
    expect(message).toBe('password is invalid');
  });
});
