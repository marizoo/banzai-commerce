const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const productSizes = document.querySelectorAll(".size");
const productSpices = document.querySelectorAll(".spice");
const orderNowBtn = document.querySelector(".productButton");
const paymentModal = document.querySelector(".payment");
const closeModalBtn = document.querySelector(".closebtn");

// products array
const products = [
    {
        id: 001,
        title: "UDONMARI",
        price: 19.99,
        url: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 002,
        title: "DOISUWATE",
        price: 21.99,
        url: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 003,
        title: "NOMIMONO",
        price: 17.99,
        url: "https://images.pexels.com/photos/3535388/pexels-photo-3535388.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 004,
        title: "IKAGADESU",
        price: 16.99,
        url: "https://images.pexels.com/photos/1025316/pexels-photo-1025316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 005,
        title: "GOZAIMASU",
        price: 14.99,
        url: "https://images.pexels.com/photos/1265626/pexels-photo-1265626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change chosen product
        chosenProduct = products[index];
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.url;
    });
});

productSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        productSizes.forEach((size) => {
            size.style.backgroundColor = "gray";
            size.style.color = "white";
            size.style.border = "1px solid transparent";
        });
        size.style.backgroundColor = "orange";
        size.style.color = "white";
        size.style.border = "1px solid orange";
    });
});

productSpices.forEach((spice, index) => {
    spice.addEventListener("click", () => {
        productSpices.forEach((spice) => {
            spice.style.border = "1px solid transparent";
            spice.style.fontWeight = "400";
            spice.style.color = "gray";
        });
        spice.style.border = "2px solid orange";
        spice.style.fontWeight = "800";
        spice.style.color = "orange";
    });
});

orderNowBtn.addEventListener("click", () => {
    paymentModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    paymentModal.style.display = "none";
});

// https://www.youtube.com/watch?v=b3Gqq_k-g24&t=73s
// till minute 1.01.
//
