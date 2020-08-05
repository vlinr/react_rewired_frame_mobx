/// <reference types="react-scripts" />

//解决模块化引入less报错问题
// declare module "*.less" {
//     const less: any;
//     export default less;
// }
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}
//引入不存在的这个模块
declare module 'braft-extensions/dist/color-picker' {
    const ColorPicker: any;
    export default ColorPicker;
}

