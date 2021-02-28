import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Layout, Typography, Table, Tag, Space } from "antd";
import { BreadCrumbs } from "./BreadCrumbs";

const { Content, Header } = Layout;
const { Text } = Typography;

export function TestTable() {

    const [characterName, setCharacterName] = React.useState("");

    React.useEffect(() => {
        axios("https://swapi.dev/api/people/1/")
            .then(res => {
                setCharacterName(res.data.name);
            });
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: <div>Address</div>,
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
    ];
      
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    
    return (
        <Container>
            <HeaderBlock>
                <BreadCrumbs />
                <Text>Данные</Text>
            </HeaderBlock>
            <div style={{ margin: "24px 0" }}>
                Тут у нас имя: {characterName}
            </div>
            <Table bordered={true} columns={columns} dataSource={data} />
        </Container>
    )
}

const Container = styled(Content)`
    background-color: #f1f4f4;
    height: 100vh;
    padding: 24px 104px;
    display: flex;
    flex-direction: column;

    // th.ant-table-cell {
    //     resize: horizontal;
    //     overflow: auto;
    // }
`;
const HeaderBlock = styled(Header)`
    background-color: #f1f4f4;
    font-size: 18px;
    text-align: left;
    padding: 0;
`;