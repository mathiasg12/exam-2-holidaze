import { createGlobalStyle } from 'styled-components';
import '../styles/fonts.css';
const CustomGlobalStyles = createGlobalStyle`
p,label{
    font-family: DroidSans;
}
h1,h2,h3,h4,h5,h6,a,button{
    font-family: Lato-regular;
}
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
