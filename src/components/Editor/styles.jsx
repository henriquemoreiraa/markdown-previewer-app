import  styled  from 'styled-components' 

export const Container = styled.div`
    display: flex;
    justify-content: space-between;  
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.isDark ? '#BEC3D0' : '#080E1C'};
    font-family: 'Montserrat', monospace, sans-serif;
    `; 
    
    export const Editor = styled.div`
    width: 50%; 
    height: 95vh;
    
    padding-right: 4px;
    border-radius: 15px;
    margin: 4px;
    background-color: #3E4B69;
    
    textarea {
        height: 88%;
        width: 99%;
        outline: none;
        border: none;
        border-radius: 0px 0px 15px 15px;
        font-size: 20px;
        color: #fff;
        background-color: #080E1C;
        padding: 8px 0px 23px 10px;
        font-family: 'Montserrat', monospace, sans-serif;
    }

    button {
        margin: 10px;
    }

    .svg {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .svgs {
        cursor: pointer;
    }

    p {
        color: #fff;
        font-size: 18px;
        margin: 0;
        background-color: #4E27CF; 
        padding: 6px;
        text-align: center;
        border-radius: 15px;
    }
`;
    
    export const Previewer = styled.div`
    width: 50%; 
    height: 95vh;
    border-radius: 15px;
    margin: 4px;  
    background-color: ${props => props.isDark ? '#3E4B69' : '#262D40'};
    text-align: left;
    color: ${props => props.isDark ? '#fff' : 'black'};
    font-size: 20px;

    .svg {
        margin: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 39px;
            width: 39px;
            margin-right: 10px;
            border-radius: 50%;
            border: none;
            background-color: ${props => props.isDark ? '#3E4B69' : '#262D40'};

            &:hover {
                background-color: #34363bcb;
            }
        }

        .svgs {

            cursor: pointer;
        }
    }

    .Previewer-div {
        background-color: ${props => props.isDark ? '#080E1C' : '#fff'};
        width: 99%;
        height: 91.5%;
        padding: 8px 0px 7px 5px;
        border-radius: 0px 0px 15px 15px;
        overflow-y: scroll;
    }

    .PreviwerName {
        color: #fff;
        font-size: 18px;
        margin: 0;
        background-color: #4E27CF; 
        padding: 6px;
        text-align: center;
        border-radius: 15px;
    }
`;
