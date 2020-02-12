
const signer = require('./dist/signpdf').default;

function PDFSigner() {
  const signPdf = (option) => {
    return signer.signPdfReady(option);
  }
  
  return {
    signPdf
  }
}

module.exports = PDFSigner();