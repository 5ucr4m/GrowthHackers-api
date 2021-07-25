import { Model } from 'objection';

import connections from '@infra/database/connection';

class User extends Model {
    id!: number;
    name!: string;
    email!: string;
    password!: string;

    static tableName = 'users';

    static get hidden() {
        return ['password'];
    }
}

export default User.bindKnex(connections.main);
