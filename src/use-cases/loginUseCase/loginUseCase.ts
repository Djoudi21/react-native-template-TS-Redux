import { UserRepository } from '../../repositories/interfaces/UserRepository';
import { User } from './types';

export class LoginUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async login(user: User) {
    return this.userRepository.login(user);
  }
}
