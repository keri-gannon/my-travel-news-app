'use client';
import { Button } from '@mantine/core';

type ButtonProps = {
  isDisabled: boolean;
  text: string;
};

function ButtonComponent({ isDisabled, text }: ButtonProps) {
  return (
    <Button color="gray" disabled={isDisabled} variant="default">
      {text}
    </Button>
  );
}

export default ButtonComponent;
