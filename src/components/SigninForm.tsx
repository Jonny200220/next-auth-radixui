"use client";

import React from "react";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email:</label>
        <TextField.Root
          placeholder="email@example.com"
          autoFocus
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
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

        <label htmlFor="password">Password:</label>
        <TextField.Root
          placeholder="*******"
          id="password"
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

        <Button type="submit">Sign In</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
