import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Col, Row, Card, Layout, Typography } from "antd";
import { BreadCrumbs } from "./BreadCrumbs";
import Chameleon from "../icons/chameleon.svg";

const { Content, Header } = Layout;
const { Meta } = Card;
const { Text } = Typography;

export function MainPage() {
    return (
        <Container>
            <HeaderBlock>
                <BreadCrumbs />
                <Text>Привет! Рады встрече!</Text>
            </HeaderBlock>
            <div style={{ marginTop: "24px" }}>
                <Row gutter={[16, 16]}>
                    <Col span={9}>
                        <Link to="/table">
                            <Item
                                hoverable
                                bodyStyle={{ padding: 0 }}
                                cover={<Icon alt="icon" src={ Chameleon } style={{ margin: "auto" }} />}
                            >
                                <TextItem 
                                    title="ГЛАВНАЯ ВКЛАДКА" 
                                    description="Какая-то очень важная информация"
                                />
                            </Item>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
};

const Container = styled(Content)`
    background-color: #f1f4f4;
    height: 100vh;
    padding: 24px 104px;
    display: flex;
    flex-direction: column;
`;
const HeaderBlock = styled(Header)`
    background-color: #f1f4f4;
    font-size: 18px;
    text-align: left;
    padding: 0;
`;
const Item = styled(Card)`
    width: 27, 5%;
    padding: 28px 105px;
    background-color: white;
`;
const TextItem = styled(Meta)`
    padding: 20px 0 0 0;
`;
const Icon = styled.img`
    width: 185px;
    height: 185px;
`;