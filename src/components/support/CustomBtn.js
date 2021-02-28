import React from "react";
import styled from "styled-components";

export const CustomBtn = () => {
    
    const [buttonState, setButtonState] = React.useState(false);

    return (
        <CBtn
            onClick={() => setButtonState(!buttonState)}
            style={{ background: buttonState ? "red" : "green" }}
        >
            {buttonState ? "Фолс" : "Тру"}
        </CBtn>
    )
}

const CBtn = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: white;
    cursor: pointer;
    width: 10%;
    transition: .4s;

    :hover {
        width: 11%;
        font-size: 20px;
        box-shadow: 0 10px 15px -5px black;
        transition: .4s;
    }
`;