import { Button, Input } from '@heroui/react';
import { motion } from 'framer-motion';

type IProps = {
  errorMessage: string;
  description: string;
  label: string;
  name: string;
  buttonLabel: string;
  animationKey: string;
};

export default function EmailFormComponent({
  errorMessage,
  description,
  label,
  name,
  buttonLabel,
  animationKey,
}: IProps) {
  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
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
        type="email"
      />
      <Button fullWidth size="lg" type="submit" color="primary">
        {buttonLabel}
      </Button>
    </motion.div>
  );
}
