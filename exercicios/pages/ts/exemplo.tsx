import Pessoa from "../../components/Pessoa";

export default function exemploTS(){
    return (
        <div>
            <Pessoa nome="Michael" idade={25}/>
            <Pessoa nome="Michael2"/>
        </div>
    )
}