export const getAllUsers = () => {
  const requestOptions = {
    method: "GET",
    headers: {"Authorization":localStorage.token},
  };

  return fetch(`https://admin.barbuddy.dev.gradlesol.com/app/order`, requestOptions)

}
