import { createGlobalStyle } from 'styled-components';
import '../styles/fonts.css';
const CustomGlobalStyles = createGlobalStyle`
p,label,input,textarea{
    font-family: DroidSans;
}
h1,h2,h3,h4,h5,h6,a,button{
    font-family: Lato-regular;
}
h1{
    font-size: 2.5em;
}
h3{
    font-size:1.25em;
}
body{
    background-color: #ECECEC;
}
main{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
input[type='checkbox'] {
    width: 18px;
    height: 18px;
    margin-left: 0;

  }
  input[type='checkbox']:checked {
    accent-color: var(--custom-yellow);
  }
 input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}
a{
    color:black;
}
`;
export default CustomGlobalStyles;
