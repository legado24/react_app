import React, { Suspense } from "react";
import Layout, { Header, Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Outlet, Route, Routes } from "react-router";
import { Home } from "./home/Home";
import { Affix, BackTop, Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { HeaderFloat } from "../components/HeaderFloat";
export const Main = () => {
  return (
    <Layout className="layout">
      <Header>header</Header>
      <Layout>
        <Affix>
          <HeaderFloat />
        </Affix>
        <Sider>left sidebar</Sider>
        <Content>
          <Suspense>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
          main content
          <BackTop>
            <Button type="primary" shape="circle" icon={<ArrowUpOutlined />} />
          </BackTop>
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};
