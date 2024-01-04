import { useClient } from 'next/data-client';
import { useState } from 'react';
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function SearchInput() {
  useClient();
  const [value, setValue] = useState<string>('');
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <TextInput
      label="Search"
      leftSectionPointerEvents="none"
      leftSection={icon}
      onChange={(event) => setValue(event.currentTarget.value)}
      placeholder="Your email"
      value={value}
    />
  );
}

export default SearchInput;
