import { Pagination } from "@mantine/core";

export default function PaginationComponent() {
  return (
    <>
      <Pagination total={20} siblings={1} defaultValue={1} />
    </>
  );
}
