import { createGlobalStyle } from 'styled-components';
const CustomGlobalStyles = createGlobalStyle`
body{
    background-color: #ECECEC;
}
main{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
`;
export default CustomGlobalStyles;
