import React from "react";
import { Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <Button className="variant-sold">
        <BookmarkIcon width={15} height={15} />
        Login
        </Button>
    </div>
  );
}

export default LoginPage;
