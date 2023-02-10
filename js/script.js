window.addEventListener("load", () => {
  function menuBurger() {
    const widthWindow = document.body.clientWidth;
    const heightWindow = document.body.clientHeight;
    const burgerBtn = document.querySelector(".burger");
    const menu = document.querySelector(".menu__main");
    const menuClone = menu.cloneNode(true);
    const overlay = document.querySelector(".overlay");
    const close = document.createElement("p");
    const body = document.querySelector("body");
    close.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="close">

<path d="M16.1751 15L22.2501 8.925C22.3866 8.76559 22.4579 8.56052 22.4498 8.35079C22.4417 8.14106 22.3548 7.94211 22.2064 7.7937C22.058 7.64529 21.859 7.55835 21.6493 7.55024C21.4395 7.54214 21.2345 7.61348 21.0751 7.75L15.0001 13.825L8.92506 7.74167C8.76564 7.60515 8.56058 7.53381 8.35085 7.54191C8.14112 7.55001 7.94217 7.63696 7.79376 7.78537C7.64534 7.93378 7.5584 8.13273 7.5503 8.34246C7.5422 8.55219 7.61354 8.75725 7.75006 8.91667L13.8251 15L7.74173 21.075C7.65449 21.1497 7.58364 21.2416 7.53362 21.345C7.4836 21.4484 7.45549 21.561 7.45106 21.6758C7.44663 21.7906 7.46597 21.905 7.50786 22.0119C7.54976 22.1189 7.61331 22.216 7.69452 22.2972C7.77573 22.3784 7.87285 22.442 7.97979 22.4839C8.08673 22.5258 8.20117 22.5451 8.31594 22.5407C8.4307 22.5362 8.54331 22.5081 8.6467 22.4581C8.75009 22.4081 8.84202 22.3372 8.91673 22.25L15.0001 16.175L21.0751 22.25C21.2345 22.3865 21.4395 22.4579 21.6493 22.4498C21.859 22.4417 22.058 22.3547 22.2064 22.2063C22.3548 22.0579 22.4417 21.8589 22.4498 21.6492C22.4579 21.4395 22.3866 21.2344 22.2501 21.075L16.1751 15Z" fill="#636060" fill-opacity="0.7"/>
</svg>`;

    close.classList.add("close");
    menuClone.classList.add("main__menu_burger");
    body.insertAdjacentElement("afterbegin", menuClone);
    menuClone.insertAdjacentElement("afterbegin", close);

    if (widthWindow <= 380) {
      overlay.style.height = heightWindow + "px";
    }
    const menuLinks = document.querySelectorAll(
      ".main__menu_burger .menu__link "
    );
    burgerBtn.addEventListener("click", () => {
      body.style.overflow = "hidden";
      overlay.style.display = "block";
      menuClone.classList.add("active-menu");
      overlay.addEventListener("click", () => {
        closeMenu();
      });
      close.addEventListener("click", () => {
        closeMenu();
      });
    });
    menuLinks.forEach((item) => {
      item.addEventListener("click", closeMenu);
    });
    function closeMenu() {
      body.style.overflow = "visible";
      overlay.style.display = "none";
      menuClone.classList.remove("active-menu");
    }
  }

  menuBurger();

  function services() {
    const allServicesBlock = document.querySelectorAll(".services__block");
    const servBtns = document.querySelector(".services__btns");
    const allServBtn = document.querySelectorAll(".services__btn");
    const obj = {
      gardens: false,
      lawn: false,
      planting: false,
    };

    let count = 0;

    function returnActiveBlock(obj, data) {
      let attr = data.getAttribute("data");
      data.classList.toggle("serv-btn-active");
      for (key in obj) {
        if (key === attr) {
          if (obj[key]) obj[key] = false;
          else obj[key] = true;
        }
      }
      return obj;
    }
    let dataArr = [];
    servBtns.addEventListener("click", (e) => {
      if (2 >= count) {
        if (e.target.getAttribute("data") === "gardens") {
          returnActiveBlock(obj, e.target);
          obj.gardens === true ? count++ : count--;
          dataArr.push(e.target.getAttribute("data"));
        } else if (e.target.getAttribute("data") === "lawn") {
          returnActiveBlock(obj, e.target);
          obj.lawn === true ? count++ : count--;
          dataArr.push(e.target.getAttribute("data"));
        } else if (e.target.getAttribute("data") === "planting") {
          returnActiveBlock(obj, e.target);
          obj.planting === true ? count++ : count--;
          dataArr.push(e.target.getAttribute("data"));
        }

        let countFalse = 0;
        for (let key in obj) {
          if (obj[key] === false) {
            countFalse++;
            if (countFalse === 3) {
              allServicesBlock.forEach((item) => {
                item.classList.remove("serv-block-active");
              });
              countFalse = 0;
              count = 0;
            } else {
              allServicesBlock.forEach((item) => {
                if (item.getAttribute("data") === key) {
                  item.classList.add("serv-block-active");
                }
              });
            }
          } else {
            allServicesBlock.forEach((item) => {
              if (item.getAttribute("data") === key) {
                item.classList.remove("serv-block-active");
              }
            });
          }
        }
      }
      if (count > 2) {
        let attr = e.target.getAttribute("data");
        for (let key in obj) {
          key === attr ? (obj[key] = true) : (obj[key] = false);
        }
        allServBtn.forEach((item) => {
          item.getAttribute("data") !== attr
            ? item.classList.remove("serv-btn-active")
            : item.classList.add("serv-btn-active");
        });
        allServicesBlock.forEach((item) => {
          item.getAttribute("data") !== attr
            ? item.classList.add("serv-block-active")
            : item.classList.remove("serv-block-active");
        });
        count = 1;
        data = e.target.getAttribute("data");
      }
    });
  }
  services();

  function prices() {
    const allOptionPrice = document.querySelectorAll(".price__option");

    const objPrice = {
      basic: {
        text: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
        price: "$15",
        span: " / per hour",
      },
      standard: {
        text: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
        price: "$25",
        span: " / per hour",
      },
      pro: {
        text: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
        price: "$35",
        span: " / per hour",
      },
    };
    const priceSelect = document.querySelector(".price__select");
    const block = (text, price, span) => {
      return `<div class="price__offer">
                            <div class="price__hr"></div>
                            <div class="price__adv">
                                ${text}
                            </div>
                            <div class="price__some">
                                ${price} 
                                <span class="some__span">
                                    ${span}
                                </span>
                            </div>
                            <a href="#contacts" class="price__link-contacts">
                                Order
                            </a>
                        </div>`;
    };
    let activeOption = false;
    function removeActiveBlock() {
      const priceOffer = document.querySelector(".price__offer");
      if (priceOffer) {
        priceOffer.remove();
      }
      priceSelect.classList.remove("price__select-active");
      const priceOption = document.querySelectorAll(".price__option");
      priceOption.forEach((item) => {
        item.classList.remove("price__option_active");
      });
    }
    function activeBlock(elem, callback) {
      activeOption = true;
      priceSelect.classList.add("price__select-active");
      elem.insertAdjacentHTML("beforeend", callback);
      elem.classList.add("price__option_active");
    }
    let basic = false;
    let standart = false;
    let pro = false;
    allOptionPrice.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.classList.contains("price__link-contacts")) {
          return true;
        } else {
          removeActiveBlock();
          if (item.getAttribute("data") === "basic") {
            if (basic) {
              removeActiveBlock();
              basic = false;
              pro = false;
              standart = false;
            } else {
              basic = true;
              pro = false;
              standart = false;
              activeBlock(
                item,
                block(
                  objPrice.basic.text,
                  objPrice.basic.price,
                  objPrice.basic.span
                )
              );
            }
          }
          if (item.getAttribute("data") === "standard") {
            if (standart) {
              removeActiveBlock();
              basic = false;
              pro = false;
              standart = false;
            } else {
              standart = true;
              pro = false;
              basic = false;
              activeBlock(
                item,
                block(
                  objPrice.standard.text,
                  objPrice.standard.price,
                  objPrice.standard.span
                )
              );
            }
          }
          if (item.getAttribute("data") === "pro") {
            if (pro) {
              removeActiveBlock();
              pro = false;
              standart = false;
              basic = false;
            } else {
              pro = true;
              standart = false;
              basic = false;
              activeBlock(
                item,
                block(objPrice.pro.text, objPrice.pro.price, objPrice.pro.span)
              );
            }
          }
        }
      });
    });
  }
  prices();

  function contacst() {
    const objCity = {
      canandaigua: {
        city: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        href: "+15853930001",
        adress: "151 Charlotte Street",
      },
      newYorkCity: {
        city: "New York City",
        phone: "+1	212	456 0002",
        href: "+12124560002",
        adress: "9 East 91st Street",
      },
      yonkers: {
        city: "Yonkers, NY",
        phone: "+1	914	678 0003",
        href: "+19146780003",
        adress: "511 Warburton Ave",
      },
      sherrill: {
        city: "Sherrill, NY",
        phone: "+1	315	908 0004",
        href: "+13159080004",
        adress: "14 WEST Noyes BLVD",
      },
    };

    const changeCity = document.querySelector(".change__city");
    const changeSelect = document.querySelector(".change__select");
    const changeOption = document.querySelector(".change__option");

    const changeContact = document.querySelector(".change__contact");
    const changeC = document.querySelector(".change__c_one span");
    const changePhone = document.querySelector(".change__phone span");
    const changeAdress = document.querySelector(".change__adress span");
    const changeCall = document.querySelector(".change__call");

    changeSelect.addEventListener("click", (e) => {
      
      changeOption.classList.add("change__option-active");
      if (e.target.getAttribute("city") === "true") {
        changeCity.textContent = e.target.textContent;
        changeContact.classList.add("change__contact-active");
        let data = e.target.getAttribute("data");
        for (let key in objCity) {
          if (key === data) {
            changeC.textContent = objCity[key].city;
            changePhone.textContent = objCity[key].phone;
            changeAdress.textContent = objCity[key].adress;
            changeCall.setAttribute("href", `tel:${objCity[key].href}`);
          }
        }
      }
    });
  }
  contacst();

  console.log(`
  1.При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах 
      в разделе service +50
    
  2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
  
  3.В разделе contacts реализован select с выбором городов +25
  
  100/125
  `);
});
