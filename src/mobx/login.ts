//创建单个数据仓库
import { observable, action, runInAction, computed, autorun, extendObservable, ObservableMap } from 'mobx';
import { login, LoginDataType } from '../server/login'; //login api
interface LoginUserType extends LoginDataType {
    [paramsName: string]: Function | string
}
//computed和autorun两者差不多，但是后者不会自动销毁，均是监听某个内容变化的时候，做出一些其他操作
class UserInfoStore {
    @observable   //定义数据仓库字段，让userInfo变为可观察状态
    public userInfo: any = null;

    constructor(){
        autorun(()=>console.log('用户名发生变化，autorun+computed:====>',this.getUserName))
    }

    @action  //定义修改的action
    public async handleChangeUserInfo({ username, password, callback }: LoginUserType): Promise<any> {
        //这个不需要在单独写一个action
        let result: any = await login({ username, password });
        runInAction(() => {
            this.userInfo = result.data;
        });
        (typeof callback === 'function') && callback(result);
    }

    //单独修改用户名的action
    @action.bound
    public setUserName(username: string) {
        this.userInfo?.name && runInAction(() => {
            this.userInfo.name = username;
        })
    }

    @computed
    get getUserName() {
        return this.userInfo?.name;
    }

    @action
    public extendObservable(target:any,value:object):void {
        //新增一个字段，要求变化是时候也可以监听到，需要使用
        target && extendObservable(target,value);
    }

}

export default UserInfoStore;

