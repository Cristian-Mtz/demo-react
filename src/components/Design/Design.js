import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import AppRouter from '../../routers/AppRouter';

const { Header } = Layout;


function Design() {
    const [collapsed, setCollapsed] = useState(true);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <div className="hamburger" style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", padding: "0 16px"}}>
                    <div>
                        <a href="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Logo" className="Logo" ></img>
                            <h1 style={{ color: "#fff", margin: "0 0 0 12px", fontWeight: 600, fontSize: "18px", lineHeight: "32px"}}> Prueba Logo </h1>
                        </a>
                    </div>
                    <div>
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: toggle,
                            }
                        )}
                    </div>
                    <div style={{ flex: "1 1 0%" }}></div>
                </div>
            </Header>
            <Layout className="site-layout">
                <AppRouter collapsed={collapsed}/>
            </Layout>
        </Layout>
    );
}

export default Design;