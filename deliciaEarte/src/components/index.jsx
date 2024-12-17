import * as S from "./styles";
import logoTeste from "../assets/logoTeste.png";
function navBar() {
  return (
    <>
      <S.Section>
        <div className="navBar">
          <div className="img">
            <img src={logoTeste} alt="logo teste" />
          </div>
          <div className="texto">
            <h1>Sobre Nós</h1>
            <h1>Serviços</h1>
            <h1>Contato</h1>
            <h1>Compre Aqui</h1>
          </div>
        </div>
      </S.Section>
    </>
  );
}
export default navBar;
