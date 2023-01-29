import DataGrid from "../shared/DataGrid";
import Shell from "../shared/Shell";

const Table = () => {
    const columns1 = [
        { id: 'name', name: 'Name' },
        { id: 'gender', name: 'Gender' },
        { id: 'email', name: 'Email' },
        { id: 'role', name: 'Role' },
        { id: 'status', name: 'Status' },
    ];

    const columns2 = [
        { id: 'name', name: 'Name', sortable: true },
        { id: 'gender', name: 'Gender', sortable: true },
        { id: 'email', name: 'Email', sortable: true },
        { id: 'role', name: 'Role', sortable: true },
        { id: 'status', name: 'Status', sortable: true },
    ];

    const data = [
        { name: 'Joe Antonio', gender: 'Male', email: 'test1@mail.com', role: 'Director', status: 'Active' },
        { name: 'Sarah Daeva', gender: 'Female', email: 'test2@mail.com', role: 'Regional Director', status: 'Active' },
        { name: 'Toni Lana', gender: 'Female', email: 'test3@mail.com', role: 'Development Lead', status: 'Active' },
        { name: 'David Jason', gender: 'Male', email: 'test4@mail.com', role: 'Senior Engineer', status: 'Active' },
        { name: 'Mike Wason', gender: 'Male', email: 'test5@mail.com', role: 'Senior Engineer', status: 'Inactive' },
        { name: 'Jenefier Wong', gender: 'Female', email: 'test6@mail.com', role: 'Senior Engineer', status: 'Inactive' },
        { name: 'James Wong', gender: 'Male', email: 'test7@mail.com', role: 'Senior Engineer', status: 'Active' },
        { name: 'David Man', gender: 'Male', email: 'test8@mail.com', role: 'Senior Engineer', status: 'Active' },
        { name: 'Angelica Ramos', gender: 'Female', email: 'test9@mail.com', role: 'Manager', status: 'Active' },
        { name: 'Fiona Green', gender: 'Female', email: 'test10@mail.com', role: 'Manager', status: 'Active' },
        { name: 'Paul Byrd', gender: 'Male', email: 'test11@mail.com', role: 'Manager', status: 'Active' },
        { name: 'Yuri Berry', gender: 'Female', email: 'test12@mail.com', role: 'Senior Engineer', status: 'Active' },
        { name: 'Jackson Bradshaw', gender: 'Male', email: 'test13@mail.com', role: 'Senior Engineer', status: 'Inactive' },
        { name: 'Charde Marshall', gender: 'Male', email: 'test14@mail.com', role: 'Junior Engineer', status: 'Inactive' },
        { name: 'Vivian Harrell', gender: 'Female', email: 'test15@mail.com', role: 'Junior Engineer', status: 'Active' },
        { name: 'Cedric Kelly', gender: 'Female', email: 'test16@mail.com', role: 'Junior Engineer', status: 'Active' },
    ];

    return (<Shell>
        <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="border-l-4 font-bold mb-3 pl-4 text-xl text-gray-700">Basic</div>
                <DataGrid columns={columns1} data={data.filter((v, k) => k < 5)} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="border-l-4 font-bold mb-3 pl-4 text-xl text-gray-700">Sorting</div>
                <DataGrid columns={columns2} data={data.filter((v, k) => k < 5)} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="border-l-4 font-bold mb-3 pl-4 text-xl text-gray-700">Pagination</div>
                <DataGrid columns={columns2} data={data} pagination={true} />
            </div>
        </div>
    </Shell>)
}

export default Table;