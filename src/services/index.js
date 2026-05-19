export const baseUrl = "https://ecommercev01.pythonanywhere.com";

const getToken = () => window.localStorage.getItem("token");

// ─── Category ───────────────────────────────────────────────
export const getCategory = async () => {
  try {
    const res = await fetch(`${baseUrl}/product/categories/`);
    return await res.json();
  } catch (err) {
    console.error("getCategory:", err);
  }
};

// ─── Products ───────────────────────────────────────────────
export const getProducts = async () => {
  try {
    const headers = new Headers();
    if (getToken()) headers.append("Authorization", `Bearer ${getToken()}`);
    const res = await fetch(`${baseUrl}/product/list/`, { headers });
    return await res.json();
  } catch (err) {
    console.error("getProducts:", err);
  }
};

// ─── Auth ────────────────────────────────────────────────────
export const signUpFuc = async (email, name, password) => {
  try {
    const res = await fetch(`${baseUrl}/user/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name: name, email_or_phone: email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("signUp:", err);
  }
};

export const loginFunc = async (email, password) => {
  try {
    const res = await fetch(`${baseUrl}/user/token/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email_or_phone: email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("login:", err);
  }
};

// ─── User ────────────────────────────────────────────────────
export const getUserInfo = async () => {
  try {
    const res = await fetch(`${baseUrl}/user/detail/`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return await res.json();
  } catch (err) {
    console.error("getUserInfo:", err);
  }
};

export const updateUser = async (form) => {
  try {
    const res = await fetch(`${baseUrl}/user/update-profile/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: "+998934650604",
        address: form.address,
        password: "ergashalidev",
      }),
    });
    return await res.json();
  } catch (err) {
    console.error("updateUser:", err);
  }
};

// ─── Product Detail ─────────────────────────────────────────
// properties: { color: [...], size: [...] } — ba'zilarida yo'q
// pictures: [ { file, as_main }, ... ]
export const getProductDetail = async (productId) => {
  try {
    const res = await fetch(
      `${baseUrl}/product/detail/?product_id=${productId}`
    );
    return await res.json();
  } catch (err) {
    console.error("getProductDetail:", err);
    return null;
  }
};
export const FilterCategoryfunc = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/product/list/?category_id=${id}`);
    return await res.json();
  } catch (err) {
    console.error("FilterCategory:", err);
  }
};

// ─── Wishlist ────────────────────────────────────────────────
export const addToWishlist = async (id) => {
  try {
    const res = await fetch(
      `${baseUrl}/action/add-to-wishlist/?product_id=${id}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    return await res.json();
  } catch (err) {
    console.error("addToWishlist:", err);
  }
};

export const delWishList = async (id) => {
  try {
    const res = await fetch(
      `${baseUrl}/action/remove-from-wishlist/?product_id=${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    return await res.json();
  } catch (err) {
    console.error("delWishList:", err);
  }
};


// ADD TO CART

export const addToCart = async (
  productId,
  quantity,
  selectedProps = {}
) => {

  const token =
    getToken();


  if (!token) {

    throw new Error(
      "Avval login qiling"
    );

  }


  const body = {

    product_id:
      productId,

    quantity:
      quantity

  };


  if (

    Object.keys(
      selectedProps
    ).length > 0

  ) {

    body.properties =
      selectedProps;

  }


  console.log(
    "Request:",
    body
  );


  try {

    const res =
      await fetch(

        `${baseUrl}/order/add-to-cart/`,

        {

          method:
            "POST",

          headers: {

            "Content-Type":
              "application/json",

            Authorization:

              `Bearer ${token}`

          },


          body:
            JSON.stringify(
              body
            )

        }

      );


    const data =

      await res.json()

      .catch(

        ()=>({})

      );


    console.log(

      "Response:",

      res.status,

      data

    );



    if (

      !res.ok

    ) {

      throw new Error(

        data.detail ||

        JSON.stringify(
          data
        ) ||

        "Cartga qo‘shib bo‘lmadi"

      );

    }


    return data;

  }


  catch(error){

    console.error(

      "AddToCart:",

      error

    );


    throw error;

  }

};

export const getCart = async () => {
  const token = getToken();
  if (!token) return [];

  try {
    const res = await fetch(`${baseUrl}/order/cart-items/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log("getCart →", res.status, data);
    return data;
  } catch (err) {
    console.error("getCart:", err);
    return [];
  }
};

// Cart dan mahsulot o'chirish
// API: DELETE /order/remove-from-cart?cart_item_id={id}
export const removeFromCart = async (cartItemId) => {
  const token = getToken();
  if (!token) throw new Error("NO_TOKEN");

  const res = await fetch(
    `${baseUrl}/order/remove-from-cart?cart_item_id=${cartItemId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  console.log("removeFromCart →", res.status);

  // 204 No Content — muvaffaqiyatli, body yo'q
  if (res.status === 204) return { success: true };

  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data;
};
