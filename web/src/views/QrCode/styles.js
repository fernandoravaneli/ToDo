import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;

    h1{
        color: #DD6F20;
    }
    p{
        color: #23295E;
    }
`
export const QrCode = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    span{
        text-transform: uppercase;
        font-weight: bold;
    }
    input{
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }
    button{
        font-weight: bold;
        background: #DD6F20;
        color: #FFF;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover{
            background: #23295E;
        }
    }

`