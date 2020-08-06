import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { configure } from 'mobx';
import { Provider, useStaticRendering } from 'mobx-react';
import stores from './mobx/index';  //注入数据仓库
// useStaticRendering(true); //只能通过action进行更改
configure({ enforceActions: "always" }); //开启强制使用action进行更改
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);







/*********
 * mobx使用教程
 * 
 * 1.在mobx文件夹下，编写单个文件，也就是你需要设置的对应页面的数据仓库，以及更改数据仓库的action
 * 可观察数据仓库使用observable字段标识，函数使用这个进行包裹
 * 修改可观察字段，需要使用action标识或者进行包裹
 * 新增字段，需要使用extendObservable进行变为可观察状态，否则更改后，不会同步刷新
 * 
 * 编写完成后，在mobx的index文件加将其引入，并进行实例化，最终导出为键值对的一个对象集合，前面的键名就是你后面需要使用的字段，比如user，后面你在
 * props上面获取的字段就是user，就代表这个类
 * 
 * 2.数据请求，请在server进行添加相应的请求方式，然后在导入到相应地方进行使用，支持 async/await
 * 
 * 3.页面使用
 * 
 * 使用mobx-react 里面的observer, inject进行包裹，如果是类组件，可以直接使用装饰器的形式，在对应组件头部进行 @observer 以及@inject(Array<string>)
 *其中，inject就是注入，比如我要使用刚刚的user，那么需要将user进行注入操作，比如 inject('user')(observer(组件名称)) 
 * 这样操作以后，就可以通过props.user.去进行操作了。
 * 
 * 4.说明
 * 默认本框架采用configure({enforceActions: 'always'})严格使用action进行修改的模式，也可以去掉，但是建议开启
 * 
 * *********/

































console.log(`
       _____      _____    ______       _____   __      __ 
      /     |    /     |  /      \     /     | /  \    /  |
      $$$$$ |    $$$$$ | /$$$$$$  |    $$$$$ | $$  \  /$$/ 
        $$  |       $$ | $$ | _$$/        $$ |  $$  \/$$/  
   __    $$ |  __   $$ | $$ |/    |  __   $$ |   $$  $$/   
  /  |  $$  | /  |  $$ | $$ |$$$$ | /  |  $$ |    $$$$/    
  $$ \__$$  | $$ \__$$ | $$ \__$$ | $$ \__$$ |     $$ |    
  $$    $$ /  $$    $$/  $$    $$/  $$    $$/      $$ |    
   $$$$$$/     $$$$$$/    $$$$$$/    $$$$$$/       $$/     
                                                 
`)