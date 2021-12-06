module.exports = (req, res, next) => {
  const {email, password} = req.body;
  const rePassword = /^[0-9]\w{4,8}$/;

  const token = '86567349784e';

  if (!(email.includes('@') && email.includes('.com'))) {
    return res.status(400).json({ message: 'invalid email' })
  }

  if (!rePassword.test(password)) return res.status(400).json({ message: 'invalid password'});

  return res.status(200).json({'token': token})/
}