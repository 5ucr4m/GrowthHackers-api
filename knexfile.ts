import path from 'path';

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/infra/database/db.sqlite',
        },
        migrations: {
            directory: path.resolve(
                __dirname,
                'src',
                'infra',
                'database',
                'migrations',
            ),
        },
        seeds: {
            directory: path.resolve(
                __dirname,
                'src',
                'infra',
                'database',
                'seeds',
            ),
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'postgresql',
        connection: {
            host: process.env.BD_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
        },
        migrations: {
            directory: path.resolve(
                __dirname,
                'src',
                'infra',
                'database',
                'migrations',
            ),
        },
        seeds: {
            directory: path.resolve(
                __dirname,
                'src',
                'infra',
                'database',
                'seeds',
            ),
        },
        useNullAsDefault: true,
    },
};
