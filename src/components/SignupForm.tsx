"use client";

import React from "react";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
// import { log } from "console";
// import { POST } from "@/app/api/auth/[...nextauth]/route";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    // console.log(data);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        // Manejar éxito (redirección, mensaje, etc.)
      } else {
        console.error("Error:", response.statusText);
        // Manejar error
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name:</label>
        <TextField.Root
          placeholder="John Doe"
          autoFocus
          id="name"
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
        >
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        {errors.name && (
          <Text size="2" color="red" role="alert">
            {errors.name.message}
          </Text>
        )}

        <label htmlFor="email">Email:</label>
        <TextField.Root
          placeholder="email@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        >
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        {errors.email && (
          <Text size="2" color="red" role="alert">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="email">Password:</label>
        <TextField.Root
          placeholder="*******"
          id="password-signup"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
        >
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        {errors.password && (
          <Text size="2" color="red" role="alert">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" className="mt-4!">
          Sign Up
        </Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
