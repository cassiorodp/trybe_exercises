const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = async (userID) => {
  const foundUser = await findUserById(userID)
  return foundUser.name
};

describe('Test cases for Found Users & not Found Users by theirs id', () => {
  it('Should return Mark user', async () => {
    const user = await getUserName(4)
    expect(user).toBe('Mark')
  })

  it('Should return Paul user', async () => {
    const user = await getUserName(5)
    expect(user).toBe('Paul')
  })

  it('Should return an error', async () => {
    try {
      await getUserName(2000)
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2000 not found.' })
    }
  })
})