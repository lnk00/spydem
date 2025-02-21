import { Button, Input, Spinner } from '@heroui/react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

type IProps = {
  description: string;
  label: string;
  name: string;
  buttonLabel: string;
  animationKey: string;
  value: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
  validate?: (value: string) => string | null;
};

export default function PasswordFormComponent({
  description,
  label,
  name,
  buttonLabel,
  animationKey,
  value,
  onChange,
  isLoading = false,
  validate,
}: IProps) {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPassVisible(!isPassVisible);
  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="flex flex-col gap-2 w-full"
    >
      <Input
        isRequired
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        validate={validate}
      />
      <Button
        fullWidth
        size="lg"
        type="submit"
        color="primary"
        isLoading={isLoading}
        spinner={<Spinner size="sm" variant="spinner" color="white" />}
      >
        {buttonLabel}
      </Button>
    </motion.div>
  );
}
