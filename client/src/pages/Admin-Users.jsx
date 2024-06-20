import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa6';
import { CiEdit } from "react-icons/ci";
const AdminUsers = () => {
    const { authorizationtoken } = useAuth();
    const [data, setData] = useState();
    useEffect(() => {
        getAllUserData();
    }, [])

    const getAllUserData = async () => {
        try {
            const res = await fetch("http://127.0.0.1:3000/api/admin/users",
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationtoken,
                    }
                })
            debugger
            const data1 = await res.json();
            console.log(data1);
            setData(data1.msg);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            debugger
            const res = await fetch(`http://127.0.0.1:3000/api/admin/users/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationtoken,
                    }
                })
            const data1 = await res.json();
            if (res.status === 200) {
                getAllUserData();
                toast.success("user delete successfully");
            }

        } catch (error) {
            console.log(error);
        }
    }
    const columns = [
        {
            name: 'UserName',
            selector: row => row.username,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'isAdmin',
            selector: row => row.isAdmin.toString(),
        },
        {
            name: 'Actions',
            cell: row => (
                <>
                    <Link
                        type="button"
                        to={`/admin/editUser/${row._id}`}
                        className="btn btn-warning btn-sm m-1"
                    >
                        <CiEdit /> Edit
                    </Link>
                    <button
                        type="button"
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-danger btn-sm m-1"
                    >
                        <FaTrash /> Delete
                    </button>
                </>
            ),
        },
    ];

    return (

        <DataTable
            pagination
            highlightOnHover
            pointerOnHover
            columns={columns}
            data={data}
        />
    )
}

export default AdminUsers