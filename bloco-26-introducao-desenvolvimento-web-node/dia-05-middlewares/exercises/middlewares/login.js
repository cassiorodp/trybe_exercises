module.exports = (req, res, _next) => {
  const { username, email, password } = req.body;
  const rePassword = /^[0-9]\w{4,8}$/;

  if (username.length < 3) return res.status(400).json({message: 'invalid username'});
  
  if (!(email.includes('@') && email.includes('.com'))) {
    return res.status(400).json({ message: 'invalid email' })
  }

  if (!rePassword.test(password)) return res.status(400).json({ message: 'invalid password'});

  return res.status(201).json({ message: 'user created' });

}