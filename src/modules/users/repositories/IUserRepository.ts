import { IUser, ICreateUsersDTO } from '../types';

export default interface IUserRepository {
    findByID(id: number): Promise<IUser | undefined>;
    findByEmail(email: string): Promise<IUser | undefined>;
    create(data: ICreateUsersDTO): Promise<IUser>;
}
