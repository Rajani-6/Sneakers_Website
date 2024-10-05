console.log("Hi There!!");
const slideWrapper = document.querySelector(".slideWrapper");
// slideWrapper.style.transform = "translateX(-100vw)";
const menuItems = document.querySelectorAll(".menuItem");

/**slideItem */

const slideItem = document.getElementsByClassName("slideItem");
console.log(slideItem);

// Array.from(slideItem).filter((item) => {
//   console.log("item : " + item.children);
// });

/** PRODUCT */
let itemIndex = 0;
const itemColors = [
  {
    index: 0,
    colors: ["black", "darkBlue"],
    imgs: ["./img/air.png", "./img/air2.png"],
  },
  {
    index: 1,
    colors: ["white", "lightGreen"],
    imgs: ["./img/jordan.png", "./img/jordan2.png"],
  },
  {
    index: 2,
    colors: ["white", "green"],
    imgs: ["./img/blazer.png", "./img/blazer2.png"],
  },
  {
    index: 3,
    colors: ["black", "white"],
    imgs: ["./img/crater.png", "./img/crater2.png"],
  },
  {
    index: 4,
    colors: ["gray", "black"],
    imgs: ["./img/hippie.png", "./img/hippie2.png"],
  },
];

const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColors = document.querySelectorAll(".color");
const productSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    itemIndex = index;
    console.log("item : " + item.innerHTML);
    slideWrapper.style.transform = `translateX(${-100 * index}vw)`;
    productTitle.textContent = item.textContent;
    productImg.src = itemColors[index]["imgs"][0];
    Array.from(slideItem).forEach((eachItem, eachIndex) => {
      if (eachIndex === index) {
        productPrice.innerText =
          eachItem.querySelector(".sliderPrice").innerText;
      }
    });

    productColors.forEach((color, colorIndex) => {
      color.style.backgroundColor = itemColors[itemIndex].colors[colorIndex];
      color.style.border = "1px solid black";
    });

    productSizes.forEach((size, index) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
      size.style.border = "1px solid black";
    });
  });
});

//Colors
productColors.forEach((color, colorIndex) => {
  color.addEventListener("click", () => {
    console.log("itemIndex : " + itemIndex);
    console.log("itemColor : " + itemColors[itemIndex].imgs[colorIndex]);
    productImg.src = itemColors[itemIndex].imgs[colorIndex];
  });
});

//Sizes

productSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    productSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
      size.style.border = "1px solid black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
    size.style.border = "1px solid white";
  });
});

//payment modal

const payment = document.querySelector(".payment");
document.querySelector(".closeBtn").addEventListener("click", () => {
  payment.style.display = "none";
});

document.querySelector(".productBtn").addEventListener("click", () => {
  payment.style.display = "flex";
});
