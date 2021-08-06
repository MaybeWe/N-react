import {LOGINNO, LOGINNO_TYPE, LOGINOK_TYPE} from '../const'

export interface LOGINAction {
  type: LOGINNO_TYPE | LOGINOK_TYPE;
}


// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = LOGINAction;


// 修改登陆状态
export const CHANGElOGIN = (state: boolean = false): LOGINAction => ({
    type: true,
})
