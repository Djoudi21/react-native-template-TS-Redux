import { User } from '../loginUseCase/types';
import { UserRepository } from '../../repositories/interfaces/UserRepository';

export class RegisterUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async register(user: User) {
    if (!user.email.includes('@')) {
      throw new Error('wrong email');
    }
    return await this.userRepository.register(user);
  }
}
