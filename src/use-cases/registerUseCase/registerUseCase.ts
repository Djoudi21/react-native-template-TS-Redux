import { RegisterRepository } from './registerRepository';
import { User } from '../loginUseCase/types';

export class RegisterUseCase {
  private registerRepository: RegisterRepository;

  constructor(registerRepository: RegisterRepository) {
    this.registerRepository = registerRepository;
  }

  async register(user: User) {
    return await this.registerRepository.register(user);
  }
}
