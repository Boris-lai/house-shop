import ProductAddForm from "@/app/_components/ProductAddForm";

function page() {
  return (
    <section className="bg-yellow-50">
      <div className="m-auto max-w-2xl py-24">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <ProductAddForm />
        </div>
      </div>
    </section>
  );
}

export default page;
