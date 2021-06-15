import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center
    align-items: center;
    text-align:center
    margin-top: 8rem;

    .homeText{
        display: flex;
        flex-direction: column;

        h2{
            margin-top: 8rem;
            text-align: center;
        }
    
        a{
            text-decoration: none;
            text-align: center;
            color: gray;
        }

        p{
            color: gray;
            text-align: center;
        }
        
    }


    .topBar{
        background: black;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .title{
            display: flex;
            flex-direction: row;
            align-items: center;
            jusify-conten; flex-start;

            h1{
                color: white;
                margin: 2rem;
            }

            .icon{
                color: yellow;
                font-size: 4rem;
            }
        }
        .links{

            a{
                color: gray;
                margin: 1rem;
                text-decoration: none;
            }

        }

       
    }

`
export default Container
