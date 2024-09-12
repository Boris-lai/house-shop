import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">請登入您的帳戶 😊</h2>

      <SignInButton />
    </div>
  );
}
