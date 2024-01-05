'use client';
import { TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

function SearchInput({ searchQuery, setSearchQuery }: SearchInputProps) {
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  return (
    <TextInput
      leftSectionPointerEvents="none"
      leftSection={icon}
      onChange={(event) => setSearchQuery(event.currentTarget.value)}
      placeholder="Search travel topics"
      value={searchQuery}
    />
  );
}

export default SearchInput;
