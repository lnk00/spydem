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
import Logo from '~/assets/images/logo.svg';
import EmailFormComponent from '~/components/email-form.component';
import PasswordFormComponent from '~/components/password-form.component';
import DividerFormComponent from '~/components/divider-form.component';
import { authClient } from '~/lib/auth-client';

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    } else {
      await authClient.signIn.email(
        {
          email,
          password,
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
              title: 'Sign in error',
              description: `We could not sign you in, if you don't already have an account go to sign up page.`,
              color: 'danger',
            });
            setPassword('');
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
      <div className="flex items-center justify-center gap-2">
        <Image src={Logo} width={56} />
        <h1 className="font-semibold text-4xl">Spydem</h1>
      </div>
      <Card className="p-4">
        <CardBody className="flex flex-col gap-4 overflow-hidden">
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
                    variant="faded"
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
              <h1 className="text-xl font-semibold">Sign In</h1>
              <p className="text-small text-default-500">
                to sign into your spydem account
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
                  description="Enter your password"
                  label="Password"
                  name="password"
                  buttonLabel="Sign in"
                  value={password}
                  onChange={(value) => setPassword(value)}
                  isLoading={isLoading}
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
            >
              Continue with Google
            </Button>
          </div>
          <p className="text-center text-small">
            Don't have an account ?
            <Link
              onPress={() => navigate({ to: '/signup' })}
              size="sm"
              className="ml-1"
            >
              Sign Up
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
