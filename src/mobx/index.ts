import UserInfoStore from './login';
import ContentStore from './content';
export default {
    user:new UserInfoStore(),
    content:new ContentStore()
}