import connectDB from "@/config/database";
import User from "@/models/userModal";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
