import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown, Check, Star, Users, PieChart, BarChart3, Shield, BrainCircuit, Layers, Zap, X } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import clsx from 'clsx';

const BILLING_OPTIONS = [
  { label: 'Monthly', value: 'monthly', discount: 0 },
  { label: 'Annual (10% off)', value: 'annual', discount: 0.10 },
];

const LAUNCH_OFFER = {
  text: '20% off for the first 3 months!',
  className: 'bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold ml-2',
};

const services = [
  {
    category: 'Financial Advisory',
    icon: <PieChart className="text-primary-600" size={28} />,
    plans: [
      {
        name: 'Standard Finance',
        price: 23000,
        period: 'month',
        features: [
          'Tax alerts',
          'Compliance tracking',
          'Payroll summaries',
        ],
        icon: <PieChart className="text-primary-600" size={24} />,
      },
      {
        name: 'Finance + Forecasting',
        price: 38000,
        period: 'month',
        features: [
          'Everything in Standard',
          'Monthly forecasting',
          'Report generation',
          'Direct advisory support',
        ],
        badge: 'Popular',
        icon: <PieChart className="text-primary-600" size={24} />,
      },
    ],
  },
  {
    category: 'Operations Consulting',
    icon: <BarChart3 className="text-accent-600" size={28} />,
    plans: [
      {
        name: 'Process Review',
        price: 27000,
        period: 'one-time',
        features: [
          'Process mapping',
          'Bottleneck analysis',
          'Actionable recommendations',
        ],
        icon: <BarChart3 className="text-accent-600" size={24} />,
      },
      {
        name: 'Ops + Optimization',
        price: 46000,
        period: 'month',
        features: [
          'Everything in Process Review',
          'Workflow automation',
          'Performance dashboards',
          'Continuous improvement support',
        ],
        badge: 'Best Value',
        icon: <BarChart3 className="text-accent-600" size={24} />,
      },
    ],
  },
  {
    category: 'ESG & Sustainability',
    icon: <Shield className="text-green-600" size={28} />,
    plans: [
      {
        name: 'ESG Starter',
        price: 18000,
        period: 'month',
        features: [
          'ESG compliance monitoring',
          'Basic sustainability reporting',
          'Carbon tracking',
        ],
        icon: <Shield className="text-green-600" size={24} />,
      },
      {
        name: 'ESG+ Reporting',
        price: 38000,
        period: 'month',
        features: [
          'Everything in ESG Starter',
          'Automated ESG reports',
          'Impact measurement',
          'Investor-ready dashboards',
        ],
        icon: <Shield className="text-green-600" size={24} />,
      },
    ],
  },
  {
    category: 'Talent & HR Analytics',
    icon: <Users className="text-purple-600" size={28} />,
    plans: [
      {
        name: 'Smart Hire',
        price: 20000,
        period: 'month',
        features: [
          'AI-powered recruitment',
          'Skills gap analysis',
          'Shortlisting automation',
        ],
        icon: <Users className="text-purple-600" size={24} />,
      },
      {
        name: 'Talent Insights Pro',
        price: 33000,
        period: 'month',
        features: [
          'Everything in Smart Hire',
          'Retention modeling',
          'Performance analytics',
          'Custom HR dashboards',
        ],
        icon: <Users className="text-purple-600" size={24} />,
      },
    ],
  },
];

const bundles = [
  {
    name: 'Growth Starter',
    price: 62000,
    period: 'month',
    description: 'Any 2 base-tier services',
    features: [
      // Split the first feature into multiple lines for consistent tick size
      'Choose any 2:',
      'Standard Finance',
      'Process Review',
      'ESG Starter',
      'Smart Hire',
      'Integrated dashboard',
      'Priority onboarding',
    ],
    badge: 'Popular',
    icon: <Layers className="text-accent-600" size={24} />,
  },
  {
    name: 'SmartOps Suite',
    price: 93000,
    period: 'month',
    description: 'Ops + Finance + Compliance',
    features: [
      'Ops+ Optimization',
      'Finance+ Forecasting',
      'Compliance automation',
      'Dedicated support',
    ],
    icon: <Layers className="text-accent-600" size={24} />,
  },
  {
    name: 'Impact Pro',
    price: 116000,
    period: 'month',
    description: 'ESG+, Finance+, HR Pro',
    features: [
      'ESG+ Reporting',
      'Finance+ Forecasting',
      'Talent Insights Pro',
      'Advanced analytics',
    ],
    badge: 'Best Value',
    icon: <Layers className="text-accent-600" size={24} />,
  },
  {
    name: 'Compliance360',
    price: 131000,
    period: 'month',
    description: 'All services + reports + alerts',
    features: [
      'All Nexora services',
      'Full compliance suite',
      'Automated alerts & reporting',
      'Executive dashboards',
    ],
    icon: <Layers className="text-accent-600" size={24} />,
  },
];

const enterprise = [
  {
    name: 'Enterprise AI',
    price: 185000,
    period: 'month',
    description: 'Custom AI-powered consultancy for large organizations',
    features: [
      'Tailored AI solutions',
      'On-premise or cloud deployment',
      'Dedicated account manager',
      'Quarterly strategy reviews',
    ],
    cta: 'Book a Demo',
  },
  {
    name: 'Nexora Full Suite',
    price: 231000,
    period: 'month',
    description: 'All Nexora services, integrations, and premium support',
    features: [
      'Everything in Enterprise AI',
      'All service modules',
      'Custom integrations',
      '24/7 premium support',
    ],
    cta: 'Contact Sales',
  },
];

const addons = [
  {
    name: 'Real-time ESG Dashboard',
    price: 5000,
    period: 'month',
    features: [
      'Live ESG metrics',
      'Custom widgets',
      'Mobile access',
    ],
    icon: <Shield className="text-green-600" size={22} />,
  },
  {
    name: 'AI Resume Parser',
    price: 3000,
    period: 'batch',
    features: [
      'Bulk CV parsing',
      'Skill extraction',
      'ATS integration',
    ],
    icon: <BrainCircuit className="text-purple-600" size={22} />,
  },
  {
    name: 'Custom Tax Filing Templates',
    price: 7500,
    period: 'month',
    features: [
      'Tailored to your business',
      'Regulatory updates',
      'Easy export',
    ],
    icon: <PieChart className="text-primary-600" size={22} />,
  },
  {
    name: 'Dedicated Support Rep',
    price: 15000,
    period: 'month',
    features: [
      'Named support contact',
      'Priority response',
      'Monthly check-ins',
    ],
    icon: <Users className="text-accent-600" size={22} />,
  },
];

function formatPrice(price: number, billing: string, period: string) {
  let final = price;
  let discount = 0;
  if (billing === 'annual' && period === 'month') {
    discount = 0.10;
    final = Math.round(price * 12 * (1 - discount));
    return (
      <>
        <span className="text-3xl font-bold">KES {final.toLocaleString()}</span>
        <span className="ml-2 text-base text-gray-500 dark:text-gray-400">/year</span>
        <span className="ml-2 text-green-600 dark:text-green-400 font-semibold text-xs">
          Save KES {(price * 12 * discount).toLocaleString()}
        </span>
      </>
    );
  }
  return (
    <>
      <span className="text-3xl font-bold">KES {price.toLocaleString()}</span>
      <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
        {period === 'one-time' ? 'one-time' : '/month'}
      </span>
    </>
  );
}

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [tab, setTab] = useState<'services' | 'bundles' | 'enterprise' | 'addons'>('services');
  const [cart, setCart] = useState<any[]>([]);
  const [showCalendly, setShowCalendly] = useState<{ open: boolean; plan?: string }>({ open: false });

  // Add to cart logic
  const addToCart = (item: any, type: 'service' | 'bundle' | 'addon') => {
    // Only one base plan or bundle at a time
    if (type === 'service' || type === 'bundle') {
      setCart((prev) => [
        ...prev.filter((i) => i.type === 'addon'), // remove previous base
        { ...item, type }
      ]);
    } else {
      // Add-on: allow multiple, but no duplicates
      setCart((prev) =>
        prev.some((i) => i.name === item.name && i.type === 'addon')
          ? prev
          : [...prev, { ...item, type }]
      );
    }
  };

  const removeFromCart = (name: string, type: string) => {
    setCart((prev) => prev.filter((i) => !(i.name === name && i.type === type)));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => {
    // Use annual discount if billing is annual and period is month
    if (billing === 'annual' && item.period === 'month') {
      return sum + Math.round(item.price * 12 * 0.9) / 12;
    }
    return sum + item.price;
  }, 0);

  // Handle subscribe (Netlify Forms example)
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate EmailJS or Netlify Forms here
    alert('Submitted! (Demo only)');
  };

  // Calendly modal
  const CalendlyModal = ({ open, plan, onClose }: { open: boolean; plan?: string; onClose: () => void }) => (
    <div className={clsx(
      "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition",
      open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
    )}>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-2xl relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={onClose}>
          <X size={24} />
        </button>
        <iframe
          src={`https://calendly.com/nexora/30min-demo${plan ? `?name=${encodeURIComponent(plan)}` : ''}`}
          width="100%"
          height="600"
          className="rounded-b-xl"
          title="Book a Demo"
        />
      </div>
    </div>
  );

  const ribbonClass = (badge: string) =>
    badge === 'Best Value'
      ? 'bg-green-600'
      : 'bg-primary-600';

  const ribbonText = (badge: string) =>
    badge === 'Best Value'
      ? 'Best Value'
      : 'Popular';

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-10 bg-gradient-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white mb-6">
              <span className="text-sm font-medium">Transparent Pricing</span>
              <span className={LAUNCH_OFFER.className}>{LAUNCH_OFFER.text}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible AI-Powered Consultancy Plans
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              All-in-one pricing for Financial, Operations, ESG, and Talent solutions. Choose a plan or bundle, or build your own with add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs & Billing Toggle */}
      <section className="bg-white dark:bg-gray-900 sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <div className="flex space-x-2 md:space-x-4 w-full md:w-auto justify-center">
            <button
              className={clsx(
                'px-4 py-2 rounded-lg font-semibold transition',
                tab === 'services'
                  ? 'bg-primary-600 text-white shadow'
                  : 'bg-gray-100 dark:bg-gray-800 text-primary-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700'
              )}
              onClick={() => setTab('services')}
            >
              <PieChart className="inline mr-2" size={18} /> Services
            </button>
            <button
              className={clsx(
                'px-4 py-2 rounded-lg font-semibold transition',
                tab === 'bundles'
                  ? 'bg-primary-600 text-white shadow'
                  : 'bg-gray-100 dark:bg-gray-800 text-primary-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700'
              )}
              onClick={() => setTab('bundles')}
            >
              <Layers className="inline mr-2" size={18} /> Bundles
            </button>
            <button
              className={clsx(
                'px-4 py-2 rounded-lg font-semibold transition',
                tab === 'enterprise'
                  ? 'bg-primary-600 text-white shadow'
                  : 'bg-gray-100 dark:bg-gray-800 text-primary-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700'
              )}
              onClick={() => setTab('enterprise')}
            >
              <Star className="inline mr-2" size={18} /> Enterprise
            </button>
            <button
              className={clsx(
                'px-4 py-2 rounded-lg font-semibold transition',
                tab === 'addons'
                  ? 'bg-primary-600 text-white shadow'
                  : 'bg-gray-100 dark:bg-gray-800 text-primary-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700'
              )}
              onClick={() => setTab('addons')}
            >
              <Zap className="inline mr-2" size={18} /> Add-ons
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-primary-900 dark:text-white">Billing:</span>
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              {BILLING_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  className={clsx(
                    'px-4 py-2 font-semibold text-sm transition',
                    billing === opt.value
                      ? 'bg-primary-600 text-white'
                      : 'text-primary-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700'
                  )}
                  onClick={() => setBilling(opt.value as 'monthly' | 'annual')}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cart/Plan Summary Drawer */}
      <div className="fixed bottom-4 right-4 z-40 w-full max-w-xs">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="font-bold text-lg mb-2">Your Plan</h3>
          {cart.length === 0 ? (
            <div className="text-gray-500 text-sm">No items selected.</div>
          ) : (
            <ul className="mb-2">
              {cart.filter(i => i.type !== 'addon').map((item) => (
                <li key={item.name} className="flex items-center justify-between mb-1">
                  <span className="font-semibold">{item.name}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      {formatPrice(item.price, billing, item.period)}
                    </span>
                    <button onClick={() => removeFromCart(item.name, item.type)} className="ml-1 text-gray-400 hover:text-red-500">
                      <X size={16} />
                    </button>
                  </span>
                </li>
              ))}
              {cart.filter(i => i.type === 'addon').map((item) => (
                <li key={item.name} className="flex items-center justify-between mb-1">
                  <span className="text-sm">{item.name}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-gray-700 dark:text-gray-200">
                      {formatPrice(item.price, billing, item.period)}
                    </span>
                    <button onClick={() => removeFromCart(item.name, item.type)} className="ml-1 text-gray-400 hover:text-red-500">
                      <X size={14} />
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-center justify-between font-bold mt-2">
            <span>Total</span>
            <span>KES {Math.round(total).toLocaleString()}{billing === 'annual' ? ' /mo (annual)' : ' /mo'}</span>
          </div>
          <form
            name="nexora-subscribe"
            method="POST"
            data-netlify="true"
            hidden={cart.length === 0}
            onSubmit={handleSubscribe}
            className="mt-3"
          >
            <input type="hidden" name="form-name" value="nexora-subscribe" />
            <input type="hidden" name="plan" value={cart.map(i => i.name).join(', ')} />
            <input type="hidden" name="total" value={total} />
            <button
              type="submit"
              className="w-full mt-2 py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
              disabled={cart.length === 0}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Pricing Content */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Services */}
          {tab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) =>
                service.plans.map((plan, idx) => (
                  <div
                    key={plan.name}
                    className={clsx(
                      'relative bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-300 hover:scale-105 hover:bg-primary-50/60 dark:hover:bg-gray-700/80',
                      plan.badge === 'Best Value' && 'ring-2 ring-green-500',
                      plan.badge === 'Popular' && 'ring-2 ring-primary-500'
                    )}
                  >
                    {/* Ribbon */}
                    {plan.badge && (
                      <div className="absolute top-0 right-0 z-10 overflow-hidden w-24 h-24 pointer-events-none">
                        <div
                          className={clsx(
                            "absolute right-[-20px] top-4 w-32 text-center text-xs font-bold text-white py-1 rotate-45 shadow-lg",
                            ribbonClass(plan.badge)
                          )}
                          style={{
                            right: '-20px',
                            top: '16px',
                            width: '110px',
                          }}
                        >
                          {ribbonText(plan.badge)}
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between p-6 pb-0">
                      <div className="flex items-center gap-2">
                        {plan.icon}
                        <span className="font-heading font-semibold text-lg text-primary-900 dark:text-white">{plan.name}</span>
                      </div>
                    </div>
                    <div className="px-6 pt-2">
                      <div className="text-3xl font-bold text-primary-900 dark:text-white mb-2">
                        {formatPrice(plan.price, billing, plan.period)}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                        {plan.period === 'one-time' ? 'One-time fee' : billing === 'annual' ? 'Billed yearly (10% off)' : 'Billed monthly'}
                      </div>
                    </div>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex items-center justify-between w-full px-6 py-3 text-left text-primary-700 dark:text-primary-300 font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition">
                            <span>See Features</span>
                            <ChevronDown className={clsx("ml-2 transition-transform", open && "rotate-180")} size={18} />
                          </Disclosure.Button>
                          <div
                            className={clsx(
                              "overflow-hidden transition-all duration-300",
                              open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            )}
                          >
                            <Disclosure.Panel static>
                              <ul className="space-y-2 px-0 pb-4">
                                {plan.features.map((feature, i) => (
                                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                    <Check className="text-green-500 mr-2" size={18} /> {feature}
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    <div className="p-6 pt-2 mt-auto flex flex-col gap-2">
                      <button
                        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition"
                        onClick={() => addToCart(plan, 'service')}
                      >
                        Add to Plan
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Bundles */}
          {tab === 'bundles' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bundles.map((bundle) => (
                <div
                  key={bundle.name}
                  className={clsx(
                    'relative bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-300 hover:scale-105 hover:bg-primary-50/60 dark:hover:bg-gray-700/80',
                    bundle.badge === 'Best Value' && 'ring-2 ring-green-500',
                    bundle.badge === 'Popular' && 'ring-2 ring-primary-500'
                  )}
                >
                  {/* Ribbon */}
                  {bundle.badge && (
                    <div className="absolute top-0 right-0 z-10 overflow-hidden w-24 h-24 pointer-events-none">
                      <div
                        className={clsx(
                          "absolute right-[-20px] top-4 w-32 text-center text-xs font-bold text-white py-1 rotate-45 shadow-lg",
                          ribbonClass(bundle.badge)
                        )}
                        style={{
                          right: '-20px',
                          top: '16px',
                          width: '110px',
                        }}
                      >
                        {ribbonText(bundle.badge)}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between p-6 pb-0">
                    <div className="flex items-center gap-2">
                      {bundle.icon}
                      <span className="font-heading font-semibold text-lg text-primary-900 dark:text-white">{bundle.name}</span>
                    </div>
                  </div>
                  <div className="px-6 pt-2">
                    <div className="text-3xl font-bold text-primary-900 dark:text-white mb-2">
                      {formatPrice(bundle.price, billing, 'month')}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {billing === 'annual' ? 'Billed yearly (10% off)' : 'Billed monthly'}
                    </div>
                    <div className="text-accent-700 dark:text-accent-400 text-sm mb-2">{bundle.description}</div>
                  </div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-6 py-3 text-left text-primary-700 dark:text-primary-300 font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition">
                          <span>See Features</span>
                          <ChevronDown className={clsx("ml-2 transition-transform", open && "rotate-180")} size={18} />
                        </Disclosure.Button>
                        <div
                          className={clsx(
                            "overflow-hidden transition-all duration-300",
                            open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          <Disclosure.Panel static>
                            <ul className="space-y-2 px-0 pb-4">
                              {bundle.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                  <Check className="text-green-500 mr-2" size={18} /> {feature}
                                </li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </div>
                      </>
                    )}
                  </Disclosure>
                  <div className="p-6 pt-2 mt-auto flex flex-col gap-2">
                    <button
                      className="w-full py-2 px-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition"
                      onClick={() => addToCart(bundle, 'bundle')}
                    >
                      Add to Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Enterprise */}
          {tab === 'enterprise' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterprise.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-300 hover:scale-105 hover:bg-primary-50/60 dark:hover:bg-gray-700/80"
                >
                  <div className="flex items-center justify-between p-6 pb-0">
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-500" size={24} />
                      <span className="font-heading font-semibold text-lg text-primary-900 dark:text-white">{plan.name}</span>
                    </div>
                  </div>
                  <div className="px-6 pt-2">
                    <div className="flex items-center mb-2">
                      <span className="text-green-600 dark:text-green-400 font-semibold text-xs mr-2">Starting at</span>
                      <div className="text-3xl font-bold text-primary-900 dark:text-white">
                        {formatPrice(plan.price, billing, 'month')}
                      </div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">{plan.description}</div>
                  </div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-6 py-3 text-left text-primary-700 dark:text-primary-300 font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition">
                          <span>See Features</span>
                          <ChevronDown className={clsx("ml-2 transition-transform", open && "rotate-180")} size={18} />
                        </Disclosure.Button>
                        <div
                          className={clsx(
                            "overflow-hidden transition-all duration-300",
                            open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          <Disclosure.Panel static>
                            <ul className="space-y-2 px-0 pb-4">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                  <Check className="text-green-500 mr-2" size={18} /> {feature}
                                </li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </div>
                      </>
                    )}
                  </Disclosure>
                  <div className="p-6 pt-2 mt-auto flex flex-col gap-2">
                    <button
                      className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition"
                      onClick={() => setShowCalendly({ open: true, plan: plan.name })}
                    >
                      Book a Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add-ons */}
          {tab === 'addons' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-300 hover:scale-105 hover:bg-primary-50/60 dark:hover:bg-gray-700/80"
                >
                  <div className="flex items-center gap-2 p-6 pb-0">
                    {addon.icon}
                    <span className="font-heading font-semibold text-lg text-primary-900 dark:text-white">{addon.name}</span>
                  </div>
                  <div className="px-6 pt-2">
                    <div className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                      {formatPrice(addon.price, billing, addon.period)}
                    </div>
                  </div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center justify-between w-full px-6 py-3 text-left text-primary-700 dark:text-primary-300 font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition">
                          <span>See Features</span>
                          <ChevronDown className={clsx("ml-2 transition-transform", open && "rotate-180")} size={18} />
                        </Disclosure.Button>
                        <div
                          className={clsx(
                            "overflow-hidden transition-all duration-300",
                            open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          <Disclosure.Panel static>
                            <ul className="space-y-2 px-0 pb-4">
                              {addon.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                  <Check className="text-green-500 mr-2" size={18} /> {feature}
                                </li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </div>
                      </>
                    )}
                  </Disclosure>
                  <div className="p-6 pt-2 mt-auto flex flex-col gap-2">
                    <button
                      className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition"
                      onClick={() => addToCart(addon, 'addon')}
                    >
                      Add to Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal
        open={showCalendly.open}
        plan={showCalendly.plan}
        onClose={() => setShowCalendly({ open: false })}
      />

      {/* CTA */}
      <CallToAction
        title="Not Sure Which Plan Is Right for You?"
        description="Book a free consultation with our team to discuss your needs and get personalized recommendations."
        primaryButtonText="Book a Free Consultation"
        primaryButtonLink="/contact"
        backgroundImage={false}
      />
    </div>
  );
};

export default Pricing;