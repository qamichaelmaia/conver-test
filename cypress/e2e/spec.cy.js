import 'cypress-file-upload';

describe('My First Test', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.log('**Brandding page**')
        cy.get('.pt-5').should('contain', 'De um formato a outro, a conversão nunca foi tão fácil!')
    });

        // Função para esperar pelo botão de download
        function waitForDownloadButton() {
            cy.get('.my-8 > .w-8', { timeout: 30000 }) // Espera até que o botão de download apareça
              .should('be.visible');
        }

    it('Deve aparecer ERRO ao tentar enviar um arquivo não suportado', () => {
        cy.get('.text-white').click();
        const filePath = 'files/1.pdf'; 
        cy.get('input[type="file"]').attachFile(filePath);
        cy.contains('Tipo de arquivo não suportado. Aceitamos apenas DOC, DOCX, TXT, RTF ou ODT.').should('be.visible');

    });

    it('Deve aparecer ERRO ao tentar converter arquivo DOT', () => {
        cy.get('.text-white').click();
        const filePath = 'files/1.dot'; 
        cy.get('input[type="file"]').attachFile(filePath);
        cy.log('**Não deveria ser possível enviar arquivo DOT**')
        cy.get(':nth-child(6) > .cursor-pointer').click()
        cy.get('[type="submit"]').click()
        cy.contains('Erro ao converter arquivo!').should('be.visible');

    });
    it('Deve carregar arquivo DOC e converter para PDF', () => {
        cy.get('.p-7').should('contain', 'Click para carregar ou arraste e solte');
        cy.get('.text-white').click();
        cy.get('.text-sm > :nth-child(1) > .cursor-pointer').click();

        // Define o caminho do arquivo para upload
        const filePath = 'files/1.doc';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('[type="submit"]').should('contain', 'Converter');
        cy.get('[type="submit"]').click()
        
        // Espera pelo botão de download aparecer
        waitForDownloadButton(); 
        cy.get('.text-blue-500').click();
        cy.get('.my-8 > .w-8').should('be.visible');
    });

    it('Deve carregar arquivo RTF e converter para DOC', () => {
        cy.get('button > .w-8').click()
        cy.get('.p-7').should('contain', 'Click para carregar ou arraste e solte');
        cy.get('.text-white').click();
        cy.get(':nth-child(2) > .cursor-pointer').click();

        const filePath = 'files/1.rtf';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('[type="submit"]').should('contain', 'Converter');
        cy.get('[type="submit"]').click()
        
        waitForDownloadButton(); 
        cy.get('.text-blue-500').click();
        cy.get('.my-8 > .w-8').should('be.visible');
    });

    it('Deve carregar arquivo TXT e converter para DOCX', () => {
        cy.get('.p-7').should('contain', 'Click para carregar ou arraste e solte');
        cy.get('.text-white').click();
        cy.get(':nth-child(3) > .cursor-pointer').click();

        const filePath = 'files/1.txt';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('[type="submit"]').should('contain', 'Converter');
        cy.get('[type="submit"]').click()
        
        waitForDownloadButton(); 
        cy.get('.text-blue-500').click();
        cy.get('.my-8 > .w-8').should('be.visible');
    });
    it('Deve carregar arquivo RTF e converter para ODT', () => {
        cy.get('.p-7').should('contain', 'Click para carregar ou arraste e solte');
        cy.get('.text-white').click();
        cy.get(':nth-child(4) > .cursor-pointer').click();

        const filePath = 'files/1.rtf';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('[type="submit"]').should('contain', 'Converter');
        cy.get('[type="submit"]').click()
        
        waitForDownloadButton(); 
        cy.get('.text-blue-500').click();
        cy.get('.my-8 > .w-8').should('be.visible');
    });

    it('Deve carregar arquivo DOCX e converter para TXT', () => {
        cy.get('.p-7').should('contain', 'Click para carregar ou arraste e solte');
        cy.get('.text-white').click();
        cy.get(':nth-child(5) > .cursor-pointer').click();

        const filePath = 'files/1.docx';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('[type="submit"]').should('contain', 'Converter');
        cy.get('[type="submit"]').click()
        
        waitForDownloadButton(); 
        cy.get('.text-blue-500').click();
        cy.get('.my-8 > .w-8').should('be.visible');
    });

    it('Deve carregar arquivo TXT e converter para RTF', () => {
        cy.get('.p-7').should('contain', 'Click para carregar ou arraste e solte');
        cy.get('.text-white').click();
        cy.get(':nth-child(6) > .cursor-pointer').click();

        const filePath = 'files/1.txt';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('[type="submit"]').should('contain', 'Converter');
        cy.get('[type="submit"]').click()
        
        waitForDownloadButton(); 
        cy.get('.text-blue-500').click();
        cy.get('.my-8 > .w-8').should('be.visible');
    });
});
