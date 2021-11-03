import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from '../components/Home/Home.js';
import Tables from '../components/Tables/Tables';
import SideMenu from "../components/Design/SideMenu";

const { Content } = Layout;

function AppRouter ({collapsed}) {
    return (
        <>
            <Router>
                <SideMenu collapsed={collapsed}/>
                <Content className="site-layout-background" style={{ position: 'fixed', width: '100%', backgroundColor: 'RGB(240, 242, 245)'}}> 
                    <Content className="site-layout-background" style={{ margin: "20px 20px", padding: 24}}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/tables' component={Tables} />
                        </Switch>
                    </Content>
                </Content>
            </Router>
        </>
    )
}

export default AppRouter;
