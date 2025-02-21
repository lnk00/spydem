import {
  Button,
  Card,
  CardBody,
  Divider,
  Form,
  Image,
  Link,
} from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleLogo from '~/assets/images/google-logo.svg';
import EmailFormComponent from '~/components/email-form.component';
import PasswordFormComponent from '~/components/password-form.component';
import DividerFormComponent from '~/components/divider-form.component';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = useState(1);

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Handle final form submission
      console.log('Form submitted', e);
    }
  };
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
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
              <h1 className="text-xl font-semibold">Sign Up</h1>
              <p className="text-small text-default-500">
                to create your spydem account
              </p>
            </motion.div>
          </div>
          <Form className="w-96" onSubmit={onSubmit}>
            <AnimatePresence mode="wait" initial={false}>
              {step === 1 ? (
                <EmailFormComponent
                  animationKey="step1"
                  errorMessage="Please enter a valide email"
                  description="Enter your email"
                  label="Email"
                  name="email"
                  buttonLabel="Continue with email"
                />
              ) : step === 2 ? (
                <PasswordFormComponent
                  animationKey="step2"
                  errorMessage="Please enter a strong password"
                  description="Enter a strong password"
                  label="Password"
                  name="password"
                  buttonLabel="Validate password"
                />
              ) : (
                <PasswordFormComponent
                  animationKey="step3"
                  errorMessage="Please enter the same password"
                  description="Confirm your password"
                  label="Confirm password"
                  name="confirm-password"
                  buttonLabel="Create account"
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
            Already have an account ?
            <Link href="#" size="sm" className="ml-1">
              Sign In
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
