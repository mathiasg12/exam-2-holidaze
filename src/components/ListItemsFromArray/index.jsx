/**
 * small component that uses a prop to add the list text, had to have this in a seperat component to be able to add a key when its called
 * @param {props} props
 */
export function ListItems(props) {
  return <li>{props.value}</li>;
}
