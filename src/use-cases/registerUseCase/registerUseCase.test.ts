import { RegisterRepository } from './registerRepository';
import { RegisterUseCase } from './registerUseCase';
import { InMemoryRegisterRepository } from './inMemoryRegisterRepository';

describe('register use case', () => {
  let inMemoryRegisterRepository: RegisterRepository;
  let registerUseCase: RegisterUseCase;
  beforeEach(() => {
    inMemoryRegisterRepository = new InMemoryRegisterRepository();
    registerUseCase = new RegisterUseCase(inMemoryRegisterRepository);
  });
  afterEach(() => {
    inMemoryRegisterRepository.users.pop();
  });
  it('should register a new user', async () => {
    const user = {
      email: 'new@user.com',
      password: 'password',
    };
    const response = await registerUseCase.register(user);
    // @ts-ignore
    const id = response.data.data.id;
    const status = response.data.status;
    const message = response.data.message;
    expect(status).toBe(201);
    expect(id).toBeDefined();
    expect(message).toBe('User successfully created');
  });
  it('should not register an existing user', async () => {
    const existingUser = {
      email: 'new@user.com',
      password: 'password',
      id: '0',
    };
    inMemoryRegisterRepository.users.push(existingUser);

    const newUser = {
      email: 'new@user.com',
      password: 'password',
    };
    const response = await registerUseCase.register(newUser);
    const message = response.data.message;
    const status = response.data.status;
    expect(status).toBe(500);
    expect(message).toBe('User already exist');
  });
});
