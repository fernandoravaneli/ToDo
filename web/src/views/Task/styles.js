import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    input{
        font-size: 16px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #DD6F20;

    }

    input[type="time"]::-webkit-calendar-picker-indicator,
    input[type="date"]::-webkit-calendar-picker-indicator
    {
    position: relative;
    width: 50%;
    height: 30px;
    right: -12px;
    top: 5px;
    opacity: 0;
    /* background-color: red; */
    cursor: pointer; 
    }

    img{
        width: 20px;
        height: 20px;
        position: relative;
        left: 93.5%;
        top: 46px;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;    
    span{
        color: #707070;
        margin: 5px 0;
    }

    textarea{
        font-size: 16px;
        border: 1px solid #DD6F20;
        border-radius: 5px;
        padding: 5px;

    }
`
export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #23295E;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
            display: flex;
            align-items: center;
            color: #DD6F20;
            font-weight: bold;
            font-size: 18px;
        }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #DD6F20;
        font-weight: bold;
        font-size: 20px;
        color: #FFF;
        border: none;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`