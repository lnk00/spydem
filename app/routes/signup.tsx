import {
  addToast,
  Button,
  Card,
  CardBody,
  Form,
  Image,
  Link,
} from '@heroui/react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleLogo from '~/assets/images/google-logo.svg';
import EmailFormComponent from '~/components/email-form.component';
import PasswordFormComponent from '~/components/password-form.component';
import DividerFormComponent from '~/components/divider-form.component';
import { authClient } from '~/lib/auth-client';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate({ from: '/signup' });

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      await authClient.signUp.email(
        {
          email,
          password,
          name: '',
        },
        {
          onRequest: (_ctx) => {
            setIsLoading(true);
          },
          onSuccess: (_ctx) => {
            setIsLoading(false);
            navigate({ to: '/' as never });
          },
          onError: (_ctx) => {
            addToast({
              title: 'Sign up error',
              description:
                'You account is not created, if your already have an account go to sign in page.',
              color: 'danger',
            });
            setPassword('');
            setConfirm('');
            setEmail('');
            setStep(1);
            setIsLoading(false);
          },
        },
      );
    }
  };

  return (
    <div className="container mx-auto h-screen flex flex-col gap-16 items-center justify-center">
      <p className="font-display text-7xl text-default-200">spydem</p>
      <Card radius="none" shadow="none" className="p-4 overflow-visible">
        <CardBody className="flex flex-col gap-4 overflow-visible">
          <div className="flex items-center gap-4 h-12">
            <AnimatePresence>
              {step > 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    isIconOnly
                    variant="flat"
                    onPress={handleBack}
                    aria-label="Go back"
                  >
                    <ArrowLeftIcon size={20} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="flex flex-col gap-1 absolute"
              animate={{
                x: step > 1 ? 54 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-xl font-semibold">Sign Up</h1>
              <p className="text-small text-default-500">
                to create your spydem account
              </p>
            </motion.div>
          </div>
          <Form className="w-96 relative" onSubmit={onSubmit}>
            <AnimatePresence mode="popLayout" initial={false}>
              {step === 1 && (
                <EmailFormComponent
                  animationKey="step1"
                  errorMessage="Please enter a valide email"
                  description="Enter your email"
                  label="Email"
                  name="email"
                  buttonLabel="Continue with email"
                  value={email}
                  onChange={(value) => setEmail(value)}
                />
              )}
              {step === 2 && (
                <PasswordFormComponent
                  animationKey="step2"
                  description="Enter a strong password"
                  label="Password"
                  name="password"
                  buttonLabel="Validate password"
                  value={password}
                  onChange={(value) => setPassword(value)}
                  validate={(value) => {
                    if (value.length < 8) {
                      return 'Password must be at least 8 characters long.';
                    } else if (value.length > 35) {
                      return 'Password must be less than 35 characters long.';
                    }
                    return null;
                  }}
                />
              )}
              {step === 3 && (
                <PasswordFormComponent
                  animationKey="step3"
                  description="Confirm your password"
                  label="Confirm password"
                  name="confirm-password"
                  buttonLabel="Create account"
                  value={confirm}
                  onChange={(value) => setConfirm(value)}
                  isLoading={isLoading}
                  validate={(value) => {
                    if (value !== password) {
                      return 'Confirm password must match your password.';
                    }
                    return null;
                  }}
                />
              )}
            </AnimatePresence>
          </Form>
          <DividerFormComponent />
          <div className="flex flex-col gap-2">
            <Button
              startContent={<Image src={GoogleLogo} width={20} />}
              variant="flat"
              size="lg"
              radius="none"
            >
              Continue with Google
            </Button>
          </div>
          <p className="text-center text-small">
            Already have an account ?
            <Link
              onPress={() => navigate({ to: '/signin' })}
              size="sm"
              className="ml-1"
            >
              Sign In
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
