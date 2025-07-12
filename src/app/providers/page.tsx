import ProviderCard from '@/components/ProviderCard';

export default function Providers() {
  const providers = [
    { name: 'Healthy Harvest', specialty: 'Organic snacks' },
    { name: 'Nutty Delights', specialty: 'Premium nuts' },
    { name: 'Fruitful', specialty: 'Dried fruits' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Trusted Providers</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {providers.map(provider => (
          <ProviderCard key={provider.name} {...provider} />
        ))}
      </div>
    </div>
  );
}