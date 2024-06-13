import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,

} from '@tanstack/react-table';




export const MessageBoardTable = (data, columns, flexRender, filter, rowSelection, setFilter, setRowSelection,) => {

    return useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getRowId: (row) => row._id,
        state: {
            globalFilter: filter,
            rowSelection: rowSelection,
        },
        onGlobalFilterChange: setFilter,
        onRowSelectionChange: setRowSelection,
        enableRowSelection: true,
    });
};