import React from "react";
import { Text, Container, Heading, Card, Flex, Link } from "@radix-ui/themes";
import SignupForm from "@/components/SignupForm";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7!">
            <Heading mb="4">Sign Up</Heading>
            <SignupForm />

            <Flex justify="between" my="4">
              <Text>Already have an account? </Text>
              <Link asChild>
                <NavLink passHref href="/auth/login">
                  Sign In
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
