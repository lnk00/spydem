import { Button, Input } from '@heroui/react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

type IProps = {
  errorMessage: string;
  description: string;
  label: string;
  name: string;
  buttonLabel: string;
  animationKey: string;
};

export default function PasswordFormComponent({
  errorMessage,
  description,
  label,
  name,
  buttonLabel,
  animationKey,
}: IProps) {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPassVisible(!isPassVisible);
  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-2 w-full"
    >
      <Input
        isRequired
        errorMessage={errorMessage}
        label={label}
        labelPlacement="inside"
        description={description}
        name={name}
        type={isPassVisible ? 'text' : 'password'}
        autoFocus={true}
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
        {buttonLabel}
      </Button>
    </motion.div>
  );
}
