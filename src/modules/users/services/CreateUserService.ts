import { injectable, inject } from 'tsyringe';

import { IUser } from '../types';
import IUserRepository from '../repositories/IUserRepository';
import AppError from '@shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({ name, email, password }: IRequest): Promise<IUser> {
        const checkUsersExists = await this.userRepository.findByEmail(email);

        if (checkUsersExists) {
            throw new AppError('Email is already exists!!');
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        return user;
    }
}

export default CreateUserService;
