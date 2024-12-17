import styled from "styled-components";
export const Section = styled.div`
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  /* Estilos padrão (Mobile First) */
  header {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 15px;
  }

  main {
    display: block;
    padding: 10px;
  }

  .content {
    background: white;
    margin: 10px 0;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }

  /* Ajustes para tablets (a partir de 768px) */
  @media (min-width: 768px) {
    main {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    .content {
      flex: 1;
      margin: 0;
    }

    header {
      font-size: 1.5rem;
    }
  }

  /* Ajustes para desktops (a partir de 1024px) */
  @media (min-width: 1024px) {
    body {
      max-width: 1200px;
      margin: 0 auto;
    }

    header {
      font-size: 2rem;
      padding: 20px;
    }

    main {
      gap: 30px;
    }

    .content {
      padding: 20px;
    }
  }
`;
