const partners = [
	{
		name: 'Microsoft',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
		invert: true,
	},
	{
		name: 'KPMG',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/KPMG_logo.svg',
		invert: true,
	},
	{
		name: 'Safaricom',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Safaricom_logo.svg',
		invert: true,
	},
	{
		name: 'Equity Bank',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Equity_Bank_Group_Logo.png',
		invert: true,
	},
	{
		name: 'Kenya Revenue Authority',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kenya_Revenue_Authority_logo.png',
		invert: true,
	},
	{
		name: 'ISO',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/ISO_Logo.svg',
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