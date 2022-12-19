import { Container } from "./styles";


export default function Solicitar(){
    return (
        <Container>
            <div className="text-solicitar">
            Para fazer parte deste clube é fácil, basta fazer a sua
            solicitação e começar a aproveitar as vantagens!
            </div>
            <button className="btn-solicitar"><a href="#">Solicitar</a></button>
        </Container>
    )
} 