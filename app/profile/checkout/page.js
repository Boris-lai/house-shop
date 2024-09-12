import CheckoutItems from "@/app/_components/CheckoutItems";
import CheckoutProfile from "@/app/_components/CheckoutProfile";
import checkout from "@/app/actions/checkout";

function page() {
  return (
    <form action={checkout}>
      <div className="grid max-w-full grid-cols-2 grid-cols-[60fr_40fr] gap-x-4 p-6">
        <CheckoutItems />
        <CheckoutProfile />
      </div>
    </form>
  );
}

export default page;
