import Link from "next/link";

export default async function OrderConfirmationPage() {
  return (
    <>
      <h1 className="text-xl text-center">You order is confirmed</h1>
      <div className="text-center mt-5">
        <Link
          href='/'
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded inline-block">
          Back to Store
        </Link>
      </div>

    </>


  );
}