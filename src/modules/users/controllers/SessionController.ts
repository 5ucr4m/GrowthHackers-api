import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionController {
    public async create(
        request: Request,
        response: Response,
        next: NextFunction,
    ) {
        const { email, password } = request.body;

        const authenticateUserService = container.resolve(
            AuthenticateUserService,
        );

        const { user, token } = await authenticateUserService.execute({
            email,
            password,
        });
        return response.json({ user: user, token });
    }
}
