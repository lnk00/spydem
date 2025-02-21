import {
  Button,
  Card,
  CardBody,
  Divider,
  Form,
  Input,
  Link,
} from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';
import { BadgeCentIcon, BoxesIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = useState(1);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPassVisible(!isPassVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle final form submission
      console.log('Form submitted');
    }
  };
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <Card className="p-4">
        <CardBody className="flex flex-col gap-4 overflow-hidden">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Sign Up</h1>
            <p className="text-small text-default-500">
              to create your spydem account
            </p>
            <p></p>
          </div>
          <Form className="w-96" onSubmit={onSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 w-full"
                >
                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="inside"
                    description="Enter your email"
                    name="email"
                    type="email"
                  />
                  <Button fullWidth size="lg" type="submit" color="primary">
                    Continue with email
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 w-full"
                >
                  <Input
                    isRequired
                    errorMessage="Please enter a strong password"
                    label="Password"
                    labelPlacement="inside"
                    description="Enter a strong password"
                    name="password"
                    type={isPassVisible ? 'text' : 'password'}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {isPassVisible ? (
                          <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                  <Button fullWidth size="lg" type="submit" color="primary">
                    Sign up
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Form>
          <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <Button startContent={<BoxesIcon size={24} />} variant="bordered">
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
  // return (
  //   <div className="container mx-auto h-screen flex items-center justify-center">
  //     <Card className="p-4">
  //       <CardBody>
  //         <Form className="w-96" onSubmit={onSubmit}>
  //           <Input
  //             isRequired
  //             errorMessage="Please enter a valid email"
  //             label="Email"
  //             labelPlacement="inside"
  //             description="Enter your email"
  //             name="email"
  //             type="email"
  //           />
  //           <Input
  //             isRequired
  //             errorMessage="Please enter a strong password"
  //             label="Password"
  //             labelPlacement="inside"
  //             description="Enter a strong password"
  //             name="password"
  //             type={isPassVisible ? 'text' : 'password'}
  //             endContent={
  //               <button
  //                 aria-label="toggle password visibility"
  //                 className="focus:outline-none"
  //                 type="button"
  //                 onClick={togglePasswordVisibility}
  //               >
  //                 {isPassVisible ? (
  //                   <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
  //                 ) : (
  //                   <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
  //                 )}
  //               </button>
  //             }
  //           />
  //           <Input
  //             isRequired
  //             errorMessage="Please enter the same password"
  //             label="Confirm password"
  //             labelPlacement="inside"
  //             description="Confirm your password"
  //             name="confirm-password"
  //             type={isConfirmVisible ? 'text' : 'password'}
  //             endContent={
  //               <button
  //                 aria-label="toggle password visibility"
  //                 className="focus:outline-none"
  //                 type="button"
  //                 onClick={toggleConfirmVisibility}
  //               >
  //                 {isConfirmVisible ? (
  //                   <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
  //                 ) : (
  //                   <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
  //                 )}
  //               </button>
  //             }
  //           />
  //           <Button fullWidth size="lg" type="submit" color="primary">
  //             Sign-up
  //           </Button>
  //         </Form>
  //       </CardBody>
  //     </Card>
  //   </div>
  // );
}
