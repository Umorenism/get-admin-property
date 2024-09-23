// src/pages/Dashboard.tsx
import React from "react";
import pic from "../assets/hux2.jpg";
import pic2 from "../assets/hux.jpg";

const cardlist = [
  {
    id: 1,
    img: pic,
    title: "The stobbies",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 2,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 3,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 4,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 5,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 6,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 7,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
  {
    id: 8,
    img: pic,
    title: "The Old Rectory",
    amount: "200,000",
    location: " 22 john akpan street uyo",
  },
];
const Messagelist = [
  {
    id: 1,
    img: pic,
    name: "Peter",
    gmail: " peter@gmail.com",
  },
  {
    id: 2,
    img: pic,

    name: "Mike Dan",
    gmail: " peter@gmail.com",
  },
  {
    id: 3,
    img: pic,
    name: "Paul steve",
    gmail: " paul@gmail.com",
  },
  {
    id: 4,
    img: pic,
    name: "Paul steve",
    gmail: " paul@gmail.com",
  },
  {
    id: 5,
    img: pic,
    name: "Paul steve",
    gmail: " paul@gmail.com",
  },
  {
    id: 6,
    img: pic,
    name: "Paul steve",
    gmail: " paul@gmail.com",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-2 min-h-screen bg-white flex flex-col">
      <div className="py-4 flex gap-10">
        <button className="text-xl font-bold text-orange-500 hover:text-orange-400 underline">
          Buy
        </button>
        <button className="text-xl font-bold text-slate-500 hover:text-orange-400 hover:underline">
          Sell
        </button>
        <button className="text-xl font-bold text-slate-500 hover:text-orange-400 hover:underline">
          Rent
        </button>
        <button className="text-xl font-bold text-slate-500 hover:text-orange-400 hover:underline">
          Compare
        </button>
      </div>

      <div className="py-3 mt-4 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            254 results{" "}
            <span className="text-sm tracking-wide text-slate-600">
              special properties result
            </span>
          </h2>
          <p>Map View</p>
        </div>
        <div className="w-full p-1 flex gap-10">
          <div className="border w-[30%] p-2 rounded-full">
            <input
              type="text"
              placeholder="search property..."
              className="w-full h-full bg-transparent outline-none"
            />
          </div>
          <div className="border w-[10%] p-2 rounded-full flex items-center">
            <p className="text-center">
              Price <span className="text-orange-500 font-bold">$$</span>
            </p>
          </div>
          <div className="border w-[10%] p-2 rounded-full">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            >
              <option value="bed">bed</option>
              <option value="bed">2bed</option>
              <option value="bed">3bed</option>
            </select>
          </div>
          <div className="border w-[30%] p-2 rounded-full">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            >
              <option value="Property Type">Property Type</option>
              <option value="bed">2bed</option>
              <option value="bed">3bed</option>
            </select>
          </div>
          <div className="border w-[10%] p-2 rounded-full">
            <h1>Filter</h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-6 h-auto mt-4 ">
        <div className="col-span-4  min-h-screen">
          <div className="p-2 grid grid-cols-4 gap-3">
            {/* card */}
            {cardlist.map((it, index) => (
              <div
                className="bg-white text-black shadow-lg w-[200px] p-2 rounded-md"
                key={index}
              >
                <img src={it.img} alt="" width={200} height={200} />
                <p className="text-lg py-2 font-bold ">{it.title}</p>
                <h5 className="py-2 text-red-500">{it.amount}</h5>

                <p className="text-sm">{it.location}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white text-black shadow-lg rounded-md p-2 flex gap-2">
            <div className="">
              <img src={pic2} alt="" />
            </div>
            <div className="flex flex-col">
              <p>Bed Property</p>
              <h3>$200,000</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea
                nemo numquam, animi maxime quaerat repudiandae facilis deleniti,
                eligendi inventore quibusdam mollitia culpa, tempora cupiditate
                soluta eaque voluptatum. Enim, suscipit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2  min-h-screen p-2">
          <h1 className="text-lg py-4 font-bold text-blue-600  underline">
            Recent Messages
          </h1>

          {Messagelist.map((items, index) => (
            <div className="">
              <div className="p-2 flex gap-2 " key={index}>
                <div className=" rounded-full h-10 w-10">
                  <img
                    src={items.img}
                    alt={items.name}
                    className="object-cover h-full w-full rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-serif">{items.name}</h1>
                  <span>{items.gmail}</span>
                </div>
              </div>
              <hr />
            </div>
          ))}
          <div className="p-2">
            <h1 className="text-lg font-bold">Map View</h1>
            <div className="bg-slate-500">map</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
