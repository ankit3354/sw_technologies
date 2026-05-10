import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import "../styles/Admin.css";
import { toast } from "react-toastify";

const VITE_SERVER_URL = process.env.VITE_SERVER_URL;

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const contactsRes = await axios.get(
        `${VITE_SERVER_URL}/api/admin/contacts`,
        config,
      );

      const usersRes = await axios.get(
        `${VITE_SERVER_URL}/api/admin/users`,
        config,
      );

      const quotesRes = await axios.get(
        `${VITE_SERVER_URL}/api/admin/quotes`,
        config,
      );

      setContacts(contactsRes.data.contacts);
      setUsers(usersRes.data.users);
      setQuotes(quotesRes.data.quotes);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: string) => {
    const res = await axios.delete(
      `${VITE_SERVER_URL}/api/admin/contacts/${id}`,
      config,
    );

    toast.success(res.data.message || "Contact Deleted");

    fetchData();
  };

  return (
    <Layout>
      <div className="admin-page">
        <h1>Admin Dashboard</h1>
        <h2>Contacts</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item: any) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>
                  <button onClick={() => deleteContact(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item: any) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Quotes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((item: any) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.serviceRequired}</td>
                <td>{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Admin;
