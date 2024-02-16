url =
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448";

const fetchData = async () =>
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      vendor.innerHTML = response.product.vendor;
      title.innerHTML = response.product.title;
      price.innerHTML = response.product.price;
      description.innerHTML = response.product.description;
    })
    .then((err) => console.log(err));

fetchData();

function handleClick() {
  document.querySelector(".dismess").innerHTML =
    "Embrace sideboard of color yellow and size small added to cart";
  document.querySelector("#message").style.visibility = "visible";
}
