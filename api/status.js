module.exports = (req, res) => {
  // Aqui você pode obter o status do servidor Pterodactyl
  // e retornar se está "online", "offline", etc.
  const status = 'online'; // Isso é um exemplo; você deve substituir por lógica real.

  res.status(200).json({ status });
};
