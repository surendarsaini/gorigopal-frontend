
import { useEffect, useState } from "react";
 
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Scissors,
  Sparkles,
  Plus,
  Minus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  UserRound,
  LogOut,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Elegant Pink Suit",
    category: "Ladies Wear",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Traditional Kurti",
    category: "Ladies Wear",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpDaBo6kIrUVu-P-mA1mJyYZFawIWCd9BaTYLkEl_4w&s=10",
  },
  {
    id: 3,
    name: "Beauty Essentials",
    category: "Cosmetics",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Fashion Collection",
    category: "Ladies Wear",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Beauty Makeup Kit",
    category: "Cosmetics",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Desiner Lehenga",
    category: "Ladies Wear",
    price: 1899,
    image:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1kkyf7S86e84sJAsCgwtM4M8b48b5BQ_Vq76_jxdWRfCALJsPUwRkPoB&s=10",
  },
  {
    id: 7,
    name: "Designer Blouse",
    category: "Ladies Wear",
    price: 349,
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqC3wGUFzBlTKqDJUbVDnoTGKMZEFQdS7MUw1hfmG4w&s=10",
  },
  {
    id: 8,
    name: "Designer Chunni",
    category: "Ladies Wear",
    price: 299,
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0dPortPTI9n37eL7Mkf8GFDT9IP155MTUyiTliUYOQ&s=10",
  },
  {
    id: 9,
    name: "Designer Chunni",
    category: "Ladies Wear",
    price: 249,
    image:
       "https://s.alicdn.com/@sc04/kf/A5296f736ccee43049c04009ffd51d7aaE.jpg",
  },
   {
    id: 10,
    name: "Face Wash",
    category: "Cosmetic",
    price: 249,
    image:
       "https://joypersonalcare.com/cdn/shop/files/Ubtan_FW_100ml_bdba986f-ce5c-465e-9425-64cbefe58dc7.jpg?v=1778479942&width=1920",
  },
  {
    id: 11,
    name: "Nivea Soft",
    category: "Cosmetic",
    price: 299,
    image:
       "https://rukmini1.flixcart.com/image/1500/1500/xif0q/moisturizer-cream/n/m/t/-original-imahhaddfyzhndrq.jpeg?q=70",
  },
  {
    id: 12,
    name: "Face Wash",
    category: "Cosmetic",
    price: 279,
    image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyK8Y6OfxpwwkcoicQwM7Jz_KNHrp4yhxzEu6VdrW9doKdHbAUnzl9e3U&s=10",
  },
   {
    id: 13,
    name: "Custom Stitching",
    category: "Ladies Wear",
    price: 1999,
    image:
       "https://banostitching.com/wp-content/uploads/2026/06/Untitled-design-1024x538.png",
  },
];

const sliderProducts = [
  {
    title: "Grand Opening in 19 October 2026",
    subtitle: "Discover beautiful styles for every occasion.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85",
    button: "Explore Collection",
  },
  
  {
    title: "Grand Opening in 19 October 2026",
    subtitle: "Find your favourite outfits in our latest collection.",
    image:
      "https://s.alicdn.com/@sc04/kf/A5296f736ccee43049c04009ffd51d7aaE.jpg",
    button: "Shop Ladies Wear",
  },
  {
    title: "A Touch of Beauty",
    subtitle: "Explore beauty essentials to complete your look.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=85",
    button: "Shop Cosmetics",
  },
  {
    title: "A Touch of Beauty",
    subtitle: "Explore beauty essentials to complete your look.",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYdsqrf5PNJTYaisyasBVD103e8XFLjjJ0pb1c81NkA&s=10",
    button: "Shop Cosmetics",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Login and Signup states
  const [authMode, setAuthMode] = useState("");
  const [user, setUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  // Automatically change slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (previous) => (previous + 1) % sliderProducts.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function nextSlide() {
    setCurrentSlide(
      (previous) => (previous + 1) % sliderProducts.length
    );
  }

  function previousSlide() {
    setCurrentSlide(
      (previous) =>
        (previous - 1 + sliderProducts.length) %
        sliderProducts.length
    );
  }

  // Open Login or Signup modal
  function openAuth(mode) {
    setAuthMode(mode);
    setAuthMessage("");
    setAuthForm({
      name: "",
      email: "",
      password: "",
    });
    setMenuOpen(false);
  }

  // Demo login/signup form submission
  function handleAuthSubmit(event) {
    event.preventDefault();
    setAuthMessage("");

    const name = authForm.name.trim();
    const email = authForm.email.trim();

    if (!email || !authForm.password) {
      setAuthMessage("Email aur password bharna zaroori hai.");
      return;
    }

    if (authMode === "signup" && !name) {
      setAuthMessage("Apna naam bhi bharo.");
      return;
    }

    if (authForm.password.length < 6) {
      setAuthMessage(
        "Password kam se kam 6 characters ka hona chahiye."
      );
      return;
    }

    // Demo only: no real account is created or verified.
    setUser({
      name: name || email.split("@")[0],
      email,
    });

    setAuthMode("");
    setAuthMessage("");
    setAuthForm({
      name: "",
      email: "",
      password: "",
    });
  }

  function handleLogout() {
    setUser(null);
    setAuthMessage("");
    setAuthMode("");
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function addToCart(product) {
    setCart((oldCart) => {
      const existing = oldCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });

    setShowCart(true);
  }

  function changeQuantity(id, amount) {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  }

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#352522]">

     

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-[#f0e1d8] bg-[#fffaf7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4">
          <a
            href="#home"
            className="shrink-0 text-2xl font-extrabold text-[#783e35]"
          >
            GoriGopal
            <span className="text-[#c58b68]">.Com</span>

            <div className="text-[9px] tracking-[3px] text-gray-500">
              FASHION & BEAUTY
            </div>
          </a>

          <nav className="hidden items-center gap-6 font-medium md:flex">
            <a href="#home" className="hover:text-[#a96e58]">
              Home
            </a>

            <a
              href="#shop"
              onClick={() => setCategory("Ladies Wear")}
              className="hover:text-[#a96e58]"
            >
              Ladies Wear
            </a>

            <a href="#stitching" className="hover:text-[#a96e58]">
              Custom Stitching
            </a>

            <a
              href="#shop"
              onClick={() => setCategory("Cosmetics")}
              className="hover:text-[#a96e58]"
            >
              Cosmetics
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Desktop Login / User / Logout */}
            {user ? (
              <div className="hidden items-center gap-2 sm:flex">
                <span className="max-w-28 truncate text-sm font-semibold">
                  Hi, {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 rounded-full border border-[#783e35] px-3 py-2 text-sm font-bold text-[#783e35] hover:bg-[#f3e5dc]"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuth("login")}
                className="rounded-full bg-[#783e35] px-3 py-2 text-sm font-bold text-white hover:bg-[#592d27] sm:px-4"
              >
                Login
              </button>
            )}

            <button
              onClick={() => setShowCart(true)}
              className="relative rounded-full p-2 hover:bg-[#f3e5dc]"
              aria-label="Open shopping cart"
            >
              <ShoppingBag size={23} />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-[#783e35] px-1 text-center text-xs text-white">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="rounded-full p-2 hover:bg-[#f3e5dc] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="grid gap-1 border-t border-[#f0e1d8] px-5 py-3 md:hidden">
            <a
              onClick={() => setMenuOpen(false)}
              href="#home"
              className="p-2"
            >
              Home
            </a>

            <a
              onClick={() => {
                setCategory("Ladies Wear");
                setMenuOpen(false);
              }}
              href="#shop"
              className="p-2"
            >
              Ladies Wear
            </a>

            <a
              onClick={() => setMenuOpen(false)}
              href="#stitching"
              className="p-2"
            >
              Custom Stitching
            </a>

            <a
              onClick={() => {
                setCategory("Cosmetics");
                setMenuOpen(false);
              }}
              href="#shop"
              className="p-2"
            >
              Cosmetics
            </a>

            <div className="my-2 border-t border-[#eadbd2]" />

            {user ? (
              <div className="flex items-center justify-between gap-3 p-2">
                <span className="flex min-w-0 items-center gap-2 font-semibold">
                  <UserRound size={18} />
                  <span className="truncate">{user.name}</span>
                </span>

                <button
                  onClick={handleLogout}
                  className="flex shrink-0 items-center gap-1 rounded-full border border-[#783e35] px-3 py-2 text-sm font-bold text-[#783e35]"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 p-2">
                <button
                  onClick={() => openAuth("login")}
                  className="flex-1 rounded-full bg-[#783e35] px-4 py-3 font-bold text-white"
                >
                  Login
                </button>

                <button
                  onClick={() => openAuth("signup")}
                  className="flex-1 rounded-full border border-[#783e35] px-4 py-3 font-bold text-[#783e35]"
                >
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        )}
      </header>

      <main>
        {/* Automatic image slider */}
        <section
          aria-label="Featured collection slider"
          className="relative mx-auto max-w-7xl overflow-hidden bg-[#783e35] md:mt-5 md:rounded-3xl"
        >
          <div className="relative h-[330px] sm:h-[420px] md:h-[520px]">
            {sliderProducts.map((slide, index) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  currentSlide === index
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
                }`}
                aria-hidden={currentSlide !== index}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

                <div className="absolute inset-0 flex flex-col items-start justify-center px-8 text-white sm:px-14 md:px-20">
                  <p className="text-xs font-bold uppercase tracking-[3px] sm:text-sm">
                    Welcome to GoriGopal
                  </p>

                  <h1 className="mt-4 max-w-xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 max-w-md text-sm leading-6 text-white/90 sm:text-lg">
                    {slide.subtitle}
                  </p>

                  <a
                    href="#shop"
                    onClick={() => {
                      if (index === 2) {
                        setCategory("Cosmetics");
                      } else {
                        setCategory("All");
                      }
                    }}
                    className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-[#783e35] hover:bg-[#f3e5dc]"
                  >
                    {slide.button} →
                  </a>
                </div>
              </div>
            ))}

            <button
              onClick={previousSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#783e35] shadow hover:bg-white sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={25} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#783e35] shadow hover:bg-white sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={25} />
            </button>

            <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
              {sliderProducts.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Intro hero */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16"
        >
          <div>
            <p className="font-bold uppercase tracking-[3px] text-[#b57b60]">
              Your style, your story
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Beauty in
              <br />
              every <span className="text-[#a96e58]">stitch.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-gray-600">
              Ladies clothing, custom tailoring and beauty essentials —
              thoughtfully selected for you.
            </p>

            <a
              href="#shop"
              onClick={() => setCategory("All")}
              className="mt-7 inline-block rounded-full bg-[#783e35] px-7 py-4 font-bold text-white hover:bg-[#592d27]"
            >
              Explore Collection →
            </a>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Scissors size={18} />
                Custom Stitching
              </span>

              <span className="flex items-center gap-2">
                <Sparkles size={18} />
                Beauty Products
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=85"
              alt="Fashion collection"
              className="h-[380px] w-full rounded-3xl object-cover md:h-[500px]"
            />

            <div className="absolute bottom-4 left-4 rounded-xl bg-white p-4 shadow-lg">
              <p className="text-xs text-gray-500">MADE WITH CARE</p>
              <p className="mt-1 font-bold">Tradition meets style</p>
            </div>
          </div>
        </section>

        {/* Category cards */}
        <section className="bg-white px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-sm font-bold uppercase tracking-[3px] text-[#b57b60]">
              Find your favourites
            </p>

            <h2 className="mt-2 text-center text-3xl font-black">
              Shop by Category
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <button
                onClick={() => {
                  setCategory("Ladies Wear");
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-2xl border border-[#f0e1d8] bg-[#fffaf7] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl">👗</span>
                <h3 className="mt-3 font-bold">Ladies Wear</h3>
              </button>

              <button
                onClick={() => {
                  setCategory("Cosmetics");
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-2xl border border-[#f0e1d8] bg-[#fffaf7] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl">💄</span>
                <h3 className="mt-3 font-bold">Cosmetics</h3>
              </button>

              <a
                href="#stitching"
                className="rounded-2xl border border-[#f0e1d8] bg-[#fffaf7] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl">🧵</span>
                <h3 className="mt-3 font-bold">Custom Stitching</h3>
              </a>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="shop" className="mx-auto max-w-7xl px-4 py-14">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#b57b60]">
              Our collection
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Shop your favourites
            </h2>
          </div>

          <div className="mb-7 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-xl border border-[#eadbd2] bg-white px-4">
              <Search size={19} />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent py-3 outline-none sm:w-64"
              />
            </div>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-xl border border-[#eadbd2] bg-white px-4 py-3"
            >
              <option value="All">All Categories</option>
              <option value="Ladies Wear">Ladies Wear</option>
              <option value="Cosmetics">Cosmetics</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-[#f0e1d8] bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-62 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b57b60]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xl font-extrabold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-[#783e35] px-5 py-3 text-sm font-bold text-white hover:bg-[#592d27]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              No products found. Try another search.
            </p>
          )}
        </section>

        {/* Stitching service */}
        <section
          id="stitching"
          className="mx-4 mb-14 rounded-3xl bg-[#f3e5dc] px-6 py-12 text-center md:mx-auto md:max-w-7xl"
        >
          <Scissors className="mx-auto text-[#783e35]" size={36} />

          <h2 className="mt-4 text-3xl font-black">
            Custom Stitching Service  Contact With (Usha Saini)
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
            Get your outfits stitched according to your preferred design,
            measurements and style. Contact us to discuss your requirements.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block rounded-full bg-[#783e35] px-7 py-3 font-bold text-white hover:bg-[#592d27]"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Shopping cart drawer */}
      {showCart && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/40"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowCart(false);
            }
          }}
        >
          <aside
            className="flex h-full w-full max-w-md flex-col bg-[#fffaf7] p-5 shadow-xl"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-[#eadbd2] pb-4">
              <h2 className="text-2xl font-black">
                Your Cart ({totalItems})
              </h2>

              <button
                onClick={() => setShowCart(false)}
                aria-label="Close cart"
                className="rounded-full p-2 hover:bg-[#f3e5dc]"
              >
                <X />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto py-5">
              {cart.length === 0 ? (
                <p className="py-10 text-center text-gray-500">
                  Your cart is empty. Add a product to get started.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 border-b border-[#eadbd2] pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-16 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>

                      <p className="mt-1 text-sm text-gray-600">
                        ₹{item.price.toLocaleString("en-IN")} each
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() =>
                            changeQuantity(item.id, -1)
                          }
                          className="rounded-full border p-1.5 hover:bg-[#f3e5dc]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={15} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            changeQuantity(item.id, 1)
                          }
                          className="rounded-full border p-1.5 hover:bg-[#f3e5dc]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={15} />
                        </button>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto rounded-full p-2 text-red-600 hover:bg-red-50"
                          aria-label="Remove item"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>

                    <p className="font-bold">
                      ₹
                      {(item.price * item.quantity).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-[#eadbd2] pt-5">
              <div className="flex justify-between text-lg font-extrabold">
                <span>Total</span>
                <span>
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                disabled={cart.length === 0}
                onClick={() =>
                  alert(
                    "Checkout is not connected yet. Orders are not being placed."
                  )
                }
                className="mt-5 w-full rounded-full bg-[#783e35] px-5 py-4 font-bold text-white hover:bg-[#592d27] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Proceed to Checkout
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Local delivery · COD and online payment integration pending
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Login / Signup modal */}
      {authMode && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setAuthMode("");
              setAuthMessage("");
            }
          }}
        >
          <div
            className="relative my-auto w-full max-w-md rounded-3xl bg-[#fffaf7] p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
          >
            <button
              onClick={() => {
                setAuthMode("");
                setAuthMessage("");
              }}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-[#f3e5dc]"
              aria-label="Close login form"
            >
              <X />
            </button>

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e5dc] text-[#783e35]">
              <UserRound size={30} />
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-[#b57b60]">
              Welcome to GoriGopal
            </p>

            <h2
              id="auth-title"
              className="mt-2 text-3xl font-black text-[#783e35]"
            >
              {authMode === "signup"
                ? "Create Account"
                : "Welcome Back"}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {authMode === "signup"
                ? "Create your account to get started."
                : "Enter your details to continue."}
            </p>

            <form
              onSubmit={handleAuthSubmit}
              className="mt-6 space-y-4"
            >
              {authMode === "signup" && (
                <input
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                  value={authForm.name}
                  onChange={(event) =>
                    setAuthForm({
                      ...authForm,
                      name: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eadbd2] bg-white px-4 py-3 outline-none focus:border-[#783e35]"
                  required
                />
              )}

              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                value={authForm.email}
                onChange={(event) =>
                  setAuthForm({
                    ...authForm,
                    email: event.target.value,
                  })
                }
                className="w-full rounded-xl border border-[#eadbd2] bg-white px-4 py-3 outline-none focus:border-[#783e35]"
                required
              />

              <input
                type="password"
                placeholder="Password (minimum 6 characters)"
                autoComplete={
                  authMode === "signup"
                    ? "new-password"
                    : "current-password"
                }
                value={authForm.password}
                onChange={(event) =>
                  setAuthForm({
                    ...authForm,
                    password: event.target.value,
                  })
                }
                minLength={6}
                className="w-full rounded-xl border border-[#eadbd2] bg-white px-4 py-3 outline-none focus:border-[#783e35]"
                required
              />

              {authMessage && (
                <p
                  role="alert"
                  className="text-sm text-red-700"
                >
                  {authMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-[#783e35] px-5 py-3 font-bold text-white transition hover:bg-[#592d27]"
              >
                {authMode === "signup"
                  ? "Create Account"
                  : "Login"}
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-gray-600">
              {authMode === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <button
                onClick={() => openAuth(
                  authMode === "signup" ? "login" : "signup"
                )}
                className="font-bold text-[#783e35] underline"
              >
                {authMode === "signup" ? "Login" : "Sign Up"}
              </button>
            </p>

            <p className="mt-4 text-center text-xs text-gray-500">
              Demo only: account details are not saved or verified.
            </p>
          </div>
        </div>
      )}

      

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#4c2a25] px-4 py-9 text-center text-white"
      >
        <h2 className="text-2xl font-black">GoriGopal.Com</h2>

        <p className="mt-2 text-sm text-white/75">
          Fashion, beauty and stitching — with care.
        </p>

 <p className="mt-4 text-sm text-white/80"> 
   Address:Chirawa 
 </p>       
<p className="mt-4 text-sm text-white/80">
  Shop Owner: MR. Dhannu  & MS. Usha 
</p>

<p className="mt-2 text-sm text-white/80">
  Contact Number:{" "}
  <a
    href="tel:+9929962758"
    className="font-bold text-white underline hover:text-[#e8b99b]"
  >
    +91 9929962758
  </a>
</p>

<a
  href="https://wa.me/9929962758"
  target="_blank"
  rel="noreferrer"
  className="mt-3 inline-block rounded-full bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700"
>
  Chat on WhatsApp
</a>


        <p className="mt-4 text-xs text-white/60">
          © {new Date().getFullYear()} GoriGopal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

