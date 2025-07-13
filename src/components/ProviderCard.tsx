// src/components/ProviderCard.tsx
interface ProviderCardProps {
  name: string;
  specialty: string;
}

export default function ProviderCard({ name, specialty }: ProviderCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{specialty}</p>
    </div>
  );
}