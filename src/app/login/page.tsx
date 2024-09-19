'use client';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Wrapper } from '@/components/common/Wrapper';
import { LoginSchema, LoginSchemaType } from '@/lib/validation/login';
import useAuthMutations from '@/services/mutations/auth';
import { useAuthStore } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Login() {
  //   const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
  } = methods;

  const { loginMutation } = useAuthMutations();
  const { setToken } = useAuthStore();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (values) => {
    try {
      setIsLoading(true);
      const response = await loginMutation.mutateAsync(values);
      toast.success(response.data.message);
      setToken(response.data.payload.token);
      setIsLoading(false);
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
    reset();
  };

  return (
    <Wrapper>
      <div className="w-full h-screen flex flex-col items-center justify-center space-y-2">
        <div className="bg-white max-w-md w-full rounded-xl shadow-lg">
          <FormProvider {...methods}>
            <form className="p-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center text-2xl font-semibold">Log In</h1>
              <Input
                {...register('email')}
                label="Email Address"
                rightIcon={<MdEmail />}
                error={errors.email?.message}
                placeholder="Email Address"
              />
              <Input
                {...register('password')}
                label="Password"
                placeholder="Password"
                error={errors.password?.message}
                rightIcon={<FaLock />}
                type="password"
              />

              <Button
                type="submit"
                className="w-full"
                rounded
                isLoading={isLoading}
              >
                Login
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;
