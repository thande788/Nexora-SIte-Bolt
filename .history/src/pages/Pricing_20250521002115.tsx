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

  const addToCart = (item: PlanItem): void => {
    if (cart.some((i) => i.name === item.name)) return;
    if (item.type === "service" || item.type === "bundle" || item.type === "add-on") {
      setCart((prev) => [...prev, item]);
      setShowCart(true);
    }
  };

  const removeFromCart = (name: string): void => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = (): void => {
    setCart([]);
    setBundleApplied(null);
  };

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

  // Helper to convert PlanItem to PricingCard props
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
    isPopular: false,
    ctaText: "Add to Plan",
    color: item.premium ? "accent" : item.type === "add-on" ? "green" : "primary",
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[...baseServices, ...premiumServices].map((service) => (
          <div key={service.name}>
            <PricingCard
              {...toPricingCardProps(service)}
              ctaText="Add to Plan"
              isPopular={!!service.premium}
              // Add to cart on click
              // @ts-ignore
              // PricingCard uses a <Link>, so we add a button below for demo
            />
            <button
              className="w-full mt-4 py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition"
              onClick={() => addToCart(service)}
            >
              Add to Plan
            </button>
          </div>
        ))}
        {addOns.map((addon) => (
          <div key={addon.name}>
            <PricingCard
              {...toPricingCardProps(addon)}
              ctaText="Add to Plan"
              color="green"
              // @ts-ignore
            />
            <button
              className="w-full mt-4 py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
              onClick={() => addToCart(addon)}
            >
              Add to Plan
            </button>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="fixed bottom-4 left-4 md:sticky md:top-32 md:self-start md:w-96 z-40 w-[95vw] max-w-md md:max-w-xs">
          <div className="bg-white dark:bg-gray-900 border border-primary-200 dark:border-gray-700 rounded-xl shadow-xl p-4 relative animate-fade-in md:sticky md:top-32">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setShowCart(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary-600">🧾</span>
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
