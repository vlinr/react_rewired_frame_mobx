import Request from '../request/Request';
import { GET_CONTENT_URL } from '../config/api.config';

//登录
export const content = async () => {
    return await new Request({
        api: GET_CONTENT_URL,
        data: {
        }
    }).fetch();
}