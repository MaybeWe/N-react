import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './Router/index';
import { Layout } from 'antd';
import Top from './components/Top';

const {  Content, Footer } = Layout;

function BoilingVerdict(props:any) {
    if (props.isLogin == true) {
      return <Top></Top>;
    }
    return <></>;
}

ReactDOM.render(
    <>
        <div id="bg"/>
        <Layout className="layout">
            <BoilingVerdict isLogin={true} />
            <Content style={{ padding: '0 50px' }}>
                <RouterConfig/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
