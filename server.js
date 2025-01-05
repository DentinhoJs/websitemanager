const path = require('path'); // Importa o módulo path para trabalhar com caminhos

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '../frontend', 'index.html');
  res.sendFile(filePath);
};
