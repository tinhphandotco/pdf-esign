const path = require('path');
const { signPdf } = require('./main')


signPdf({
  path_to_p12_certificate: path.resolve(__dirname, './cert', 'report-bill-server-certificate.p12'),
  pass_p12_certificate: '123123',
  filePath: path.resolve(__dirname, './w3dummy.pdf'),
  storagePath: path.resolve(__dirname),
  filename: 'w3dummy-signed.pdf',
  reason: 'TPV Hub sign the PDF',
  signatureInfo: {
    email: 'tinh.phan.v@gmail.com',
    location: 'Da Nang, Vietnam',
    name: 'TPV HUB',
  }
});

