import React from "react";
import axios from "axios";
import Navbarpages from "../Navbarpages";
// import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Piyasa = () => {
  // const [sonuc, setSonuc] = useState("");
  // const baglan = () => {
  //   axios
  //     .get("http://localhost:80/")
  //     .then((response) => {
  //       if (response.data == "basarili") {
  //         setSonuc("Bağlantı gerçekleşti");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("hata oluştu");
  //     });
  // };

  return (
    <>
      <Outlet />
      <Navbarpages />

      {/* <div>
        <button>
          Bağlan
          <h1>{sonuc}</h1>
        </button>
      </div> */}
      <div
        name="pricing"

        // initial={{ width: "50vw", x: "0vw", opacity: 0 }}
        // animate={{ width: "100vw", x: 0, opacity: 1 }}
        // transition={{ duration: 2, origin: 1 }}
      >
        <div
          className="w-full h-[700px] bg-slate-900 absolute mix-blend-overlay "
          //   initial={{ width: "50vw", x: "0vw", opacity: 0 }}
          //   animate={{ width: "100vw", x: 0, opacity: 1 }}
          //   transition={{ duration: 2, origin: 1 }}
        >
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-12 ">
            <div className="pb-4 bg-white dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-200 dark:text-gray-400">
              <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                <tr>
                  <th scope="col" className="p-4"></th>
                  <th scope="col" className="py-3 px-6">
                    Makul ismi
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ALış
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Satış
                  </th>
                  <th scope="col" className="py-3 px-6">
                    En Yüksek
                  </th>
                  <th scope="col" className="py-3 px-6">
                    En Düşük
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Tahmin
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
                <tr className="text-slate-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <NavLink
                      to={"/piyasa/DailyData "}
                      smooth="true"
                      duration={500}
                    >
                      Dolar
                    </NavLink>
                  </th>
                  <td className="py-4 px-6">18,65</td>
                  <td className="py-4 px-6">18,98</td>
                  <td className="py-4 px-8">18,98</td>
                  <td className="py-4 px-8">18,54</td>
                  <td className="py-4 px-7">18,45</td>
                </tr>
              </tbody>
            </table>
            <div className="pt-4 grid place-items-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Önceki
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Sonraki
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Piyasa;
