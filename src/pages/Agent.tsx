// src/pages/Users.tsx
import React from "react";
import img from "../assets/hux.jpg";

interface userDetail {
  id: number;
  name: string;
  title: string;
  status: number;
  Role: string;
  img: any;
  gmail: string;
}

const Agent: React.FC = () => {
  const userD: userDetail[] = [
    {
      id: 1,
      img: img,

      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
    {
      id: 2,
      img: img,
      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
    {
      id: 3,
      img: img,
      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
    {
      id: 4,
      img: img,
      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
    {
      id: 5,
      img: img,
      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
    {
      id: 6,
      img: img,
      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
    {
      id: 7,
      img: img,
      gmail: "jhohnny@gmail.com",
      name: "john Dave",
      title: "Land property",
      status: 0.054,
      Role: "Owner",
    },
  ];
  return (
    <div className="p-2 min-h-screen bg-slate-200 flex flex-col">
      <h1 className="text-2xl font-bold py-5">Angent Details</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-md shadow-lg p-4 py-4">
          <h1 className="text-2xl font-bold">2435</h1>
          <p>New users</p>
        </div>
        <div className="bg-white rounded-md shadow-lg p-4">
          <h1 className="text-2xl font-bold">2435</h1>
          <p>Total Orders</p>
        </div>
        <div className="bg-slate-950 text-white rounded-md shadow-lg p-4">
          <h1 className="text-2xl ">Product</h1>
          <p>Information</p>
        </div>
      </div>
      <div className="mt-4">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-4 py-2 text-left text-white">Name</th>
              <th className="px-4 py-2 text-left text-white">Title</th>
              <th className="px-4 py-2 text-left text-white">Status</th>
              <th className="px-4 py-2 text-left text-white">Role</th>
            </tr>
          </thead>
          <tbody>
            {/* <tbody className=""> */}
            {userD.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">
                  <div className="p-2 flex gap-2 " key={user.id}>
                    <div className=" rounded-full h-10 w-10">
                      <img
                        src={user.img}
                        alt={user.name}
                        className="object-cover h-full w-full rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-serif">{user.name}</h1>
                      <span>{user.gmail}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{user.title}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2 justify-between items-center flex">
                  {user.Role}{" "}
                  <button className="border border-red-600 rounded-md px-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            {/* </tbody> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agent;
