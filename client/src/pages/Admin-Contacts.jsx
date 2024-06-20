import React, { useEffect, useState } from 'react';
import { useAuth } from "../store/auth";
import DataTable from 'react-data-table-component';
import { FaTrash } from "react-icons/fa6";
import { toast } from 'react-toastify';


const AdminContacts = () => {
    const { authorizationtoken } = useAuth();
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllContacts();
    }, [])
    const getAllContacts = async () => {
        const res = await fetch("http://127.0.0.1:3000/api/admin/contacts",
            {
                method: "GET",
                headers: {
                    Authorization: authorizationtoken,
                }
            });
        const data = await res.json();
        setData(data.msg);

    }

    const handleDelete = async (id) => {
        debugger
        try {
            const res = await fetch(`http://127.0.0.1:3000/api/admin/contacts/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationtoken,
                    }
                })
            const data = res.json();
            if (res.status === 200) {
                getAllContacts();
                toast.success("contact delete successfully");
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
            name: 'Message',
            selector: row => row.message,
        },
        {
            name: 'Actions',
            cell: row => (
                <>
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

export default AdminContacts