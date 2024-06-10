document.addEventListener("DOMContentLoaded", function () {
    // Definisi data produk
    const products = {
        "Electronics": [    
            { 
                name: "Speaker JBL Charge 4", 
                price: "$149.99", 
                description: "Speaker portabel dengan suara berkualitas tinggi dan daya tahan baterai panjang.",
                image: "assets/img/Electronics/Speaker-JBL-Charge4.png"
            },
            { 
                name: "Headphone Sony WH-1000XM4", 
                price: "$349.99", 
                description: "Headphone dengan fitur noise-cancelling terbaik dari Sony.",
                image: "assets/img/Electronics/Headphone-Sony-WH-1000XM4.png"
            },
            { 
                name: "Kamera Canon EOS M50", 
                price: "$649.99", 
                description: "Kamera mirrorless dengan kemampuan video 4K dan fokus otomatis cepat.",
                image: "assets/img/Electronics/Kamera-Canon-EOS-M50.webp"
            },
            { 
                name: "Headphone Bose QuietComfort 35", 
                price: "$299.99", 
                description: "Headphone dengan fitur noise-cancelling terbaik dan kualitas suara premium.",
                image: "assets/img/Electronics/Headphone-Bose-QuietComfort-35.png"
            },
            { 
                name: "Smart TV Samsung QLED 55\"", 
                price: "$799.99", 
                description: "Smart TV dengan kualitas gambar QLED yang menakjubkan dan fitur lengkap.",
                image: "assets/img/Electronics/Smart-TV-Samsung-QLED-55.avif"
            },
            { 
                name: "Smartwatch Apple Watch Series 6", 
                price: "$399.99", 
                description: "Smartwatch dengan fitur kesehatan terbaru dan performa tinggi.",
                image: "assets/img/Electronics/Smartwatch-Apple-Watch-Series-6.png"
            }
        ],
        "Smartphones": [
            { 
                name: "iPhone 12 Pro Max", 
                price: "$1099.99", 
                description: "Smartphone flagship dari Apple dengan kamera Pro dan layar Super Retina XDR.",
                image: "assets/img/Smartphones/iPhone-12-Pro-Max.webp"
            },
            { 
                name: "Samsung Galaxy S21 Ultra", 
                price: "$1199.99", 
                description: "Smartphone premium dari samsung dengan kamera 108MP dan layar 120Hz.",
                image: "assets/img/Smartphones/Samsung-Galaxy-S21-Ultra.png"
            },
            { 
                name: "Google Pixel 5", 
                price: "$699.99", 
                description: "Smartphone dengan pengalaman Android terbaik dan kamera yang canggih.",
                image: "assets/img/Smartphones/Google-Pixel-5.png"
            },
            { 
                name: "OnePlus 9 Pro", 
                price: "$969.99", 
                description: "Smartphone dengan performa tinggi dan kamera Hasselblad.",
                image: "assets/img/Smartphones/OnePlus-9-Pro.png"
            },
            { 
                name: "Xiaomi Mi 11", 
                price: "$749.99", 
                description: "Smartphone dengan layar AMOLED dan kamera 108MP.",
                image: "assets/img/Smartphones/Xiaomi-Mi-11.png"
            },
            { 
                name: "Sony Xperia 1 II", 
                price: "$1199.99", 
                description: "Smartpho  ne dengan layar 4K dan teknologi kamera Alpha.",
                image: "assets/img/Smartphones/Sony-Xperia-1-II.webp"
            }
        ],
        "Laptops": [
            { 
                name: "Laptop Gaming ASUS ROG Zephyrus G14", 
                price: "$1499.99", 
                description: "Laptop gaming dengan performa tinggi dan desain kompak.",
                image: "assets/img/Laptops/Laptop-Gaming-ASUS-ROG-Zephyrus-G14.png"
            },
            { 
                name: "MacBook Pro 16\"", 
                price: "$2399.99", 
                description: "Laptop profesional dengan performa tinggi dan cepat serta layar Retina",
                image: "assets/img/Laptops/MacBook-Pro-16.jpg"
            },
            { 
                name: "Dell XPS 13", 
                price: "$999.99", 
                description: "Laptop ultraportabel dengan desain premium dan layar InfinityEdge.",
                image: "assets/img/Laptops/Dell-XPS-13.avif"
            },
            { 
                name: "HP Spectre x360", 
                price: "$1249.99", 
                description: "Laptop 2-in-1 dengan desain elegan dan performa tinggi dan cepat.",
                image: "assets/img/Laptops/HP-Spectre-x360.png"
            },
            { 
                name: "Lenovo ThinkPad X1 Carbon", 
                price: "$1399.99", 
                description: "Laptop bisnis dengan daya tahan baterai panjang dan keamanan tingkat tinggi.",
                image: "assets/img/Laptops/Lenovo-ThinkPad-X1-Carbon.jpg"
            },
            { 
                name: "Acer Swift 3", 
                price: "$699.99", 
                description: "Laptop ringan dengan performa yang andal dan harga terjangkau.",
                image: "assets/img/Laptops/Acer-Swift-3.png"
            }
        ],
        "Cameras": [
            { 
                name: "Kamera DSLR Canon EOS 5D Mark IV", 
                price: "$2499.99", 
                description: "Kamera DSLR profesional dengan sensor full-frame dan kemampuan video 4K.",
                image: "assets/img/Cameras/Kamera-DSLR-Canon-EOS-5D-Mark-IV.png"
            },
            { 
                name: "Kamera Mirrorless Sony Alpha a7 III", 
                price: "$1999.99", 
                description: "Kamera mirrorless dengan sensor full-frame dan performa cepat.",
                image: "assets/img/Cameras/Kamera-Mirrorless-Sony-Alpha-a7-III.png"
            },
            { 
                name: "Kamera Nikon Z6 II", 
                price: "$1996.95", 
                description: "Kamera mirrorless dengan sensor full-frame dan fitur video yang kuat.",
                image: "assets/img/Cameras/Kamera-Nikon-Z6-II.jpg"
            },
            { 
                name: "Kamera Fujifilm X-T4", 
                price: "$1699.99", 
                description: "Kamera mirrorless dengan desain retro dan fitur video 4K.",
                image: "assets/img/Cameras/Kamera-Fujifilm-X-T4.png"
            },
            { 
                name: "Kamera Panasonic Lumix GH5", 
                price: "$1299.99", 
                description: "Kamera mirrorless dengan kemampuan video 4K dan stabilisasi gambar yang kuat.",
                image: "assets/img/Cameras/Kamera-Panasonic-Lumix-GH5.png"
            },
            { 
                name: "Kamera Olympus OM-D E-M5 Mark III", 
                price: "$1199.99", 
                description: "Kamera mirrorless dengan desain kompak dan performa tinggi.",
                image: "assets/img/Cameras/Kamera-Olympus-OM-D-E-M5-Mark-III.png"
            }
        ]
    };
    
    // Definisi variabel dan elemen DOM
    const productListContainer = document.getElementById("product-container");
    const cartSidebar = document.getElementById('cartSidebar');
    const cartSidebarContent = document.querySelector('.cart-sidebar-content');
    const addToCartButtons = document.querySelectorAll('.buy-now');
    const closeBtn = document.querySelector('.close-btn');
    const categoryButtons = document.querySelectorAll(".category-button");
    const productLinks = document.querySelectorAll('.navbar-nav a[href="index.html#product-list"]');
    
    let cart = [];
    
    // Event listener untuk tombol kategori
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            showProducts(category);
        });
    });

    // Event listener untuk tautan produk di navbar
    productLinks.forEach(function(link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = this.href;
        });
    });

    // Menampilkan produk elektronik saat halaman dimuat
    showProducts("Electronics");
    
    // Memuat keranjang dari local storage jika ada
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartSidebar();
        updateCartTotal(localStorage.getItem('cartTotal')); // Muat total harga dari localStorage
    }

    // Fungsi untuk menampilkan produk berdasarkan kategori
    function showProducts(category) {
        productListContainer.innerHTML = "" ;
        const categoryProducts = products[category].slice(0, 9);
    
        categoryProducts.forEach(product => {
            const productCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
                            <p class="card-text">${product.description}</p>
                            <button class="btn btn-custom btn-block buy-now" data-toggle="modal" data-target="#productModal" data-product='${JSON.stringify(product)}'>Buy Now</button>
                        </div>
                    </div>
                </div>`;
            productListContainer.innerHTML += productCard;
        });
    
        const buyNowButtons = document.querySelectorAll(".buy-now");
        buyNowButtons.forEach(button => {
            button.addEventListener("click", function() {
                const product = JSON.parse(this.getAttribute("data-product"));
                showProductModal(product);
            });
        });
    }

    // Fungsi untuk menampilkan modal produk
    function showProductModal(product) {
        document.getElementById("modal-product-image").src = product.image;
        document.getElementById("modal-product-name").innerText = product.name;
        document.getElementById("modal-product-price").innerText = product.price;
        document.getElementById("modal-product-description").innerText = product.description;
        $('#productModal').modal('show');
    }

    // Fungsi untuk membuka/menutup sidebar keranjang
    function toggleCartSidebar(forceOpen = false) {
        if (forceOpen) {
            cartSidebar.classList.add('show');
        } else {
            cartSidebar.classList.toggle('show');
        }
    }

    // Fungsi untuk memperbarui total harga di keranjang
    function updateCartTotal() {
        const cartTotalElement = document.getElementById('cart-total-price');
        const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
        cartTotalElement.textContent = '$' + totalPrice.toFixed(2);
    }

    // Fungsi untuk menambahkan produk ke keranjang
    function addToCart(product) {
        const existingCartItem = cart.find(item => item.name === product.name);
        if (existingCartItem) {
            existingCartItem.quantity += product.quantity;
        } else {
            cart.push(product);
        }
        updateCartSidebar();
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartTotal', updateCartTotal());
        updateCartTotal();
    }

    // Fungsi untuk menghapus produk dari keranjang
    function removeFromCart(productName) {
        cart = cart.filter(item => item.name !== productName);
        updateCartSidebar();
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartTotal', updateCartTotal());
        updateCartTotal();
    }  

    // Fungsi untuk memperbarui tampilan sidebar keranjang
    function updateCartSidebar() {
        cartSidebarContent.innerHTML = '';
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
        updateCartTotal(localStorage.getItem('cartTotal'));
    
        if (cart.length === 0) {
            cartSidebarContent.innerHTML = `
                <div class="d-flex flex-column justify-content-center align-items-center h-100">
                    <p>Your cart is empty</p>
                    <button class="btn btn-success" id="continue-shopping-btn">Belanja</button>
                </div>
            `;
            
            document.getElementById("continue-shopping-btn").addEventListener("click", function() {
                toggleCartSidebar();
                window.location.href = 'index.html#product-list';
            });
        } else {
            cart.forEach(item => {
                const cartItem = `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-details">
                            <h6>${item.name}</h6>
                            <p>${item.price}</p>
                            <p>Quantity: ${item.quantity}</p>
                            <button class="btn btn-sm btn-danger remove-from-cart" data-product='${item.name}'>Remove</button>
                        </div>
                    </div>
                `;
                cartSidebarContent.innerHTML += cartItem;
            });
        }
        const checkoutButton = document.querySelector('.cart-sidebar-footer button');
        if (cart.length === 0) {
            checkoutButton.style.display = 'none';
        } else {
            checkoutButton.style.display = 'block';
        }
    
        const removeButtons = document.querySelectorAll('.remove-from-cart');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-product');
                removeFromCart(productName);
            });
        });
    }

    // Memanggil fungsi updateCartSidebar saat halaman dimuat
    updateCartSidebar();

    // Fungsi untuk mendapatkan tinggi navbar
    function getNavbarHeight() {
        const navbar = document.querySelector('.navbar');
        return navbar.offsetHeight;
    }

    // Fungsi untuk scroll ke daftar produk
    function scrollToProductList() {
        const productList = document.getElementById("product-list");
        const navbarHeight = getNavbarHeight();
        const scrollPosition = productList.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }

    // Fungsi untuk memeriksa posisi scroll dan menambahkan kelas 'active' pada item navbar produk
    function checkScrollPosition() {
    const productNavItem = document.querySelector('.nav-item:nth-child(3)');
        if (window.scrollY >= 700) {
            productNavItem.classList.add('active');
        } else {
            productNavItem.classList.remove('active');
        }
    }

    // Panggil fungsi checkScrollPosition saat halaman dimuat
    window.addEventListener('load', checkScrollPosition);

    // Panggil fungsi checkScrollPosition saat scroll
    window.addEventListener('scroll', checkScrollPosition);
    
    // Event listener untuk tombol "Add to Cart" di modal produk
    document.getElementById("add-to-cart-btn").addEventListener("click", function() {
        const productImage = document.getElementById("modal-product-image").src;
        const productName = document.getElementById("modal-product-name").innerText;
        const productPrice = document.getElementById("modal-product-price").innerText;
        const productQuantity = parseInt(document.getElementById("quantity-input").value);
    
        const product = {
            image: productImage,
            name: productName,
            price: productPrice,
            quantity: productQuantity
        };
    
        addToCart(product);
        $('#productModal').modal('hide');
        document.getElementById("quantity-input").value = 1;
        toggleCartSidebar(true);
    });

    // Event listener untuk tombol "Shop Now" di carousel
    document.getElementById("shopNowBtn").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = 'index.html#product-list';
    });
    
    document.getElementById("shopNowBtn2").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = 'index.html#product-list';
    });
    
    document.getElementById("shopNowBtn3").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = 'index.html#product-list';
    });

    // Event listener untuk tombol "+" dan "-" di modal produk
    document.getElementById("plus-btn").addEventListener("click", function() {
        const quantityInput = document.getElementById("quantity-input");
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    document.getElementById("minus-btn").addEventListener("click", function() {
        const quantityInput = document.getElementById("quantity-input");
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
    
    // Event listener untuk ikon keranjang di navbar
    document.getElementById("cart-icon").addEventListener("click", function(event) {
        event.preventDefault();
        toggleCartSidebar();
    });

    // Event listener untuk tautan produk di navbar
    document.getElementById("productNavLink").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = this.href;
    });

    // Event listener untuk tautan produk di navbar
    document.getElementById("productNavLink").addEventListener("click", function (event) {
        event.preventDefault();
        const productNavItem = document.querySelector('.nav-item:nth-child(3)');
        productNavItem.classList.add('active');
        window.location.href = this.href;
    });

    // Event listener untuk tombol "Add to Cart" di daftar produk
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = JSON.parse(button.getAttribute('data-product'));
            addToCart(product);
            toggleCartSidebar();
        });
    });

    // Event listener untuk tombol tutup di sidebar keranjang
    closeBtn.addEventListener('click', () => toggleCartSidebar(false));

    // Event listener untuk menutup sidebar keranjang saat mengklik di luar sidebar
    window.addEventListener('click', (event) => {
        if (event.target === cartSidebar) {
            cartSidebar.classList.remove('show');
        }
    });

    // Event listener untuk mengubah tampilan navbar saat scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar-custom');
        const productNavItem = document.querySelector('.nav-item:nth-child(3)');
        
        if (window.scrollY > 700) {
            navbar.classList.add('scrolled');
            productNavItem.classList.add('hidden');
        } else {
            navbar.classList.remove('scrolled');
            productNavItem.classList.remove('hidden');
        }
    });
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar-custom');
        if (window.scrollY > 700) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const placeOrderButton = document.getElementById('place-order-btn');

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            const cartItem = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h6>${item.name}</h6>
                        <p>Jumlah: ${item.quantity}</p>
                    </div>
                    <span class="item-price">${item.price}</span>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItem;
            totalPrice += parseFloat(item.price.replace('$', '')) * item.quantity;
        });

        totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
    }

    function placeOrder() {
        // Logika untuk memproses pesanan
        alert('Pesanan Anda telah berhasil dibuat!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    }

    renderCartItems();
    placeOrderButton.addEventListener('click', placeOrder);
});