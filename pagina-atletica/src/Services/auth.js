export const TOKEN_KEY = "@atletica-token";
export const USER_ID_KEY = "@atletica-user_id";

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const getUserID = () => sessionStorage.getItem(USER_ID_KEY);

export const login = (data) => {
  const AccessToken = data.AccessToken;
  const user_ID = data.user[0].user_id;
  console.log(user_ID);
  sessionStorage.setItem(USER_ID_KEY, user_ID);
  sessionStorage.setItem(TOKEN_KEY, AccessToken);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_ID_KEY);
};