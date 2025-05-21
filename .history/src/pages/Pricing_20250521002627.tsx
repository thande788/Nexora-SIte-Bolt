import React, { useEffect, useState } from "react";
import {
  baseServices,
  premiumServices,
  addOns,
  PlanItem,
  BundleApplied,
} from "../types/plans";
import CartTable from "../components/CartTable";
import PricingCard from "../components/PricingCard";

const Pricing: React.FC = () => {
  const [cart, setCart] = useState<PlanItem[]>([]);
  const [bundleApplied, setBundleApplied] = useState<BundleApplied | null>(null);
  const [bundleToast, setBundleToast] = useState<string | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  // Add to cart logic
  const addToCart = (item: PlanItem): void => {
    if (cart.some((i) => i.name === item.name)) return;
    setCart((prev) => [...prev, item]);
    setShowCart(true);
  };

  const removeFromCart = (name: string): void => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = (): void => {
    setCart([]);
    setBundleApplied(null);
  };

  // Bundle logic
  const applyBundle = (
    bundleName: string,
    bundlePrice: number,
    replaceItems: PlanItem[]
  ): void => {
    const filtered = cart.filter((i) => !replaceItems.some((r) => r.name === i.name));
    const bundleItem: PlanItem = { name: bundleName, price: bundlePrice, type: "bundle" };
    setCart([...filtered, bundleItem]);
    setBundleApplied({
      name: bundleName,
      message: `Bundle Applied: ${bundleName}`,
      icon: <span className="mr-2">✅</span>,
    });
    setBundleToast(`Bundle Applied: ${bundleName}`);
    setTimeout(() => setBundleToast(null), 4000);
  };

  useEffect(() => {
    const base = cart.filter((i) => i.type === "service" && !i.premium);
    const premium = cart.filter((i) => i.type === "service" && i.premium);

    const has = (names: string[]) => names.every((n) => cart.some((i) => i.name === n));

    if (base.length === 2) {
      applyBundle("Growth Starter", 39000, base);
    } else if (premium.length >= 3) {
      applyBundle("SmartOps Suite", 77000, premium);
    } else if (has(["Finance+ Forecasting", "ESG+ Reporting", "Talent Insights Pro"])) {
      applyBundle("Impact Pro", 92000, premium);
    } else if (
      has([
        "Finance+ Forecasting",
        "ESG+ Reporting",
        "Talent Insights Pro",
        "Ops+ Optimization",
      ])
    ) {
      applyBundle("Compliance360", 129000, premium);
    }
  }, [cart]);

  // Helper for PricingCard props
  const toPricingCardProps = (item: PlanItem) => ({
    title: item.name,
    description: item.premium
      ? "Premium Service"
      : item.type === "add-on"
      ? "Add-On"
      : "Core Service",
    price: `KES ${item.price.toLocaleString()}`,
    period: "once",
    features: [
      {
        text: item.premium
          ? "Premium features included"
          : item.type === "add-on"
          ? "Enhance your plan"
          : "Essential business feature",
        included: true,
      },
    ],
    isPopular: !!item.premium,
    ctaText: cart.some((i) => i.name === item.name) ? "Added" : "Add to Plan",
    color: item.premium ? "accent" : item.type === "add-on" ? "green" : "primary",
    disabled: cart.some((i) => i.name === item.name),
  });

  // Floating cart button for mobile
  const floatingCartBtn = (
    <button
      className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white rounded-full shadow-lg px-5 py-3 flex items-center gap-2 md:hidden"
      onClick={() => setShowCart(true)}
      aria-label="Show Cart"
      style={{ display: cart.length ? "flex" : "none" }}
    >
      <span role="img" aria-label="cart">🛒</span>
      <span>{cart.length}</span>
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-2 text-center text-primary-700">Pricing</h1>
      <p className="text-center text-gray-500 mb-10">
        Choose the services and add-ons that fit your business. Bundle for instant savings!
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary-700">Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {baseServices.map((service) => (
            <PricingCard
              key={service.name}
              {...toPricingCardProps(service)}
              isPopular={false}
              onClick={() => addToCart(service)}
              disabled={cart.some((i) => i.name === service.name)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-accent-700">Premium Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {premiumServices.map((service) => (
            <PricingCard
              key={service.name}
              {...toPricingCardProps(service)}
              isPopular={true}
              onClick={() => addToCart(service)}
              disabled={cart.some((i) => i.name === service.name)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-green-700">Add-Ons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {addOns.map((addon) => (
            <PricingCard
              key={addon.name}
              {...toPricingCardProps(addon)}
              color="green"
              onClick={() => addToCart(addon)}
              disabled={cart.some((i) => i.name === addon.name)}
            />
          ))}
        </div>
      </section>

      {/* Floating cart button for mobile */}
      {floatingCartBtn}

      {/* Cart Drawer/Modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 border border-primary-200 dark:border-gray-700 rounded-t-2xl md:rounded-2xl shadow-2xl p-4 w-full max-w-md mx-auto animate-fade-in relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl"
              onClick={() => setShowCart(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary-600 text-xl">🧾</span>
              <h3 className="font-bold text-lg text-primary-800 dark:text-white">
                Your Plan{" "}
                <span className="ml-2 text-xs font-normal text-primary-600 dark:text-primary-300">
                  ({cart.length} item{cart.length !== 1 && "s"})
                </span>
              </h3>
            </div>
            <CartTable
              cart={cart}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
              bundleApplied={bundleApplied}
              bundleToast={bundleToast}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
