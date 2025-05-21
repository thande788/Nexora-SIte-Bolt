import React, { useEffect, useState } from "react";
import {
  baseServices,
  premiumServices,
  addOns,
  bundles,
} from "./plans";
import CartTable from "./CartT";

interface CartItem {
  name: string;
  price: number;
  type: "service" | "bundle" | "add-on";
  premium?: boolean;
}

interface BundleApplied {
  name: string;
  message: string;
  icon: React.ReactNode;
}

const Pricing: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bundleApplied, setBundleApplied] = useState<BundleApplied | null>(null);
  const [bundleToast, setBundleToast] = useState<string | null>(null);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: CartItem) => {
    if (cart.some((i) => i.name === item.name)) return;
    if (item.type === "service" || item.type === "bundle" || item.type === "add-on") {
      setCart((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => {
    setCart([]);
    setBundleApplied(null);
  };

  const applyBundle = (bundleName: string, bundlePrice: number, replaceItems: CartItem[]) => {
    const filtered = cart.filter((i) => !replaceItems.some((r) => r.name === i.name));
    const bundleItem: CartItem = { name: bundleName, price: bundlePrice, type: "bundle" };
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

  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-xl font-bold">Services</h2>
        {[...baseServices, ...premiumServices].map((service) => (
          <div
            key={service.name}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{service.name}</h4>
              <p className="text-sm text-gray-500">
                KES {service.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => addToCart(service)}
              className="bg-primary-600 text-white px-4 py-1 rounded"
            >
              Add to Plan
            </button>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-6">Add-Ons</h2>
        {addOns.map((addon) => (
          <div
            key={addon.name}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{addon.name}</h4>
              <p className="text-sm text-gray-500">
                KES {addon.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => addToCart(addon)}
              className="bg-primary-600 text-white px-4 py-1 rounded"
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
              setCart={setCart}
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