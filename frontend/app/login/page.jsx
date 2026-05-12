"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import API from "@/lib/axios";

import Link from "next/link";

import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      router.push("/dashboard");

    } catch (error) {
      console.log(error);

      alert("Login failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <Card className="w-full max-w-md p-8 glass border-zinc-800">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold gradient-text">
            HireIt
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="space-y-2">

            <Label>Email</Label>

            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700 h-11"
            />

          </div>

          <div className="space-y-2">

            <Label>Password</Label>

            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700 h-11"
            />

          </div>

          <Button
            type="submit"
            className="w-full h-11 rounded-xl"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </Button>

        </form>

        <p className="text-center text-zinc-400 mt-6">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="text-white hover:underline"
          >
            Register
          </Link>

        </p>

      </Card>

    </main>
  );
}