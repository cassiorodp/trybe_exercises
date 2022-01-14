const Model = require('../models/user')

module.exports = async (req, res) => {
  console.log(req.user, 'req.user');
  if (req.params.userId != req.user._id) {

    res.status(401).json({ error: 'Acesso negado' });
  }

  const {
    name,
    username,
    birthdate,
    biography
  } = await Model.findUserById(req.params.userId);

  return res.status(200).json({
    name,
    username,
    birthdate,
    biography,
  });
};
