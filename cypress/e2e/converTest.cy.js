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

    it('Deve aparecer ERRO ao tentar converter arquivo DOT', () => {
        conversionPage.openUploadDialog();

        const filePath = 'files/1.dot'; 
        conversionPage.uploadFile(filePath);
        cy.log('**Não deveria ser possível enviar arquivo DOT**');
        conversionPage.selectFileRTF();
        conversionPage.clickConvertButton();
        conversionPage.errorMessage();

    });
    it('Deve carregar arquivo DOC e converter para PDF', () => {
        conversionPage.verifyUploadArea();//Verificação de boas-vindas
        conversionPage.openUploadDialog();//Seleção de caixa de arquivo

        const filePath = 'files/1.doc';// Define o caminho do arquivo para upload
        conversionPage.uploadFile(filePath);
    
        conversionPage.selectFilePDF();// Opção de conversão
        conversionPage.clickConvertButton();
    
        conversionPage.waitForDownloadButton();// Espera pelo botão de download aparecer
        conversionPage.clickDownloadLink();
    });
    
    it('Deve carregar arquivo RTF e converter para DOC', () => {
        conversionPage.openUploadDialog();
    
        const filePath = 'files/1.rtf';// Define o caminho do arquivo para upload
        conversionPage.uploadFile(filePath);
    
        conversionPage.selectFileDOC();
        conversionPage.clickConvertButton();
    
        conversionPage.waitForDownloadButton();// Espera pelo botão de download aparecer
        conversionPage.clickDownloadLink();
    });
    

    it('Deve carregar arquivo TXT e converter para DOCX', () => {
        conversionPage.openUploadDialog();
        
        const filePath = 'files/1.txt';
        conversionPage.uploadFile(filePath);

        conversionPage.selectFileDOCX();
        conversionPage.clickConvertButton();

        conversionPage.waitForDownloadButton();
        conversionPage.clickDownloadLink();
    });
    it('Deve carregar arquivo RTF e converter para ODT', () => {
        conversionPage.openUploadDialog();

        const filePath = 'files/1.rtf';
        conversionPage.uploadFile(filePath);

        conversionPage.selectFileODT();
        conversionPage.clickConvertButton();

        conversionPage.waitForDownloadButton();
        conversionPage.clickDownloadLink();
    });

    it('Deve carregar arquivo DOCX e converter para TXT', () => {
        conversionPage.openUploadDialog();

        const filePath = 'files/1.docx';
        conversionPage.uploadFile(filePath);

        conversionPage.selectFileTXT();
        conversionPage.clickConvertButton();

        conversionPage.waitForDownloadButton();
        conversionPage.clickDownloadLink();
    });

    it('Deve carregar arquivo TXT e converter para RTF', () => {
        conversionPage.openUploadDialog();

        const filePath = 'files/1.txt';
        conversionPage.uploadFile(filePath);

        conversionPage.selectFileRTF();
        conversionPage.clickConvertButton();

        conversionPage.waitForDownloadButton();
        conversionPage.clickDownloadLink();
    });
});
