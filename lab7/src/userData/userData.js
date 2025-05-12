export const getUsers = () => {
  const saved = localStorage.getItem('usersData');
  return saved ? JSON.parse(saved) : [];
};

export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('usersData', JSON.stringify(users));
};