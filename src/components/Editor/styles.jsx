import  styled  from 'styled-components' 

export const Container = styled.div`
    display: flex;
    justify-content: center;  
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.isDark ? '#63676f' : '#63676f'};
    font-family: 'Montserrat', monospace, sans-serif;
    `; 
    
    export const Editor = styled.div`
    width: 45%; 
    height: 90vh;
    
    padding-right: 4px;
    border-radius: 15px;
    margin: 4px;
    margin-right: 30px;
    background-color: ${props => props.isDark ? '#3E4B69' : '#262D40'};
    
    textarea {
        height: 88%;
        width: 99%;
        outline: none;
        border: none;
        border-radius: 0px 0px 15px 15px;
        font-size: 20px;
        color: ${props => props.isDark ? '#fff' : '#black'};
        background-color: ${props => props.isDark ? '#0e1524' : '#fff'};
        padding: 8px 0px 23px 10px;
        font-family: 'Montserrat', monospace, sans-serif;
    }

    button {
        margin: 10px;
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
    width: 45%; 
    height: 90vh;
    border-radius: 15px;
    margin: 4px 6px 4px 4px;  
    background-color: ${props => props.isDark ? '#3E4B69' : '#262D40'};
    text-align: left;
    color: ${props => props.isDark ? '#fff' : 'black'};
    font-size: 20px;
    padding-right: 4.9px;

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
                background-color: #4E27CF;
            }
        }

        .svgs {

            cursor: pointer;
        }
    }

    .Previewer-div {
        background-color: ${props => props.isDark ? '#0e1524' : '#fff'};
        width: 99%;
        height: 91.5%;
        padding: 8px 0px 0px 10px;
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
