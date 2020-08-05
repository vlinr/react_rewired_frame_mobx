//创建单个数据仓库
import { observable, action, runInAction} from 'mobx';
import { content } from '../server/content'; //login api




class ContentStore {
    @observable   //定义数据仓库字段，让userInfo变为可观察状态
    public content: any = null;

    @action  //定义修改的action
    public async getContent(): Promise<any> {
        let con:Array<any> = await content();
        runInAction(async () => {
            this.content = con;
        })
    }
    
}

export default ContentStore;