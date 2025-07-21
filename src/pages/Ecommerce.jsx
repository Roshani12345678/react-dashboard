import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
// import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

// Dummy data or alternative content to avoid rendering errors
const earningData = [];
const medicalproBranding = { data: [], teams: [], leaders: [] };
const recentTransactions = [];
const weeklyStats = [];
const dropdownData = [];


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Hey There</p>
              <p className="text-2xl">Whats-up</p>
            </div>
            
          </div>
          <div className="mt-6">
          </div>
        </div>
      </div>

      {/* Other content like recent transactions, weekly stats, etc. */}
      <div className="flex flex-wrap justify-center">
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            {/* <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button> */}
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50"
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">Upgrading every single day</p>
              <p className="text-gray-400">Roshani Verma</p>
              <p className="mt-8 text-sm text-gray-400">
                Made by me to track my daily activities and progress. This is a simple yet effective way to stay organized and motivated.
              </p>
              <div className="mt-3">

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Ecommerce;
