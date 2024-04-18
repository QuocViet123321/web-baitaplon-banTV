// document.designMode = "on"
// GENERAL
const listProduct = [
  {
    id: 0,
    name: "Smart Tivi 4K Sony KD-43X75K 43 inch Google TV",
    image: "../IMG/Tivi/tivi1.jpg",
    hangsx: "Sony",
    Xuatxu: "Trung Quốc",
    Gia: 12000000,
    sale: 0,
    luotmua: 3,
  },
  {
    id: 1,
    name: "Smart Tivi LG 4K 55 inch 55UQ8000PSC ThinQ AI",
    image: "../IMG/Tivi/tivi2.jpg",
    hangsx: "LG",
    Xuatxu: "Hàn Quốc",
    Gia: 11490000,
    sale: 0,
    luotmua: 1,
  },
  {
    id: 2,
    name: "QLED Tivi 4K Samsung 55Q70C 55 inch Smart TV",
    image: "../IMG/Tivi/tivi3.jpg",
    hangsx: "Samsung",
    Xuatxu: "Hàn Quốc",
    Gia: 16990000,
    sale: 0,
    luotmua: 12,
  },
  {
    id: 3,
    name: "OLED Tivi 4K Samsung 77 inch 77S90C Smart TV",
    image: "../IMG/Tivi/tivi4.png",
    hangsx: "Samsung",
    Xuatxu: "Việt Nam",
    Gia: 69900000,
    sale: 0,
    luotmua: 1,
  },
  {
    id: 4,
    name: "OLED Tivi 4K Sony 55 inch 55A80K Google TV",
    image: "../IMG/Tivi/tivi5.jpg",
    hangsx: "Sony",
    Xuatxu: "Mỹ",
    Gia: 33990000,
    sale: 0,
    luotmua: 8,
  },
  {
    id: 5,
    name: "Smart Tivi 4K Sony KD-55X85K 55 inch Google TV",
    image: "../IMG/Tivi/tivi6.jpg",
    hangsx: "Sony",
    Xuatxu: "Mỹ",
    Gia: 16490000,
    sale: 0,
    luotmua: 15,
  },
  {
    id: 6,
    name: "Smart Tivi Sony 32 inch KD-32W830K",
    image: "../IMG/Tivi/tivi7.jpg",
    hangsx: "Sony",
    Xuatxu: "Việt Nam",
    Gia: 10990000,
    sale: 0,
    newPrice: 0,
    luotmua: 10,
  },
  {
    id: 7,
    name: "OLED Tivi 4K Sony 55 inch 55A80J Google TV",
    image: "../IMG/Tivi/tivi8.jpg",
    hangsx: "Sony",
    Xuatxu: "Trung Quốc",
    Gia: 27900000,
    sale: 0,
    newPrice: 13500000,
    luotmua: 11,
  },
  {
    id: 8,
    name: "Smart Tivi LG 4K 55 inch 55UP7550PTC ThinQ AI",
    image: "../IMG/Tivi/tivi9.jpg",
    hangsx: "LG",
    Xuatxu: "Trung Quốc",
    Gia: 9490000,
    sale: 0,
    newPrice: 4000000,
    luotmua: 19,
  },
  {
    id: 9,
    name: "QLED Tivi 4K Samsung 55Q60B 55 inch Smart TV",
    image: "../IMG/Tivi/tivi10.jpg",
    hangsx: "Samsung",
    Xuatxu: "Mỹ",
    Gia: 18000000,
    sale: 1,
    newPrice: 39000000,
    luotmua: 1,
  },
  {
    id: 10,
    name: "OLED Tivi 4K LG 55 inch 55A2PSA ThinQ AI",
    image: "../IMG/Tivi/tivi11.jpg",
    hangsx: "LG",
    Xuatxu: "Việt Nam",
    Gia: 80000000,
    sale: 0,
    newPrice: 4000000,
    luotmua: 3,
  },
  {
    id: 11,
    name: "Smart Tivi LG 4K 55 inch 55UR8050PSB ThinQ AI",
    image: "../IMG/Tivi/tivi12.jpg",
    hangsx: "LG",
    Xuatxu: "Việt Nam",
    Gia: 4000000,
    sale: 1,
    newPrice: 10490000,
    luotmua: 22,
  },
  {
    id: 12,
    name: "Smart Tivi LG 4K 55 inch 55UQ7550PSF ThinQ AI",
    image: "../IMG/Tivi/tivi13.jpg",
    hangsx: "LG",
    Xuatxu: "Hàn Quốc",
    Gia: 4000000,
    sale: 1,
    newPrice: 10990000,
    luotmua: 32,
  },
  {
    id: 13,
    name: "QNED Tivi 4K LG 55 inch 55QNED80SRA ThinQ AI",
    image: "../IMG/Tivi/tivi14.jpg",
    hangsx: "LG",
    Xuatxu: "Mỹ",
    Gia: 6000000,
    sale: 1,
    newPrice: 13990000,
    luotmua: 14,
  },
  {
    id: 14,
    name: "Sony Tivi 4K LG 50 inch 50NANO80SQA ThinQ AI",
    image: "../IMG/Tivi/tivi15.jpg",
    hangsx: "Sony",
    Xuatxu: "Mỹ",
    Gia: 8990000,
    sale: 0,
    newPrice: 4000000,
    luotmua: 6,
  },
  {
    id: 15,
    name: "Smart Tivi Sony 4K 65 inch 65UR7550PSC ThinQ AI",
    image: "../IMG/Tivi/tivi16.jpg",
    hangsx: "Sony",
    Xuatxu: "Trung Quốc",
    Gia: 5990000,
    sale: 1,
    newPrice: 12290000,
    luotmua: 6,
  },
];
const listProductCart = [];

// HEADER
const listItem = document.getElementsByClassName("dropdown-item");
for (i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", () => {
    for (j = 0; j < listItem.length; j++) {
      listItem[j].classList.remove("actived");
    }
  });
}
// POPOVER
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

//   // FINDBAR
document.getElementById("searchBar").addEventListener("input", (e) => {
  const resultFind = e.target.value;
  const resultArray = listProduct.filter((product) => {
    return (
      product.name.toLowerCase().includes(resultFind.trim().toLowerCase()) ||
      product.hangsx
        .toLocaleLowerCase()
        .includes(resultFind.trim().toLocaleLowerCase())
    );
  });
  const html = resultArray.map((product) => {
    return `<div class="col-6 col-md-4 col-lg-3">
            <div class="card">
                <img src="${product.image}" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <div class="card-des mt-3">
                       
                        <p class="card-price">
                            Giá:
                            <span class="text-danger">
                                ${product.Gia.toLocaleString("vi-VN")}
                            </span>
                        </p>
                        <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px;">
    
                        <span></span>
                        </p>
                    </div>

                </div>
            </div>
        </div>`;
  });

  productElement.innerHTML = html.join("\n");
  showDetailProduct();
  RenderItemsCart();
});

// PRODUCT

//RENDER
const productElement = document.getElementsByClassName("product")[0];
const htmls = listProduct.map((product) => {
  return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                 
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px;">
    
                        
                        </p>
              </div>
              
          </div>
      </div>
  </div>`;
});
productElement.innerHTML = htmls.join("\n");
showDetailProduct();
// Danh Muc Sale Product
renderSaleProduct();
function renderSaleProduct() {
  const listSaleProduct = listProduct.filter((product) => {
    return product.sale == 1;
  });

  showSaleProduct(listSaleProduct);

  const ctRight = document.getElementsByClassName("sale-control-right")[0];
  const ctLeft = document.getElementsByClassName("sale-control-left")[0];

  ctRight.addEventListener("click", () => {
    if (listSaleProduct.length > 4) {
      showSaleProduct(listSaleProduct);
      listSaleProduct.push(listSaleProduct[0]);
      listSaleProduct.shift();
    }
  });

  ctLeft.addEventListener("click", () => {
    if (listSaleProduct.length > 4) {
      showSaleProduct(listSaleProduct);
      listSaleProduct.unshift(listSaleProduct[listSaleProduct.length - 1]);
      listSaleProduct.pop();
    }
  });
}

function showSaleProduct(listSaleProduct) {
  let htmls = "";
  for (i = 0; i < 4; i++) {
    htmls += `<div class="col-6 col-md-4 col-lg-3 product-sale-item mt-4">
      <div class="card mt-1 product-sale" >
          <img src="${listSaleProduct[i].image}" alt="" class="card-img-top">
          <div class="card-body">
              <div class="logo-sale">
                  <img src="../IMG/Logo/logo-sale1.png" class="logo-sale-title"></img>
              </div>
              <h4 class="card-title">${listSaleProduct[i].name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      <p>
                          Giá cũ: 
                          <span class="text-danger">
                              <del>${formatToVND(
                                listSaleProduct[i].newPrice
                              )}</del>
                          </span>   
                      </p> 
                      <p>
                          Giá mới:
                          <span class="text-danger">
                              ${formatToVND(listSaleProduct[i].Gia)}
                          </span>   
                      </p>  
                      <p class="text-danger num_buy" style = " font-size:13px">
                          
                        <span></span>
                      </p>
                  </p>
              </div>
          </div>
      </div>
  </div>`;
  }

  document.getElementsByClassName("js-listSale")[0].innerHTML = htmls;
  const x = document.getElementsByClassName("card");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", (e) => {
      let value =
        e.target.closest(".card").childNodes[3].childNodes[3].innerHTML;
      console.log(value);
      let E = listProduct.find((item) => {
        return (
          item.name.toLocaleLowerCase() == value.trim().toLocaleLowerCase()
        );
      });
      let name = `${E.name}`;
      let gia = `${formatToVND(E.Gia)}`;
      let img = `${E.image}`;
      let hang = `${E.hangsx}`;
      let xx = `${E.Xuatxu}`;

      localStorage.setItem("name", name);
      localStorage.setItem("gia", E.Gia);
      localStorage.setItem("img", img);
      localStorage.setItem("hang", hang);
      localStorage.setItem("xuatxu", xx);
      // let w = window.open("Product.html");
      window.location.href = "Product.html";
    });
  }
}

// BTN Xuat Xu
const XXfilter = document.getElementsByClassName("filter-xx");
for (i = 0; i < XXfilter.length - 1; i++) {
  XXfilter[i].addEventListener("click", function (e) {
    for (j = 0; j < XXfilter.length; j++) {
      XXfilter[j].classList.remove("actived");
    }
    this.classList.add("actived");
    ShowXuatXu(e.target);
    showDetailProduct();
  });
}
XXfilter[4].addEventListener("click", function () {
  productElement.innerHTML = htmls.join("\n");
  for (j = 0; j < XXfilter.length; j++) {
    XXfilter[j].classList.remove("actived");
  }
});

function ShowXuatXu(nameXX) {
  let XuatXu = listProduct
    .filter((product) => {
      return product.Xuatxu == nameXX.innerHTML;
    })
    .map((product) => {
      return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
              
        
          </div>
      </div>
  </div>`;
    });
  productElement.innerHTML = XuatXu.join("\n");
}

// BTN HANG SX
const Hangfilter = document.getElementsByClassName("filter-hang");
for (i = 0; i < Hangfilter.length - 1; i++) {
  Hangfilter[i].addEventListener("click", function (e) {
    for (j = 0; j < Hangfilter.length; j++) {
      Hangfilter[j].classList.remove("actived");
    }
    this.classList.add("actived");
    ShowHang(e.target);
    showDetailProduct();
  });
}
Hangfilter[3].addEventListener("click", function () {
  productElement.innerHTML = htmls.join("\n");
  for (j = 0; j < XXfilter.length; j++) {
    Hangfilter[j].classList.remove("actived");
  }
  productElement.innerHTML = htmls.join("\n");
});

function ShowHang(nameXX) {
  let Hang = listProduct
    .filter((product) => {
      return product.hangsx == nameXX.innerHTML;
    })
    .map((product) => {
      return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
              
        
          </div>
      </div>
  </div>`;
    });
  productElement.innerHTML = Hang.join("\n");
}

function filterPriceDes() {
  var SXGia;
  SXGia = listProduct.sort(function (a, b) {
    return b.Gia - a.Gia;
  });
  const htmls = SXGia.map((product) => {
    return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
          </div>
      </div>
  </div>`;
  });
  productElement.innerHTML = htmls.join("\n");
  showDetailProduct();
}

function filterPriceInc() {
  var SXGia;
  SXGia = listProduct.sort(function (a, b) {
    return a.Gia - b.Gia;
  });
  const htmls = SXGia.map((product) => {
    return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
          </div>
      </div>
  </div>`;
  });
  productElement.innerHTML = htmls.join("\n");
  showDetailProduct();
}

// BTN GIA
const giafiler = document.getElementsByClassName("filter-gia");
for (i = 0; i < giafiler.length - 1; i++) {
  giafiler[i].addEventListener("click", function (e) {
    for (j = 0; j < giafiler.length - 1; j++) {
      giafiler[j].classList.remove("actived");
    }
    this.classList.add("actived");

    if (e.target.innerHTML == "Thấp đến cao") {
      var SXGia;
      SXGia = listProduct.sort(function (a, b) {
        return a.Gia - b.Gia;
      });
    } else {
      SXGia = listProduct.sort(function (a, b) {
        return b.Gia - a.Gia;
      });
    }
    const htmls = SXGia.map((product) => {
      return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                 
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
          </div>
      </div>
  </div>`;
    });
    productElement.innerHTML = htmls.join("\n");
    showDetailProduct();
  });
}

giafiler[2].addEventListener("click", function () {
  for (j = 0; j < giafiler.length - 1; j++) {
    giafiler[j].classList.remove("actived");
  }
  productElement.innerHTML = htmls.join("\n");
});

// PRODUCT DETAIL

function showDetailProduct() {
  const x = document.getElementsByClassName("card");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", (e) => {
      let value =
        e.target.closest(".card").childNodes[3].firstElementChild.innerHTML;
      let E = listProduct.find((item) => {
        return (
          item.name.toLocaleLowerCase() == value.trim().toLocaleLowerCase()
        );
      });
      let name = `${E.name}`;
      let gia = `${formatToVND(E.Gia)}`;
      let img = `${E.image}`;
      let hang = `${E.hangsx}`;
      let xx = `${E.Xuatxu}`;

      localStorage.setItem("name", name);
      localStorage.setItem("gia", E.Gia);
      localStorage.setItem("img", img);
      localStorage.setItem("hang", hang);
      localStorage.setItem("xuatxu", xx);
      window.location.href = "Product.html";
    });
  }
}

// CART
function RenderItemsCart() {
  showCartEmpty();
  const html = listProductCart.map((product) => {
    return `<div class="cart-item">
        <div class="cart-item-img" data-bs-target = "#myProductDetail" data-bs-toggle = "modal">
            <img src="${product.image}" alt="">
        </div>
        <div class="cart-item-info" data-bs-target = "#myProductDetail" data-bs-toggle = "modal">
            <h6 class="cart-info-title">
                ${product.name}
            </h6>
            <div class="cart-info-price text-danger">
                ${formatToVND(product.Gia)}
            </div>
        </div>
        <div class="cart-delete btn btn-danger m-1">Xóa</div>
    </div>`;
  });
  // NUM CART
  document.getElementsByClassName("num-cart")[0].innerText =
    listProductCart.length;
  document.getElementsByClassName("cart-have")[0].innerHTML = html.join("\n");
  const ItemsCart = document.getElementsByClassName("cart-item");
  for (i = 0; i < ItemsCart.length; i++) {
    ItemsCart[i].addEventListener("click", (e) => {
      const valueCart = e.target.parentNode.childNodes[1].innerHTML.trim();
      const E = listProductCart.find((product) => {
        return product.name == valueCart;
      });
      showDetailProductModal(E);
    });
  }

  const CartItemsRemove = document.getElementsByClassName("cart-delete");
  for (i = 0; i < CartItemsRemove.length; i++) {
    CartItemsRemove[i].addEventListener("click", deleteProductCart);
  }
}

function deleteProductCart(e) {
  const valueCart =
    e.target.parentNode.childNodes[3].childNodes[1].innerHTML.trim();
  console.log(valueCart);
  const ItemRemove = listProductCart.find((product) => {
    return product.name == valueCart;
  });

  for (i = 0; i < listProductCart.length; i++) {
    if (listProductCart[i].id == ItemRemove.id) {
      listProductCart.splice(i, 1);
      break;
    }
  }
  RenderItemsCart();
}

function showCartEmpty() {
  if (listProductCart.length != 0) {
    document.getElementsByClassName("cart-empty")[0].style.display = "none";
  } else {
    document.getElementsByClassName("cart-empty")[0].style.display = "block";
  }
}

function demo() {
  let name = `${E.name}`;
  let gia = `${formatToVND(E.Gia)}`;
  let img = `${E.image}`;
  let hang = `${E.hangsx}`;
  let xx = `${E.Xuatxu}`;

  localStorage.setItem("name", name);
  localStorage.setItem("gia", E.Gia);
  localStorage.setItem("img", img);
  localStorage.setItem("hang", hang);
  localStorage.setItem("xuatxu", xx);
  window.location.href = "Product.html";
}

function addCart(e) {
  const value =
    e.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1]
      .childNodes[0].childNodes[3].innerHTML;
  listProduct.forEach((item) => {
    if (item.name == value) {
      listProductCart.push(item);
    }
  });
  RenderItemsCart();
}

process_price();
function process_price() {
  document.getElementById("process_price").oninput = function (e) {
    let valuePrice = parseInt(e.target.value);
    if (valuePrice) {
      document.getElementById("valuePrice").innerHTML = formatToVND(valuePrice);
      let Hang = listProduct
        .filter((product) => {
          return product.Gia > 0 && product.Gia <= valuePrice;
        })
        .map((product) => {
          return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
              
        
          </div>
      </div>
  </div>`;
        });
      document.getElementById("price_filter_result").innerHTML =
        listProduct.filter((product) => {
          return product.Gia > 0 && product.Gia <= valuePrice;
        }).length;
      productElement.innerHTML = Hang.join("\n");
      showDetailProduct();
    }
  };
}

img_filter_hang();

function img_filter_hang() {
  const x = document.getElementsByClassName("img_filter_hang");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", (e) => {
      let Hang = listProduct
        .filter((product) => {
          return product.hangsx == e.target.getAttribute("alt");
        })
        .map((product) => {
          return `<div class="col-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${product.image}" alt="" class="card-img-top">
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <div class="card-des mt-3">
                  
                  <p class="card-price">
                      Giá: 
                      <span class="text-danger">
                          ${formatToVND(product.Gia)}
                      </span>      
                  </p>
                  <p class="text-danger num_buy" style = " padding-left:120px; font-size:13px">
    
                        <span></span>
                        </p>
              </div>
          </div>
      </div>
  </div>`;
        });
      productElement.innerHTML = Hang.join("\n");
      showDetailProduct();
    });
  }
}

function formatToVND(num) {
  let fmt = num.toLocaleString("vi-VN");
  fmt += "đ";
  return fmt;
}
