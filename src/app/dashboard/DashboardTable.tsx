import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Input } from '@/components/common/Input';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaSearch,
} from 'react-icons/fa';
import { Title } from '@/components/common/Text';
import { Button } from '@/components/common/Button';
import { Table } from '@/components/common/Table';
import { DashboardPayload } from '@/types/user';
import { wordLimit } from '@/components/WordLimit';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useAuthStore } from '@/store/store';

const columnHelper = createColumnHelper<DashboardPayload>();

const DashboardTable = ({ users }: { users: DashboardPayload[] }) => {
  const [filterInput, setFilterInput] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  const { setUser, setModal } = useAuthStore();

  const handleIconClick = (user: DashboardPayload) => {
    setUser(user);
    setModal(true);
  };

  const columns = [
    columnHelper.accessor('firstName', {
      header: 'First Name',
      cell: (info) => <span>{wordLimit(15, info.getValue())}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.accessor('lastName', {
      header: 'Last Name',
      cell: (info) => <span>{wordLimit(15, info.getValue())}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.accessor('username', {
      header: 'Username',
      cell: (info) => <span>{wordLimit(15, info.getValue())}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.accessor('gender', {
      header: 'Gender',
      cell: (info) => <span>{info.getValue()}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.accessor('userType', {
      header: 'User Type',
      cell: (info) => <span>{info.getValue()}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.accessor('createdAt', {
      header: 'Created Date',
      cell: (info) => <span>{wordLimit(15, info.getValue())}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => <span>{wordLimit(15, info.getValue())}</span>,
      enableGlobalFilter: true,
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => {
        return (
          info.table.options.data.length > 0 && (
            <span onClick={() => handleIconClick(info.row.original)}>
              <ChevronRightIcon className="h-5 w-5" />
            </span>
          )
        );
      },
    }),
  ];

  const table = useReactTable({
    columns: columns,
    data: users,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: ({ id }) => id.toString(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    table.setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <>
      <div className="ml-auto p-4 flex w-full justify-between items-center gap-2">
        <Title>Users</Title>
        <div className="w-full max-w-full overflow-hidden lg:w-96">
          <Input
            leftIcon={<FaSearch />}
            onChange={handleFilterChange}
            value={filterInput}
            placeholder="Name, UserType, username, gender e.t.c"
          />
        </div>
      </div>
      <Table table={table} />
      <div className="flex items-center justify-between px-2">
        <p className="text-gray-700/50">
          Page {table.getState().pagination.pageIndex + 1} of {users.length}
        </p>

        <div className="flex gap-2 justify-end p-2">
          <Button
            className="bg-white rounded-lg font-semibold !border-gray-200/90 px-8"
            onClick={() => table.previousPage()}
          >
            {' '}
            <>
              <FaLongArrowAltLeft className="text-brown-700" />
              <p className="text-brown-700 hidden md:flex">Previous</p>
            </>
          </Button>
          <Button
            className="bg-white rounded-lg font-semibold !border-gray-200/90 px-8"
            onClick={() => table.nextPage()}
          >
            <>
              <p className="text-brown-700 hidden md:flex">Next</p>
              <FaLongArrowAltRight className="text-brown-700" />
            </>
          </Button>
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
