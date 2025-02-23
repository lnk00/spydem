import { Button, Input } from '@heroui/react';
import { motion } from 'framer-motion';

type IProps = {
  errorMessage: string;
  description: string;
  label: string;
  name: string;
  buttonLabel: string;
  animationKey: string;
  value: string;
  onChange: (value: string) => void;
};

export default function EmailFormComponent({
  errorMessage,
  description,
  label,
  name,
  buttonLabel,
  animationKey,
  value,
  onChange,
}: IProps) {
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
        radius="none"
        isRequired
        errorMessage={errorMessage}
        label={label}
        labelPlacement="inside"
        description={description}
        name={name}
        type="email"
        value={value}
        variant="faded"
        onChange={(e) => onChange(e.target.value)}
      />
      <Button fullWidth size="lg" type="submit" color="primary" radius="none">
        {buttonLabel}
      </Button>
    </motion.div>
  );
}
