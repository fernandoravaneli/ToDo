import styled from 'styled-components'

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#DD6F20' : '#23295E'};
    padding: 10px;
    cursor: pointer;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    img {
        width: 25px;
        height: 25px;
    }

    &:hover{
        background: #DD6F20;
    }

`