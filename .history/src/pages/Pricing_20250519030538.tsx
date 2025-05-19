import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown, Check, Star, Users, PieChart, BarChart3, Shield, BrainCircuit, Layers, Zap, X, Gift } from 'lucide-react';
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
        tier: 'Basic',
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
        tier: 'Premium',
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
        tier: 'Basic',
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
        tier: 'Premium',
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
        tier: 'Basic',
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
        tier: 'Premium',
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
        tier: 'Basic',
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
        tier: 'Premium',
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
    price: 39000,
    period: 'month',
    description: 'Any 2 base-tier services',
    features: [
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
    price: 77000,
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
    price: 92000,
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
    price: 129000,
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

const threadColors = [
  'border-blue-400 bg-blue-50/40 dark:bg-blue-900/30',
  'border-green-400 bg-green-50/40 dark:bg-green-900/30',
  'border-purple-400 bg-purple-50/40 dark:bg-purple-900/30',
  'border-yellow-400 bg-yellow-50/40 dark:bg-yellow-900/30',
];

const PREMIUM_SERVICES = [
  { name: 'Finance + Forecasting', key: 'finance' },
  { name: 'Ops + Optimization', key: 'ops' },
  { name: 'ESG+ Reporting', key: 'esg' },
  { name: 'Talent Insights Pro', key: 'hr' },
];

const BASE_SERVICES = [
  'Standard Finance',
  'Process Review',
  'ESG Starter',
  'Smart Hire',
];

const BUNDLE_MAP = [
  {
    name: 'Growth Starter',
    price: 39000,
    match: (cart) => {
      // Any 2 base-tier services
      const baseServices = cart.filter(i => i.type === 'service' && BASE_SERVICES.includes(i.name));
      return baseServices.length === 2;
    },
    bundleObj: bundles.find(b => b.name === 'Growth Starter'),
    message: 'Bundle applied: Growth Starter – 2 services for KES 39,000',
  },
  {
    name: 'SmartOps Suite',
    price: 77000,
    match: (cart) => {
      // Any 3 premium services
      const premium = cart.filter(i => i.type === 'service' && PREMIUM_SERVICES.map(s => s.name).includes(i.name));
      return premium.length === 3;
    },
    bundleObj: bundles.find(b => b.name === 'SmartOps Suite'),
    message: 'Bundle applied: SmartOps Suite – 3 premium services for KES 77,000',
  },
  {
    name: 'Impact Pro',
    price: 92000,
    match: (cart) => {
      // Finance+, ESG+, HR Pro
      const names = cart.filter(i => i.type === 'service').map(i => i.name);
      return (
        names.includes('Finance + Forecasting') &&
        names.includes('ESG+ Reporting') &&
        names.includes('Talent Insights Pro')
      );
    },
    bundleObj: bundles.find(b => b.name === 'Impact Pro'),
    message: 'Bundle applied: Impact Pro – Finance+, ESG+, HR Pro for KES 92,000',
  },
  {
    name: 'Compliance360',
    price: 129000,
    match: (cart) => {
      // All 4 premium services
      const names = cart.filter(i => i.type === 'service').map(i => i.name);
      return PREMIUM_SERVICES.every(s => names.includes(s.name));
    },
    bundleObj: bundles.find(b => b.name === 'Compliance360'),
    message: 'Bundle applied: Compliance360 – All premium services for KES 129,000',
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [tab, setTab] = useState<'services' | 'bundles' | 'enterprise' | 'addons'>('services');
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCalendly, setShowCalendly] = useState<{ open: boolean; plan?: string }>({ open: false });
  const [cartWarning, setCartWarning] = useState<string | null>(null);
  const [bundleApplied, setBundleApplied] = useState<{ name: string; message: string; icon: JSX.Element } | null>(null);
  const [bundleToast, setBundleToast] = useState<string | null>(null);

  // Helper: get base plan (service or bundle)
  const getBasePlan = () => cart.find(i => i.type === 'service' || i.type === 'bundle');
  const getAddOns = () => cart.filter(i => i.type === 'addon');

  // --- Smart Bundle Auto-Matching Logic ---
  useEffect(() => {
    // Only auto-bundle if user is not already on a bundle
    const addOns = getAddOns();
    let newCart = [...cart.filter(i => i.type === 'service')];
    let applied = null;
    for (const bundle of BUNDLE_MAP) {
      if (bundle.match(newCart)) {
        applied = bundle;
        newCart = [{ ...bundle.bundleObj, type: 'bundle' }];
        break;
      }
    }
    if (applied) {
      setCart([...newCart, ...addOns]);
      setBundleApplied({
        name: applied.name,
        message: applied.message,
        icon: <Gift className="inline-block text-accent-600 mr-1" size={18} />,
      });
      setBundleToast(applied.message);
      setTimeout(() => setBundleToast(null), 2500);
    } else {
      // If bundle no longer applies, revert to original services (if not already)
      if (cart.some(i => i.type === 'bundle')) {
        // Remove bundle, restore services if possible (not tracked here, so just clear bundle)
        setCart([...cart.filter(i => i.type === 'addon')]);
        setBundleApplied(null);
      } else {
        setBundleApplied(null);
      }
    }
    // eslint-disable-next-line
  }, [cart.filter(i => i.type === 'service').map(i => i.name).join(',')]);

  // --- Cart logic: only one base plan (service or bundle), can't mix ---
  const addToCart = (item: any, type: 'service' | 'bundle' | 'addon') => {
    setShowCart(true);
    setCartWarning(null);

    // Prevent adding individual services if bundle is applied
    if (cart.some(i => i.type === 'bundle') && type === 'service') {
      setCartWarning('You cannot add individual services when a bundle is active.');
      return;
    }
    // Prevent adding a bundle if services are present
    if (type === 'bundle' && cart.some(i => i.type === 'service')) {
      setCartWarning('You cannot add a bundle when services are selected. Remove services first.');
      return;
    }
    // Only one service per category
    if (type === 'service') {
      const category = services.find((cat) =>
        cat.plans.some((plan) => plan.name === item.name)
      )?.category;
      const filtered = cart.filter(
        (i) =>
          i.type !== 'service' ||
          services.find((cat) =>
            cat.plans.some((plan) => plan.name === i.name)
          )?.category !== category
      );
      setCart([...filtered, { ...item, type }]);
    } else if (type === 'bundle') {
      setCart([...cart.filter((i) => i.type === 'addon'), { ...item, type }]);
    } else {
      // Add-on: allow multiple, but no duplicates, soft cap at 3
      if (getAddOns().length >= 3) {
        setCartWarning('You can add up to 3 add-ons. Remove one to add another.');
        return;
      }
      setCart((prev) =>
        prev.some((i) => i.name === item.name && i.type === 'addon')
          ? prev
          : [...prev, { ...item, type }]
      );
    }
  };

  const removeFromCart = (name: string, type: string) => {
    setCart((prev) => prev.filter((i) => !(i.name === name && i.type === type)));
    setCartWarning(null);
  };

  const clearCart = () => {
    setCart([]);
    setCartWarning(null);
  };

  // --- Calculate total: base plan (service(s) or bundle) + all add-ons ---
  const total = (() => {
    let sum = 0;
    const base = cart.find(i => i.type === 'bundle') || getBasePlan();
    if (base) {
      if (billing === 'annual' && base.period === 'month') {
        sum += Math.round(base.price * 12 * 0.9) / 12;
      } else {
        sum += base.price;
      }
    }
    getAddOns().forEach(item => {
      if (billing === 'annual' && item.period === 'month') {
        sum += Math.round(item.price * 12 * 0.9) / 12;
      } else {
        sum += item.price;
      }
    });
    return sum;
  })();

  // --- Subscribe button logic ---
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!getBasePlan() && !cart.some(i => i.type === 'bundle')) {
      setCartWarning('Please choose a base plan.');
      return;
    }
    alert('Submitted! (Demo only)');
  };

  // --- Cart Table Layout ---
  const CartTable = () => (
    <div className="w-full">
      {bundleApplied && (
        <div className="flex items-center mb-2 text-accent-700 bg-accent-50 dark:bg-accent-900/20 px-3 py-2 rounded transition-all">
          {bundleApplied.icon}
          <span className="font-semibold text-sm">{bundleApplied.message}</span>
        </div>
      )}
      {bundleToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-accent-600 text-white px-4 py-2 rounded shadow-lg transition-all animate-fade-in">
          {bundleToast}
        </div>
      )}
      <table className="table-auto w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded text-sm mb-2">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-2 py-2 border-b text-left">Item Name</th>
            <th className="px-2 py-2 border-b text-left">Type</th>
            <th className="px-2 py-2 border-b text-right">Price</th>
            <th className="px-2 py-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {cart.filter(i => i.type === 'bundle' || i.type === 'service').map(item => (
            <tr key={item.name} className="border-b last:border-b-0">
              <td className="px-2 py-2">{item.name}</td>
              <td className="px-2 py-2">{item.type === 'bundle' ? 'Bundle' : 'Service'}</td>
              <td className="px-2 py-2 text-right font-mono text-xs">
                {item.price.toLocaleString()}
                <span className="ml-1 text-gray-500 dark:text-gray-400 font-normal">
                  {item.period === 'one-time' ? 'one-time' : '/month'}
                </span>
              </td>
              <td className="px-2 py-2 text-right">
                <button
                  onClick={() => removeFromCart(item.name, item.type)}
                  className="text-gray-400 hover:text-red-500"
                  aria-label="Remove"
                  disabled={item.type === 'bundle'}
                >
                  <X size={14} />
                </button>
              </td>
            </tr>
          ))}
          {getAddOns().map(item => (
            <tr key={item.name} className="border-b last:border-b-0">
              <td className="px-2 py-2">{item.name}</td>
              <td className="px-2 py-2">Add-on</td>
              <td className="px-2 py-2 text-right font-mono text-xs">
                {item.price.toLocaleString()}
                <span className="ml-1 text-gray-500 dark:text-gray-400 font-normal">
                  {item.period === 'one-time' ? 'one-time' : '/month'}
                </span>
              </td>
              <td className="px-2 py-2 text-right">
                <button
                  onClick={() => removeFromCart(item.name, item.type)}
                  className="text-gray-400 hover:text-red-500"
                  aria-label="Remove"
                >
                  <X size={14} />
                </button>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
            <td className="px-2 py-2" colSpan={2}>Total</td>
            <td className="px-2 py-2 text-right font-mono text-xs" colSpan={2}>
              {total.toLocaleString()}
              <span className="ml-1 text-gray-500 dark:text-gray-400 font-normal">
                /month
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="w-full mb-2 py-2 px-4 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-lg transition"
        onClick={clearCart}
      >
        Clear Cart
      </button>
      <form
        name="nexora-subscribe"
        method="POST"
        data-netlify="true"
        hidden={cart.length === 0}
        onSubmit={handleSubscribe}
        className="mt-1"
      >
        <input type="hidden" name="form-name" value="nexora-subscribe" />
        <input type="hidden" name="basePlan" value={getBasePlan() ? JSON.stringify(getBasePlan()) : ''} />
        <input type="hidden" name="addons" value={JSON.stringify(getAddOns())} />
        <input type="hidden" name="total" value={total} />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
          disabled={!getBasePlan() && !cart.some(i => i.type === 'bundle')}
        >
          Subscribe
        </button>
      </form>
      {cartWarning && (
        <div className="mt-2 text-xs text-red-600 bg-red-50 dark:bg-red-900/30 rounded px-2 py-1">{cartWarning}</div>
      )}
      {!getBasePlan() && !cart.some(i => i.type === 'bundle') && (
        <div className="mt-2 text-xs text-yellow-700 bg-yellow-50 dark:bg-yellow-900/30 rounded px-2 py-1">
          Please choose a base plan.
        </div>
      )}
    </div>
  );

  // --- UI ---
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

      {/* Pricing Content */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Services */}
          {tab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) =>
                service.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={clsx(
                      'relative bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-300 hover:scale-105 hover:bg-primary-50/60 dark:hover:bg-gray-700/80 mb-4'
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
                      <div className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
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
                    <button
                      className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition"
                      onClick={() => { addToCart(plan, 'service'); }}
                    >
                      Add to Plan
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

      {/* Cart/Plan Summary */}
      {showCart && (
        <div className="fixed bottom-4 left-4 md:sticky md:top-32 md:self-start md:w-96 z-40 w-[95vw] max-w-md md:max-w-xs">
          <div className="bg-white dark:bg-gray-900 border border-primary-200 dark:border-gray-700 rounded-xl shadow-xl p-4 relative animate-fade-in md:sticky md:top-32">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setShowCart(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="text-primary-600" size={18} />
              <h3 className="font-bold text-lg text-primary-800 dark:text-white">
                Your Plan <span className="ml-2 text-xs font-normal text-primary-600 dark:text-primary-300">({cart.length} item{cart.length !== 1 && 's'})</span>
              </h3>
            </div>
            <CartTable />
          </div>
        </div>
      )}

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