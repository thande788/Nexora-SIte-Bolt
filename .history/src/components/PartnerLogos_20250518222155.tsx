const partners = [
	{
		name: 'Microsoft',
		logo: '/images/microsoft.png',
		invert: true,
		className: 'scale-200', // enlarged further
	},
	{
		name: 'KPMG',
		logo: '/images/kpmg.png',
		invert: true,
		className: 'scale-200', // enlarged further
	},
	{
		name: 'Safaricom',
		logo: '/images/safaricom.png',
		invert: true,
		className: 'scale-200', // enlarged further
	},
	{
		name: 'Equity Bank',
		logo: '/images/equity.png',
		invert: true,
	},
	{
		name: 'Kenya Revenue Authority',
		logo: '/images/kra.png',
		invert: false, // do not invert
	},
	{
		name: 'ISO',
		logo: '/images/iso.png',
		invert: true,
	},
];

const PartnerLogos = () => {
	return (
		<div className="grid grid-cols-2 gap-8 items-center justify-items-center opacity-80 md:grid-cols-3 lg:grid-cols-6">
			{partners.map((partner) => (
				<div
					key={partner.name}
					className="flex h-12 items-center justify-center"
				>
					<img
						src={partner.logo}
						alt={`${partner.name} Logo`}
						className={`max-w-full h-full object-contain ${
							partner.className ? partner.className : ''
						} ${
							partner.invert
								? 'dark:filter dark:brightness-0 dark:invert'
								: ''
						}`}
					/>
				</div>
			))}
		</div>
	);
};

export default PartnerLogos;