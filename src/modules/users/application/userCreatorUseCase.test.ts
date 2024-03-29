import { UserCreator } from './userCreatorUseCase';
import { CustomLoggerDouble } from '@shared/logger/test/customLoggerDouble';
import { UserRepositoryDouble } from '../test/userRepositoryDouble';

describe('Create User', () => {
  const logger = new CustomLoggerDouble();
  const userRepository = new UserRepositoryDouble();

  const useCase = new UserCreator(logger, userRepository);

  beforeEach(() => {
    userRepository.insertOne = jest.fn().mockReturnValue("mockUser");
    logger.info = jest.fn();
  });

  it('logs request params', async () => {
    const params = requestFrom();
    await useCase.invoke(params);

    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith('Invoking UserCreator...', params);
  });

  it('Create a new user and returns 200', () => {
    // Here goes the implementation of the test
    expect(1).toBe(1);
  });

  it('Try to create a new user and returns 400', () => {
    // Here goes the implementation of the test
    expect(1).toBe(1);
  });

  const requestFrom = () => ({
    name: 'name',
    email: 'email@email.com',
    password: 'password',
  });
});