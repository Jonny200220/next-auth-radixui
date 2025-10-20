"use client";

import React from "react";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";

function SigninForm() {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="email">Email:</label>
      <TextField.Root placeholder="email@example.com">
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        {/* <TextField.Input
          id="email"
          type="email"
          placeholder="Enter your email"
          autoFocus
        /> */}
      </TextField.Root>

      <label htmlFor="email">Password:</label>
      <TextField.Root placeholder="*******">
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        {/* <TextField.Input
          id="password"
          type="password"
          placeholder="Enter your password"
          autoFocus
        /> */}
      </TextField.Root>

      <Button>Sign In</Button>
    </Flex>
  );
}

export default SigninForm;
