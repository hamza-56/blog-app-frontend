export const getAuthHeader = () => {
  const accessToken = localStorage.getItem('jwtToken');

  if (accessToken) {
    return { Authorization: `Bearer ${accessToken}` };
  } else {
    return {};
  }
};
