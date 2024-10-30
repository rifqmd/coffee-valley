import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import authServices from "@/services/auth";
import { useRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type PropTypes = {
  setToaster: Dispatch<SetStateAction<{}>>;
};

const RegisterView = (props: PropTypes) => {
  const { setToaster } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // setError('');
    const form = e.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      user_id: form.user_id.value,
      password: form.password.value,
    };

    try {
      const result = await authServices.registerAccount(data);

      if (result.status === 200) {
        form.reset();
        setIsLoading(false);
        setToaster({
          variant: "success",
          message: "Register success",
        });
        push("/auth/login");
      } else {
        setIsLoading(false);
        setToaster({
          variant: "error",
          message: "Register failed, please call support",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setToaster({
        variant: "error",
        message: "Register failed, email already exists",
      });
    }
  };

  return (
    <AuthLayout
      title="Register"
      link="/auth/login"
      linkText="Have an account? Sign in"
    >
      <>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          ></Input>
          <Input
            label="Fullname"
            name="fullname"
            type="text"
            placeholder="Fullname"
          ></Input>
          <Input
            label="User ID"
            name="user_id"
            type="text"
            placeholder="User ID"
          ></Input>
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          ></Input>

          {/* button sign-up */}
          <Button
            type="submit"
            className={
              "w-full cursor-pointer border-none bg-black p-3 text-white"
            }
          >
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>
      </>
    </AuthLayout>
  );
};

export default RegisterView;
