import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Button from "@/components/ui/Button";
import AuthLayout from "@/components/layouts/AuthLayout";

type PropTypes = {
  setToaster: Dispatch<SetStateAction<{}>>;
};

const LoginView = (props: PropTypes) => {
  const { setToaster } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  // const callbackUrl: string | string[] = query.callbackUrl || '/'
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        // email: form.email.value,
        user_id: form.user_id.value,
        password: form.password.value,
        // callbackUrl: Array.isArray((callbackUrl) ? callbackUrl[0] : callbackUrl)
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setToaster({
          variant: "error",
          message: "User ID or Password Is Incorrect",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setToaster({
        variant: "error",
        message: "User ID or Password Is Empty",
      });
    }
  };

  return (
    <AuthLayout
      title="Login"
      link="/auth/register"
      linkText="Don't have an account? Sign up"
    >
      <>
        <form onSubmit={handleSubmit}>
          <Input
            label="User ID"
            name="user_id"
            type="text"
            placeholder="User ID"
          />
          {/* <Input label="Email" name="email" type="email" placeholder="Email" /> */}
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          {/* button login */}
          <Button
            type="submit"
            className={
              "w-full cursor-pointer border-none bg-black p-3 text-white"
            }
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </>
    </AuthLayout>
  );
};

export default LoginView;
