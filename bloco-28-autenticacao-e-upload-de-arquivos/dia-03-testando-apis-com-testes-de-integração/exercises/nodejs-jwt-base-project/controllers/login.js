const User = require('../models/user');
const jwt = require('jsonwebtoken');

const secret = 'mySecretToken';

module.exports = async (req, res) => {
  try {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);
  console.log(user, 'user');

  if (!user || user.password !== password)
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const { password: _password, ...userWithoutPassword } = user;

  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

  return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
