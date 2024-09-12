"use client";

import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutProfile() {
  const session = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="h-full">
      <div className="border-b border-b-[1px_solid_darkgrey] py-6 text-yellow-500">
        <div>Order information</div>
      </div>
      <div className="m-auto max-w-2xl py-4">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <div className="mt-4">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              訂購人姓名：
            </label>
            <input
              type="text"
              name="name"
              className="mb-2 w-full rounded border px-3 py-2"
              placeholder="ex: 王小明"
              required
              defaultValue={session?.data?.user.name}
              // onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              訂購人信箱：
            </label>
            <input
              type="text"
              name="email"
              className="mb-2 w-full rounded border px-3 py-2"
              placeholder="ex: 王小明"
              required
              defaultValue={session?.data?.user.email}
              // onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="phone"
              className="mb-2 block font-bold text-gray-700"
            >
              訂購人電話：
            </label>
            <input
              type="tel"
              name="phone"
              className="mb-2 w-full rounded border px-3 py-2"
              placeholder="0912-345-678"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2 text-right">
            <Button
              type="submit"
              radius="full"
              className="bg-gradient-to-tr from-red-600 to-yellow-500 text-white shadow-lg"
            >
              送出訂單
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProfile;
