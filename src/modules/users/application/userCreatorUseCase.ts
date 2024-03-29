import { CustomLogger } from '@shared/logger';
import { inject, injectable } from 'inversify';
import { CreateUserParams, UserCreatorUseCase, UserRepository } from '../domain';

@injectable()
export class UserCreator implements UserCreatorUseCase {
  constructor(
    @inject('CustomLogger') private logger: CustomLogger,
    @inject('UserRepository') private userRepository: UserRepository,
  ) { }

  async invoke(params: CreateUserParams) {
    this.logInvoke(params);

    return await this.userRepository.insertOne(params);
  }

  private logInvoke(params: CreateUserParams) {
    this.logger.info(`${ this.constructor.name } was invoked.`, { params });
  }

}
