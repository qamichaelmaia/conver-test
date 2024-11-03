![alt text](image.png)
# Projeto de Testes Automatizados - Conversão de Arquivos

Este projeto foi desenvolvido para automatizar testes de um site de conversão de arquivos, garantindo que diferentes formatos de arquivo sejam corretamente carregados e convertidos. Utilizando **Cypress**, este projeto implementa uma estrutura organizada de testes com **Page Objects** e relatórios gerados com **Mocha Report**.

## Ferramentas e Tecnologias Utilizadas

- **Cypress**: Uma poderosa ferramenta de teste de front-end para aplicações web, que permite a automação de testes de integração e end-to-end.
- **Cypress File Upload**: Um plugin do Cypress que simplifica o processo de upload de arquivos durante os testes.
- **Page Objects**: Um padrão de design que organiza o código dos testes, tornando-o mais legível e reutilizável.
- **Mocha Report**: Um sistema de relatórios que fornece uma visualização clara dos resultados dos testes executados.

## Estrutura de Testes

Os testes são organizados em um arquivo de especificação onde cada teste é escrito de forma clara e concisa. A seguir, um resumo dos principais testes implementados:

1. **Teste de Arquivo Não Suportado**: Verifica se o sistema exibe um erro ao tentar enviar um arquivo que não é suportado.
2. **Teste de Arquivo DOT**: Confirma que a conversão de arquivos no formato DOT não é permitida e que uma mensagem de erro é exibida.
3. **Conversão de Arquivos Vários**: Testa a conversão de diferentes formatos de arquivo, como DOC para PDF, RTF para DOC, TXT para DOCX, entre outros, verificando se o download é disponibilizado após a conversão.

## Exemplo de Código

Aqui está um exemplo de como os testes são estruturados no projeto:

```javascript
import 'cypress-file-upload';
import conversionPage from './pages/conversionPage';

describe('Teste de Conversão de arquivos', () => {

    beforeEach(() => {
        conversionPage.visit();
        cy.log('**Opening Page**');
        cy.get('.pt-5').should('contain', 'De um formato a outro, a conversão nunca foi tão fácil!');
    });

    it('Deve aparecer ERRO ao tentar enviar um arquivo não suportado', () => {
        conversionPage.openUploadDialog();
        const filePath = 'files/1.pdf'; 
        conversionPage.uploadFile(filePath);
        conversionPage.noSuport();
    });

    // Outros testes...
});
