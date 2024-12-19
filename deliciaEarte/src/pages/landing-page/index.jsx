import * as S from "./styles";
import NavBar from "../../components/index";
function LandingPage() {
  return (
    <>
      <NavBar />
      <S.Section>
        <div>
          <h1>Sobre Nós</h1>
          <p>Aqui se fala sobre a empresa</p>
        </div>
        <div>
          <h1>Serviços</h1>
          <p>Aqui se fala sobre os serviços</p>
        </div>
        <div>
          <h1>Compre Aqui</h1>
          <p>Aqui se fala sogbre como comprar e também o contato</p>
        </div>
      </S.Section>

      {/* Colocar o Footer */}
    </>
  );
}
export default LandingPage;
