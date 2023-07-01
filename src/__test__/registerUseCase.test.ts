import { RegisterUseCase } from '../use-cases/registerUseCase/registerUseCase';
import { InMemoryUserRepository } from '../repositories/inMemoryUserRepository';

describe('register use case', () => {
  let userRepository: InMemoryUserRepository;
  let registerUseCase: RegisterUseCase;
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    registerUseCase = new RegisterUseCase(userRepository);
  });
  it('should register a new user', async () => {
    const newUser = {
      email: 'new@user.com',
      password: 'password',
    };
    const createdUser = await registerUseCase.register(newUser);
    expect(createdUser).toHaveProperty('id');
    expect(userRepository.users).toHaveLength(1);
  });
  it('should not register a user with invalid email', async () => {
    const userWithInvalidEmail = {
      email: 'new',
      password: 'password',
    };
    try {
      await registerUseCase.register(userWithInvalidEmail);
    } catch (error) {
      expect((error as Error).message).toBe('wrong email');
      expect(error).toBeInstanceOf(Error);
      expect(userRepository.users).toHaveLength(0);
    }
  });
  it('should not register an existing user', async () => {
    const existingUser = {
      email: 'existing@user.com',
      password: 'password',
    };
    userRepository.users.push(existingUser);
    const createUser = {
      email: 'existing@user.com',
      password: 'password',
    };
    try {
      await registerUseCase.register(createUser);
    } catch (error) {
      expect((error as Error).message).toBe('User already exists');
      expect(error).toBeInstanceOf(Error);
      expect(userRepository.users).toHaveLength(1);
    }
  });
});
