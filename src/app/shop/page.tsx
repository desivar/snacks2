import { Product } from '@/lib/models/Product';
import { connectToDB } from '@/lib/db/connect';

export default async function Shop() {
  await connectToDB();
  const products = await Product.find().lean();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id} className="border p-4">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}