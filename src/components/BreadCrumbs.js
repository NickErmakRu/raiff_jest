import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

export const BreadCrumbs = withRouter((props) => {
    const { location } = props;
    const breadCrumbTitleMap = {
        "/table": "Таблица",
    };

    const pathSnippet = location.pathname.split("/").filter(i => i);
    const extraBreadCrumbItems = pathSnippet.map((_, index) => {
        const url = `/${pathSnippet.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadCrumbTitleMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadCrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">FOXbg</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadCrumbItems);
    return (
        <Block>
            <Breadcrumb>{breadCrumbItems}</Breadcrumb>
        </Block>
    )
});

const Block = styled.div`
    display: flex;
    margin-bottom: 5px;
    text-align: left;
    align-items: center;

    /* unvisited link */
    a:link {
    color: black;
    }

    /* visited link */
    a:visited {
    color: black;
    }

    /* mouse over link */
    a:hover {
    color: black;
    }

    /* selected link */
    a:active {
    color: black;
    }
`;