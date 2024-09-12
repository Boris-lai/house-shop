import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-12 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">謝謝您的購買 😃</h1>
      <Link
        href="/products"
        className="inline-block text-xl text-accent-500 underline"
      >
        回商品首頁 &rarr;
      </Link>
    </div>
  );
}
