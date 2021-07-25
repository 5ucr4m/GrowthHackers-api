import IUsersRepository from '@modules/users/repositories/IUserRepository';
import { IUser, ICreateUsersDTO } from '../../types';
import Users from '../../models/User';

class UsersRepository implements IUsersRepository {
    public async findByID(id: number): Promise<IUser | undefined> {
        const finded = await Users.query().findOne({ id });
        return finded;
    }

    public async findByEmail(email: string): Promise<IUser | undefined> {
        const finded = await Users.query().findOne({ email });
        return finded;
    }

    public async create(userData: ICreateUsersDTO): Promise<IUser> {
        const user = await Users.query().insert(userData);
        return user;
    }
}

export default UsersRepository;
