class ConversionPage {
    visit() {
        cy.visit("/");
    }

    // Notificações de ERRO
    errorMessage() {
        cy.contains("Erro ao converter arquivo!").should("be.visible");
    }
    noSuport() {
        cy.contains(
            "Tipo de arquivo não suportado. Aceitamos apenas DOC, DOCX, TXT, RTF ou ODT.").should("be.visible");
    }

    // Seleção de upload
    verifyUploadArea() {
        cy.get(".p-7").should("contain", "Click para carregar ou arraste e solte");
    }

    openUploadDialog() {
        cy.get(".text-white").click();
    }

    uploadFile(filePath) {
        cy.get('input[type="file"]').attachFile(filePath);
    }

    // Seleção do botões
    clickConvertButton() {
        cy.get('[type="submit"]').should("contain", "Converter").click();
    }

    clickDownloadLink() {
        cy.get(".text-blue-500").click();
    }

    waitForDownloadButton() {
        cy.get(".my-8 > .w-8", { timeout: 30000 }).should("be.visible");
    }

    // Seleção do tipo de conversão
    selectFilePDF() {
        cy.get(".text-sm > :nth-child(1) > .cursor-pointer").click();
    }

    selectFileDOC() {
        cy.get(":nth-child(2) > .cursor-pointer").click();
    }

    selectFileDOCX() {
        cy.get(":nth-child(3) > .cursor-pointer").click();
    }

    selectFileODT() {
        cy.get(":nth-child(4) > .cursor-pointer").click();
    }

    selectFileTXT() {
        cy.get(":nth-child(5) > .cursor-pointer").click();
    }

    selectFileRTF() {
        cy.get(":nth-child(6) > .cursor-pointer").click();
    }
}

export default new ConversionPage();
