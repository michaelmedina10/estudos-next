import Contador from "../../components/Contador";
import { Component } from "react";

export default class ContadorPage extends Component {
  render() {
    return (
      <div>
        <Contador valorInicial={100} />
      </div>
    );
  }
}
