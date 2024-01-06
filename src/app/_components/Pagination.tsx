import { Pagination } from '@mantine/core';

type PaginationProps = {
  total: number;
};

function PaginationComponent({ total }: PaginationProps): JSX.Element {
  return <Pagination color="teal" radius="md" size="lg" total={total} />;
}

export default PaginationComponent;
