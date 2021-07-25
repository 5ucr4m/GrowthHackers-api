import { container } from 'tsyringe';

import '@modules/users/providers';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/repositories/implementation/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
