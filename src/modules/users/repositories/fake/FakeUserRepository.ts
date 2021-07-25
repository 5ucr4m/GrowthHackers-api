import { v4 as uuid } from 'uuid';
import IUsersRepository from '@modules/users/repositories/IUserRepository';
import { IUser, ICreateUsersDTO } from '../../types';

class FakeUsersRepository implements IUsersRepository {
    private users: IUser[] = [];

    public async findByID(id: number): Promise<IUser | undefined> {
        const findedUser = this.users.find(user => user.id === id);
        return findedUser;
    }

    public async findByEmail(email: string): Promise<IUser | undefined> {
        const findedUser = this.users.find(user => user.email === email);
        return findedUser;
    }

    public async create(userData: ICreateUsersDTO): Promise<IUser> {
        const user = {} as IUser;
        Object.assign(user, { id: uuid() }, userData);
        this.users.push(user);
        return user;
    }
}

export default FakeUsersRepository;
