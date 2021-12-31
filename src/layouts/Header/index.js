import { Row, Col, Input, Button, Avatar, Menu, Affix } from 'antd'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { SearchOutlined, PhoneFilled, UserOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
    const [top, setTop] = useState(null)

    return (
        <div>
            <Row style={{ height: "30px", backgroundColor: "#CC204E", display: "flex", justifyContent: "center", verticalAlign: "middle" }}>
                <div style={{ color: "#fff" }}>Mỹ Phẩm và Thực Phẩm Chức Năng Từ Nhật Bản</div>
            </Row>

            <Affix >
                <div style={{ width: "100%" }}>
                    <div style={{ backgroundColor: "rgba(250,250,250,0.8)" }}>
                        <Row style={{
                            padding: "0 16px", margin: "0 136px", height: "90px", display: "flex", justifyContent: "space-around",
                            verticalAlign: "middle"
                        }}>
                            <Col>
                                <Link to="/">
                                    <img src={"./logo.png"} style={{ height: "72px", width: "200px", zIndex: 2, transition: 'opacity 1s', opacity: "1 !important" }} />
                                </Link>
                            </Col>
                            <Col style={{ display: "flex", verticalAlign: "middle", alignItems: 'center' }}>
                                <Input placeholder="Tìm Kiếm...." style={{ width: "419px", height: "32px", padding: 0, margin: 0, outline: 'none !important' }} />
                                <Button style={{ width: "36px", height: "32px", backgroundColor: "#CC204E", border: "0.01px solid #CC204E", color: "#fff" }}
                                    icon={<SearchOutlined style={{ fontSize: '24px', color: '#FFF', fontWeight: 600 }} />} />
                            </Col>
                            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center", left: "60px" }}>
                                <div style={{ margin: "0 16px", display: "flex" }} >
                                    <div style={{ margin: "0 auto" }}>
                                        <PhoneFilled rotate='90' style={{
                                            color: "#666666D9"
                                        }} />
                                    </div >
                                    <div style={{ color: "#666666D9", fontWeight: 600, margin: "0 0 0 5px" }}>
                                        1800555591
                                    </div>
                                </div>
                                <div style={{ margin: "0 auto" }}>
                                    <Avatar size={32} shape icon={<UserOutlined />} style={{ backgroundColor: "#CC204E" }} />
                                </div>
                                <div style={{ borderLeft: "1px solid rgba(0,0,0,0.1)", height: "30px", margin: "0 20px", fontWeight: 400 }} />
                            </Col>
                        </Row>
                    </div>
                    <Row style={{ height: "40px", backgroundColor: "#f1f1f1", display: "flex", justifyContent: "space-around", verticalAlign: "middle" }}>
                        <Col>
                            <Menu style={{
                                display: 'flex', margin: 0, padding: 0, backgroundColor: "#f1f1f1",
                                alignItems: "center", verticalAlign: "middle", lineHeight: "40px", cursor: "pointer"
                                , color: "rgba(102,102,102,0.85)", fontWeight: 700, letterSpacing: ".02em", textTransform: "uppercase",
                                outline: "none"
                            }}>
                                <Menu.Item key="1">Sản Phẩm</Menu.Item>
                                <Menu.Item key="2">Blogs</Menu.Item>
                                <Menu.Item key="3">Giới thiệu</Menu.Item>
                                <Menu.Item key="4">Sản Phẩm Nổi Bật</Menu.Item>
                                <Menu.Item key="5">Sản Phẩm Mới</Menu.Item>
                            </Menu>
                        </Col>
                        <Col style={{ display: "flex", alignItems: "center" }}>
                            <Button style={{
                                backgroundColor: "#CC204E", fontWeight: 600, textTransform: "uppercase", alignSelf: "center", width: "106px", height: "32px",
                                borderRadius: "6px", padding: "0 8px", margin: "0 2px", color: "#fff", outline: "none", border: "0.01px solid #CC204E"
                            }}
                            >
                                Yêu Thích <HeartFilled />
                            </Button>
                            <Button style={{
                                backgroundColor: "#CC204E", alignSelf: "center", fontWeight: 600, borderRadius: "6px",
                                padding: "0 8px", margin: "0 2px", width: "52px", height: "32px", color: "#fff", outline: "none", border: "0.01px solid #CC204E"
                            }}
                            >
                                0đ <ShoppingCartOutlined style={{ fontSize: "18px", margin: "auto" }} />
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Affix>
        </div >

    )
}

export default Header

