'use client';
import { Button } from '@mantine/core';

type ButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
};

function ButtonComponent({ onClick, isDisabled, text }: ButtonProps) {
  return (
    <Button
      color="gray"
      disabled={isDisabled}
      onClick={onClick}
      variant="default"
    >
      {text}
    </Button>
  );
}

export default ButtonComponent;
