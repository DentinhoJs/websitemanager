module.exports = (req, res) => {
  const { action } = req.query;

  // Aqui você pode implementar a lógica para conectar com o Pterodactyl
  // e enviar os comandos start, stop, restart, etc.
  if (action === 'start') {
    // lógica para iniciar o servidor
    res.status(200).json({ success: true, message: 'Servidor iniciado.' });
  } else if (action === 'stop') {
    // lógica para parar o servidor
    res.status(200).json({ success: true, message: 'Servidor parado.' });
  } else if (action === 'restart') {
    // lógica para reiniciar o servidor
    res.status(200).json({ success: true, message: 'Servidor reiniciado.' });
  } else {
    res.status(400).json({ success: false, error: 'Ação inválida.' });
  }
};
