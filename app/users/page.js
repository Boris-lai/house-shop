// app/page.js
"use client";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, increment } from "@/app/slices/userSlice";

export default function Home() {
  const { users, loading, value } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(loading, value, users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <main>
      <p>hello</p>
      <button onClick={() => dispatch(increment())}>Click on me</button>
      <p>{value}</p>
      <hr />
      <ul>
        {users?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </main>
  );
}
