import React from "react";
import { Text, Container, Heading, Card, Flex, Link } from "@radix-ui/themes";
import SigninForm from "@/components/SigninForm";
import NavLink from "next/link";

function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7!">
            <Heading>Sign In</Heading>
            <SigninForm />

            <Flex justify="between" my="4">
              <Text>Don't have an account? </Text>
              <Link asChild>
                <NavLink passHref href="/auth/register">
                  Sign Up
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
