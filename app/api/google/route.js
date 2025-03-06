import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  const secret_key = process.env.RECAPTCHA_SECRET_KEY; // Use a secure environment variable

  if (!secret_key) {
    return NextResponse.json({
      error: "reCAPTCHA secret key is missing!",
      success: false,
    }, { status: 500 });
  }

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;

    const res = await axios.post(url);
    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!",
        success: true,
      });
    }

    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status:400 });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error.message);
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  }
};
