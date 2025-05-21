"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row text-[#b9b9b9]">
      {/* Left side form */}
      <div className="flex-1 px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 max-w-md md:max-w-none flex flex-col justify-center bg-background transition-colors">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-[#00d563] font-semibold text-lg sm:text-xl md:text-2xl leading-tight">
            Sign in to JobHive
          </h1>
        </div>
        <p className="text-[#9e9e9e] mb-8 text-sm sm:text-base leading-relaxed">
          Welcome back! Please sign in to continue.
        </p>
        <form className="space-y-6" autoComplete="off" noValidate>
          {/* Email */}
          <label htmlFor="email" className="block text-sm font-normal mb-1">
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#00d563] text-lg">
              <i className="fas fa-envelope" />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-3 rounded border border-blue-500 bg-blue-100 text-[#222] placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <label htmlFor="password" className="block text-sm font-normal mb-1">
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#00d563] text-lg">
              <i className="fas fa-shield-alt" />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full pl-10 pr-3 py-3 rounded border border-blue-500 bg-blue-100 text-[#222] placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-[#008c3f] hover:bg-[#00d563] rounded text-white font-semibold text-base transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="my-6 text-center text-[#b9b9b9] text-base">Or sign in with</div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded bg-[#b92d2b] hover:bg-[#a82321] text-white font-semibold text-base transition-colors">
            <i className="fab fa-google"></i> Google
          </a>
          <a href="https://www.facebook.com/login.php" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded bg-[#1877f2] hover:bg-[#145db2] text-white font-semibold text-base transition-colors">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded bg-[#0077b5] hover:bg-[#005983] text-white font-semibold text-base transition-colors">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
        <div className="text-center mt-2 text-sm">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-[#00d563] font-semibold hover:underline">Sign up now</Link>
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden md:flex flex-1 relative items-center justify-center overflow-hidden min-h-screen">
        <img
          src="/pexels-bri-schneiter-28802-346529.jpg"
          alt="JobHive login visual"
          className="w-full h-full object-cover object-center min-h-screen min-w-full max-w-none"
        />
      </div>
    </div>
  );
}
