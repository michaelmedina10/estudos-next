export default function SomentePar(props) {
  if (props.numero % 2 === 0) {
    return <div>{props.numero}</div>;
  } else {
    return null;
  }
}
