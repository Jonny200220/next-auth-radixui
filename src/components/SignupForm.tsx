"use client";

import React from "react";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon ,PersonIcon } from "@radix-ui/react-icons";
import { log } from "console";
import { POST } from "@/app/api/auth/[...nextauth]/route";

function SignupForm() {

  const onSubmit = (data: any) => {
    console.log(data);

  //  try {
  //   const res = await fetch('api/auth/register')
  //  } catch (error) {
    
  //  }
  }
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="name">Name:</label>
      <TextField.Root placeholder="John Doe" autoFocus>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Email:</label>
      <TextField.Root placeholder="email@example.com">
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Password:</label>
      <TextField.Root placeholder="*******">
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <Button type="submit" className="mt-4!">Sign Up</Button>
    </Flex>
  );
}

export default SignupForm;
