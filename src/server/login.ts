import Request from '../request/Request';
import { LOGIN_URL } from '../config/api.config';

export interface LoginDataType {
    username: string,
    password: string
}

//登录
export const login = async ({ username, password }: LoginDataType) => {
    return await new Request({
        api: LOGIN_URL,
        method: 'post',
        data: {
            username, password
        }
    }).fetch();
}