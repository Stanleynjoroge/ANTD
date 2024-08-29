import React from "react";
import { Menu, Layout, Button } from "antd";
import { NavigationsBottom, NavigationsTop } from "./Navigation";

const { Header, Sider, Content, Footer } = Layout;

const MyLayout = () => {
  return (
    <Layout
      style={{
        padding: "24px",
        margin: "20px",
        height: "calc(100vh - 64px)",
      }}
    >
      <Header
        style={{
          padding: 0,
          background: "white",
          position: "absolute",
          width: "100%",
          zIndex: 1000,
          borderBottom: "1px solid #333",
        }}
      ></Header>

      <Sider
        style={{
          display: "flex",
          alignItems:"space-evenly",
          gap:"100px",
          position: "sticky",
          marginTop: "60px",
          backgroundColor: "white",
        }}
        width={250}
      >
       
         <Menu
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "4px",
            backgroundColor: "white",
            fontWeight: 700,
          }}
          mode="inline"
          items={NavigationsTop}
        />
     
       
        
         <Menu
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf:"flex-end",
            marginBottom: "4px",
            backgroundColor: "white",
            fontWeight: 700,
            position: "-webkit-sticky",
          }}
          mode="inline"
          items={NavigationsBottom}
        />
       
       

       
      </Sider>

      <Layout style={{ padding: "24px 0" }}>
        <Content style={{ paddingTop: "50px" }}>Content</Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
