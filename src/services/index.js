export const baseUrl = "https://ecommercev01.pythonanywhere.com";

const getToken = () => {
  return window.localStorage.getItem("token");
};
export const getCategory = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/categories/",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const getProducts = () => {
  const myHeaders = new Headers();
  getToken() && myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/list/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};

export const signUpFuc = (email, name, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    first_name: name,
    email_or_phone: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/user/register/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const loginFunc = (email, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email_or_phone: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/user/token/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getUserInfo = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/detail/",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateUser = (form) => {
  console.log(form);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const raw = JSON.stringify({
    first_name: form.firstName,
    last_name: form.lastName,
    email: form.email,
    phone: "+998934650604",
    address: form.address,
    password: "ergashalidev",
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/user/update-profile/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const FilterCategoryfunc = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/list/?category_id=${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};

export const addToWishlist = (id) => {
  const myHeaders = new Headers();

  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/action/add-to-wishlist/?product_id=${id}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};

export const delWishList = (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/action/remove-from-wishlist/?product_id=${id}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};
