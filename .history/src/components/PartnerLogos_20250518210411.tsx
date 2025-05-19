const PartnerLogos = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      invert: true
    },
    {
      name: "KPMG",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/KPMG_logo.svg",
      invert: true
    },
    {
      name: "Safaricom",
      logo: "/images/safaricom-logo.png",
      invert: true
    },
    {
      name: "Equity Bank",
      logo: "/public/images/equity-bank-logo.png",
      invert: true
    },
    {
      name: "Kenya Revenue Authority",
      logo: "/public/images/kra-logo.png",
      invert: true
    },
    {
      name: "ISO",
      logo: "./../public/images/iso-logo.png",
      invert: true
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
      {partners.map((partner) => (
        <div key={partner.name} className="h-12 flex items-center justify-center">
          <img 
            src={partner.logo} 
            alt={`${partner.name} Logo`} 
            className={`h-full object-contain max-w-full ${partner.invert ? 'dark:filter dark:brightness-0 dark:invert' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;