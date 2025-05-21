import React, { useState, useMemo } from "react";
import {
  baseServices,
  premiumServices,
  addOns,
  PlanItem,
  BundleApplied,
} from "../types/plans";
import CartTable from "../components/CartTable";
import PricingCard from "../components/PricingCard";
import { Tab, Disclosure } from "@headlessui/react";
import { ChevronUp, Briefcase, BarChart2, Leaf, Users, Layers, Sparkles, Building2 } from "lucide-react";

type BillingCycle = "monthly" | "annual";

const BUNDLES: PlanItem[] = [
  { name: "Growth Starter", price: 39000, type: "bundle" },
  { name: "SmartOps Suite", price: 77000, type: "bundle" },
  { name: "Impact Pro", price: 92000, type: "bundle" },
  { name: "Compliance360", price: 129000, type: "bundle" },
];

const ENTERPRISE: PlanItem[] = [
  { name: "Enterprise AI", price: 185000, type: "bundle" },
  { name: "Nexora Full Suite", price: 231000, type: "bundle" },
];

// Lucide icons for each category
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Financial Advisory": <Briefcase className="w-5 h-5 text-primary-600" />,
  "Operations Consulting": <BarChart2 className="w-5 h-5 text-purple-600" />,
  "ESG & Sustainability": <Leaf className="w-5 h-5 text-green-600" />,
  "Talent & HR Analytics": <Users className="w-5 h-5 text-accent-600" />,
  "Bundles": <Layers className="w-5 h-5 text-accent-600" />,
  "Enterprise": <Building2 className="w-5 h-5 text-primary-600" />,
  "Add-ons": <Sparkles className="w-5 h-5 text-green-600" />,
};

const SERVICE_CATEGORIES = [
  {
    name: "Financial Advisory",
    icon: CATEGORY_ICONS["Financial Advisory"],
    plans: [
      {
        ...baseServices[0],
        price: 23000,
        period: "mo",
        features: [
          "Tax alerts",
          "Compliance tracking",
          "Payroll summaries",
        ],
      },
      {
        ...premiumServices[0],
        price: 38000,
        period: "mo",
        features: [
          "Everything in Standard",
          "Monthly forecasting",
          "Report generation",
          "Direct advisory support",
        ],
      },
    ],
  },
  {
    name: "Operations Consulting",
    icon: CATEGORY_ICONS["Operations Consulting"],
    plans: [
      {
        ...baseServices[3],
        price: 27000,
        period: "one-time",
        features: [
          "Process Review",
          "Gap Analysis",
        ],
      },
      {
        ...premiumServices[2],
        price: 46000,
        period: "mo",
        features: [
          "Ops+ Optimization",
          "Automation",
          "AI Workflow",
        ],
      },
    ],
  },
  {
    name: "ESG & Sustainability",
    icon: CATEGORY_ICONS["ESG & Sustainability"],
    plans: [
      {
        ...baseServices[1],
        price: 18000,
        period: "mo",
        features: [
          "ESG Starter",
          "Basic Reporting",
        ],
      },
      {
        ...premiumServices[1],
        price: 38000,
        period: "mo",
        features: [
          "ESG+ Reporting",
          "Sustainability Metrics",
          "AI ESG Insights",
        ],
      },
    ],
  },
  {
    name: "Talent & HR Analytics",
    icon: CATEGORY_ICONS["Talent & HR Analytics"],
    plans: [
      {
        ...baseServices[2],
        price: 20000,
        period: "mo",
        features: [
          "Smart Hire",
          "Talent Pool Insights",
        ],
      },
      {
        ...premiumServices[3],
        price: 33000,
        period: "mo",
        features: [
          "Talent Insights Pro",
          "AI Analytics",
          "Retention Modeling",
        ],
      },
    ],
  },
];

const ADDONS = [
  {
    ...addOns[0],
    price: 5000,
    period: "mo",
    description: "ESG Dashboard",
    features: ["Real-time ESG metrics", "Custom dashboards"],
  },
  {
    ...addOns[1],
    price: 3000,
    period: "batch",
    description: "AI Resume Parser",
    features: ["Bulk resume parsing", "AI-powered insights"],
  },
  {
    ...addOns[2],
    price: 7500,
    period: "mo",
    description: "Custom Tax Filing Templates",
    features: ["Tailored tax templates", "Regulatory updates"],
  },
  {
    ...addOns[3],
    price: 15000,
    period: "mo",
    description: "Dedicated Support Rep",
    features: ["Priority support", "Dedicated account manager"],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function calculateCartTotal(cart: PlanItem[], billing: BillingCycle): number {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  if (billing === "annual") {
    total = Math.round(total * 12 * 0.9); // 10% off for annual
  }
  return total;
}

const Pricing: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cart, setCart] = useState<PlanItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  // Add to cart logic
  const addToCart = (item: PlanItem) => {
    if (cart.some((i) => i.name === item.name)) return;
    if (item.type === "bundle") {
      setCart((prev) => [
        ...prev.filter((i) => i.type !== "service" && i.type !== "bundle"),
        item,
      ]);
    } else if (item.type === "service") {
      setCart((prev) => [
        ...prev.filter((i) => i.type !== "bundle"),
        item,
      ]);
    } else {
      setCart((prev) => [...prev, item]);
    }
    setShowCart(true);
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => setCart([]);

  const canSubscribe = useMemo(() => {
    const baseOrBundle = cart.filter(
      (i) => i.type === "service" || i.type === "bundle"
    );
    return baseOrBundle.length === 1;
  }, [cart]);

  const monthlyTotal = calculateCartTotal(cart, "monthly");
  const annualTotal = calculateCartTotal(cart, "annual");
  const annualSavings = monthlyTotal * 12 - annualTotal;
  const promoText = "🎉 20% off for the first 3 months!";

  // Tab content
  const tabPanels = [
    // Services Tab
    <div key="services" className="space-y-8">
      {SERVICE_CATEGORIES.map((cat) => (
        <div key={cat.name}>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            {cat.icon} {cat.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cat.plans.map((plan) => (
              <Disclosure key={plan.name}>
                {({ open }) => (
                  <div className="rounded-xl border bg-white dark:bg-gray-800 shadow-soft">
                    <Disclosure.Button className="w-full flex justify-between items-center px-6 py-4 text-left transition hover:bg-gray-50 dark:hover:bg-gray-900">
                      <span className="font-semibold">{plan.name}</span>
                      <ChevronUp
                        className={classNames(
                          "h-5 w-5 transition-transform",
                          open ? "rotate-180" : ""
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4">
                      <PricingCard
                        title={plan.name}
                        description={
                          plan.period === "one-time" ? "One-time" : "Monthly"
                        }
                        price={`KES ${plan.price.toLocaleString()}`}
                        period={plan.period}
                        features={plan.features.map((f: string) => ({
                          text: f,
                          included: true,
                        }))}
                        isPopular={
                          plan.name.includes("Pro") ||
                          plan.name.includes("Forecasting")
                        }
                        ctaText={
                          cart.some((i) => i.name === plan.name)
                            ? "Added"
                            : "Add to Plan"
                        }
                        color={
                          cat.name === "Financial Advisory"
                            ? "primary"
                            : cat.name === "Operations Consulting"
                            ? "purple"
                            : cat.name === "ESG & Sustainability"
                            ? "green"
                            : "accent"
                        }
                        onClick={() => addToCart(plan)}
                        disabled={cart.some((i) => i.name === plan.name)}
                      />
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      ))}
    </div>,

    // Bundles Tab
    <div key="bundles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {BUNDLES.map((bundle) => (
        <Disclosure key={bundle.name}>
          {({ open }) => (
            <div className="rounded-xl border bg-white dark:bg-gray-800 shadow-soft">
              <Disclosure.Button className="w-full flex justify-between items-center px-6 py-4 text-left transition hover:bg-gray-50 dark:hover:bg-gray-900">
                <span className="font-semibold">{bundle.name}</span>
                <ChevronUp
                  className={classNames(
                    "h-5 w-5 transition-transform",
                    open ? "rotate-180" : ""
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-4">
                <PricingCard
                  title={bundle.name}
                  description="Bundle"
                  price={`KES ${bundle.price.toLocaleString()}`}
                  period="mo"
                  features={[
                    { text: "Multiple services included", included: true },
                    { text: "Best value", included: true },
                  ]}
                  isPopular={
                    bundle.name === "SmartOps Suite" ||
                    bundle.name === "Compliance360"
                  }
                  ctaText={
                    cart.some((i) => i.name === bundle.name)
                      ? "Added"
                      : "Add to Plan"
                  }
                  color="accent"
                  onClick={() => addToCart(bundle)}
                  disabled={cart.some((i) => i.name === bundle.name)}
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>,

    // Enterprise Tab
    <div key="enterprise" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ENTERPRISE.map((ent) => (
        <Disclosure key={ent.name}>
          {({ open }) => (
            <div className="rounded-xl border bg-white dark:bg-gray-800 shadow-soft">
              <Disclosure.Button className="w-full flex justify-between items-center px-6 py-4 text-left transition hover:bg-gray-50 dark:hover:bg-gray-900">
                <span className="font-semibold">{ent.name}</span>
                <ChevronUp
                  className={classNames(
                    "h-5 w-5 transition-transform",
                    open ? "rotate-180" : ""
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-4">
                <PricingCard
                  title={ent.name}
                  description="Enterprise"
                  price={`from KES ${ent.price.toLocaleString()}`}
                  period="mo"
                  features={[
                    { text: "Custom AI solutions", included: true },
                    { text: "Dedicated support", included: true },
                    { text: "Full Suite Access", included: true },
                  ]}
                  isPopular={ent.name === "Nexora Full Suite"}
                  ctaText="Contact Sales"
                  color="primary"
                  ctaAsLink
                  ctaTo="/contact"
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>,

    // Add-ons Tab
    <div key="addons" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ADDONS.map((addon) => (
        <Disclosure key={addon.name}>
          {({ open }) => (
            <div className="rounded-xl border bg-white dark:bg-gray-800 shadow-soft">
              <Disclosure.Button className="w-full flex justify-between items-center px-6 py-4 text-left transition hover:bg-gray-50 dark:hover:bg-gray-900">
                <span className="font-semibold">{addon.description}</span>
                <ChevronUp
                  className={classNames(
                    "h-5 w-5 transition-transform",
                    open ? "rotate-180" : ""
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-4">
                <PricingCard
                  title={addon.description}
                  description="Add-On"
                  price={`KES ${addon.price.toLocaleString()}`}
                  period={addon.period}
                  features={addon.features.map((f: string) => ({
                    text: f,
                    included: true,
                  }))}
                  ctaText={
                    cart.some((i) => i.name === addon.name)
                      ? "Added"
                      : "Add to Plan"
                  }
                  color="green"
                  onClick={() => addToCart(addon)}
                  disabled={cart.some((i) => i.name === addon.name)}
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>,
  ];

  // Billing toggle
  const billingToggle = (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={billing === "monthly" ? "font-bold" : "text-gray-400"}>
        Monthly
      </span>
      <button
        className="relative inline-flex items-center h-6 rounded-full w-12 bg-gray-200 dark:bg-gray-700 transition"
        onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
        aria-label="Toggle billing"
      >
        <span
          className={classNames(
            "inline-block w-6 h-6 transform bg-primary-600 rounded-full transition",
            billing === "annual" ? "translate-x-6" : "translate-x-0"
          )}
        />
      </button>
      <span className={billing === "annual" ? "font-bold" : "text-gray-400"}>
        Annual{" "}
        <span className="text-green-600">
          -10%
        </span>
      </span>
    </div>
  );

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

  // Plan summary panel
  const planSummary = (
    <div className="sticky top-24 bg-white dark:bg-gray-900 border border-primary-200 dark:border-gray-700 rounded-xl shadow-xl p-6 mb-8">
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <Layers className="w-5 h-5 text-primary-600" /> Plan Summary
      </h3>
      <ul className="mb-2">
        {cart.map((item) => (
          <li key={item.name} className="flex justify-between items-center py-1">
            <span>{item.name}</span>
            <span className="font-mono text-xs">
              KES {item.price.toLocaleString()}
            </span>
            <button
              className="ml-2 text-gray-400 hover:text-red-500"
              onClick={() => removeFromCart(item.name)}
              aria-label="Remove"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-semibold mt-2">
        <span>Total ({billing === "annual" ? "Annual" : "Monthly"}):</span>
        <span>KES {calculateCartTotal(cart, billing).toLocaleString()}</span>
      </div>
      {billing === "annual" && (
        <div className="text-green-600 text-xs mt-1">
          You save KES {annualSavings.toLocaleString()} per year!
        </div>
      )}
      <div className="text-accent-600 text-xs mt-2">{promoText}</div>
      <button
        className={classNames(
          "w-full mt-4 py-2 px-4 rounded-lg font-bold transition",
          canSubscribe
            ? "bg-primary-600 text-white hover:bg-primary-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        )}
        disabled={!canSubscribe}
        onClick={() => {
          // TODO: Integrate Netlify Forms or EmailJS here
          alert("Subscribed! (Demo only)");
        }}
      >
        Subscribe
      </button>
      <button
        className="w-full mt-2 py-2 px-4 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 font-semibold transition"
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-2 text-center text-primary-700">
        Nexora AI-Powered Consultancy Pricing
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Explore our 2025 offerings. Choose a plan, bundle, or add-ons.{" "}
        <span className="font-semibold text-accent-600">
          Launch promo: 20% off for the first 3 months!
        </span>
      </p>
      {billingToggle}
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 dark:bg-gray-800 p-1 mb-8 max-w-2xl mx-auto">
          {["Services", "Bundles", "Enterprise", "Add-ons"].map((tab, idx) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium rounded-lg transition",
                  selected
                    ? "bg-primary-600 text-white shadow"
                    : "text-primary-700 hover:bg-primary-100 dark:hover:bg-gray-700"
                )
              }
            >
              {CATEGORY_ICONS[tab] || null} <span className="ml-1">{tab}</span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabPanels.map((panel, idx) => (
            <Tab.Panel key={idx}>{panel}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      {/* Desktop sticky summary */}
      <div className="hidden md:block fixed right-8 top-24 w-80 z-40">
        {cart.length > 0 && planSummary}
      </div>

      {/* Mobile floating cart button */}
      {floatingCartBtn}

      {/* Mobile cart modal */}
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
            {planSummary}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
