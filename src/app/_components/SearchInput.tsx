'use client';
import { TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

type SearchInputProps = {
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

// TODO: Handle no results found
function SearchInput({
  handleKeyDown,
  searchQuery,
  setSearchQuery,
}: SearchInputProps) {
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  return (
    <TextInput
      leftSectionPointerEvents="none"
      leftSection={icon}
      onChange={(event) => setSearchQuery(event.currentTarget.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search topics by title"
      value={searchQuery}
    />
  );
}

export default SearchInput;
