import 'reflect-metadata';

import CreateUserService from './CreateUserService';
import FakeUserRepository from '../repositories/fake/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AppError from '@shared/errors/AppError';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;

describe('Create User', () => {
    beforeEach(() => {
        fakeUserRepository = new FakeUserRepository();
        fakeHashProvider = new FakeHashProvider();
        createUserService = new CreateUserService(
            fakeUserRepository,
            fakeHashProvider,
        );
    });

    it('should be able to create a new user', async () => {
        const user = await createUserService.execute({
            email: '5ucr4m@gmail.com',
            name: 'Marcus Vinicius',
            password: '123456',
        });

        expect(user).toHaveProperty('id');
    });

    it('should not be able to create two users with a same email', async () => {
        await createUserService.execute({
            email: '5ucr4m@gmail.com',
            name: 'Marcus Vinicius',
            password: '123456',
        });

        expect(
            createUserService.execute({
                email: '5ucr4m@gmail.com',
                name: 'John Doe',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
