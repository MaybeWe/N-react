import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from './store/type';
import RouterConfig from './Router/index';

import { Layout } from 'antd';
import Top from './components/Top';
const {  Content, Footer } = Layout;

function BoilingVerdict(props:any) {
    console.log("app")
    if (props.isLogin == true) {
      return <Top></Top>;
    }
    return <></>;
}

// 创建类型接口
export interface IProps {
    isLogin: boolean,
}
// 使用接口代替 PropTypes 进行类型校验
class App extends React.PureComponent<IProps> {
    componentWillMount() {
        console.log("uuuuuuuuu")
    }
    public render() {
        return (
            <>
                <div id="bg"/>
                <Layout className="layout">
                    <BoilingVerdict isLogin={this.props.isLogin} />
                    <Content style={{ padding: '0 50px' }}>
                        <RouterConfig/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { isLogin: boolean } => ({
    isLogin: state.isLogin
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps)(App);
