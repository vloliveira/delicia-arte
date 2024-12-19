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
            <a href="sobre">Sobre Nós</a>
            <a href="servicos">Serviços</a>
            <a href="compre">Compre Aqui</a>
          </div>
        </div>
      </S.Section>
    </>
  );
}
export default navBar;
