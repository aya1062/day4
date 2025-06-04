'use client';
import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [nameInp, setNameInp] = useState("");
  const [emailInp, setEmailInp] = useState("");
  const [phoneInp, setPhoneInp] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function getAllUsers() {
    const response = await fetch("/api/userdata");
    const userData = await response.json();
    setUsers(userData);
  }

  async function AddOrUpdateUser() {
    if (editingId) {
      await fetch("/api/updatedata", {
        method: "PUT",
        body: JSON.stringify({ 
          id: editingId, 
          name: nameInp, 
          email: emailInp,
          phone: phoneInp 
        }),
        headers: { "Content-Type": "application/json" },
      });
      setEditingId(null);
    } else {
      await fetch("/api/userdata", {
        method: "POST",
        body: JSON.stringify({ 
          name: nameInp, 
          email: emailInp,
          phone: phoneInp 
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
    getAllUsers();
    setNameInp("");
    setEmailInp("");
    setPhoneInp("");
  }

  async function deleteUser(id) {
    await fetch("/api/deletedata", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    getAllUsers();
  }

  function handleEdit(user) {
    setEditingId(user.id);
    setNameInp(user.name);
    setEmailInp(user.email);
    setPhoneInp(user.phone || "");
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl leading-9 font-bold tracking-tight text-gray-900">
          إدارة المستخدمين
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label className="block text-sm leading-6 font-medium text-gray-900">
              الاسم
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={nameInp}
                onChange={(e) => setNameInp(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm leading-6 font-medium text-gray-900">
              البريد الإلكتروني
            </label>
            <div className="mt-2">
              <input
                type="email"
                value={emailInp}
                onChange={(e) => setEmailInp(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm leading-6 font-medium text-gray-900">
              رقم الهاتف
            </label>
            <div className="mt-2">
              <input
                type="tel"
                value={phoneInp}
                onChange={(e) => setPhoneInp(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            onClick={AddOrUpdateUser}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {editingId ? "تحديث المستخدم" : "إضافة مستخدم"}
          </button>
        </div>

        <div className="mt-10 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
              {user.phone && (
                <p className="text-sm text-gray-500">{user.phone}</p>
              )}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  تعديل
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 