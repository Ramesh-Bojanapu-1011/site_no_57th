import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import Image from 'next/image';
import { ModeToggle } from '@/components/theme/ModeToggle';

const staticStats = [
  { label: 'Total IT Services', value: 42 },
  { label: 'Cybersecurity Projects', value: 18 },
  { label: 'Cloud Deployments', value: 27 },
  { label: 'Active Users', value: 134 },
  { label: 'Incidents Resolved', value: 56 },
];

const getAllUsers = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('All_Users') || '[]');
  }
  return [];
};

const getLoginData = () => {
  if (typeof window === 'undefined') return [];
  const users = JSON.parse(localStorage.getItem('All_Users') || '[]');
  // Aggregate logins by date
  const loginCounts: Record<string, number> = {};
  users.forEach((user: any) => {
    if (user.loginTime) {
      const date = new Date(user.loginTime).toISOString().slice(0, 10);
      loginCounts[date] = (loginCounts[date] || 0) + 1;
    }
  });
  // Convert to array sorted by date
  return Object.entries(loginCounts)
    .map(([date, logins]) => ({ date, logins }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const users = typeof window !== 'undefined' ? getAllUsers() : [];
  const loginData = getLoginData();
  // Pie chart data
  const totalUsers = users.length;
  const loginUsers = users.filter((u: any) => !!u.loginTime).length;
  const pieData = [
    { name: 'Login Users', value: loginUsers },
    { name: 'Other Users', value: totalUsers - loginUsers },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Sidebar */}
      <aside className="w-72 max-h-screen bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg shadow-2xl p-8 flex flex-col gap-10 border-r border-blue-200 dark:border-blue-800 rounded-r-3xl  ">
        <div className="flex justify-between  items-center gap-3 mb-8">
          <Image src="/logo-stackly.png" alt="Logo" width={150} height={150} className=" " />
           <ModeToggle/>           
        </div>
        <nav className="flex flex-col gap-4">
          <button
            className={`py-3 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-md border border-blue-300 dark:border-blue-700 hover:scale-105 hover:bg-blue-500 hover:text-white ${
              activeTab === 'stats'
                ? 'bg-blue-600 text-white scale-105'
                : 'bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300'
            }`}
            onClick={() => setActiveTab('stats')}
          >
            <span className="inline-block align-middle mr-2">📊</span> Static Data
          </button>
          <button
            className={`py-3 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-md border border-purple-300 dark:border-purple-700 hover:scale-105 hover:bg-purple-500 hover:text-white ${
              activeTab === 'graph'
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300'
            }`}
            onClick={() => setActiveTab('graph')}
          >
            <span className="inline-block align-middle mr-2">📈</span> User Activity
          </button>
          <button
            className={`py-3 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-md border border-green-300 dark:border-green-700 hover:scale-105 hover:bg-green-500 hover:text-white ${
              activeTab === 'users'
                ? 'bg-green-600 text-white scale-105'
                : 'bg-green-100 dark:bg-gray-800 text-green-700 dark:text-green-400'
            }`}
            onClick={() => setActiveTab('users')}
          >
            <span className="inline-block align-middle mr-2">👥</span> All Users
          </button>
           

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 flex flex-col gap-8 max-h-screen overflow-y-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 drop-shadow-lg tracking-tight">
          Admin Dashboard
        </h1>

        {activeTab === 'stats' && (
          <section className=''>
            <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300 tracking-wide drop-shadow-lg">
              IT Services / Cybersecurity / Cloud Services Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {staticStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-100 dark:border-blue-900 backdrop-blur-lg hover:scale-105 transition-transform duration-200"
                >
                  <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 drop-shadow-lg">
                    {stat.value}
                  </span>
                  <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'graph' && (
          <section className="flex flex-col gap-10  ">
            <div className="bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl p-10 border border-purple-100 dark:border-purple-900 backdrop-blur-lg flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300 tracking-wide drop-shadow-lg">
                Daily User Logins
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={loginData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="logins" fill="#6366f1" name="Logins" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl p-10 border border-pink-100 dark:border-pink-900 backdrop-blur-lg flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-8 text-pink-700 dark:text-pink-300 tracking-wide drop-shadow-lg">
                Users Pie Graph
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? '#6366f1' : '#f472b6'}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-300">
                <span className="font-bold text-blue-700">Total Users:</span> {totalUsers}
                <br />
                <span className="font-bold text-purple-700">Login Users:</span> {loginUsers}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'pie' && (
          <section>
            
          </section>
        )}

        {activeTab === 'users' && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-green-700 dark:text-green-400 tracking-wide drop-shadow-lg">
              All Users
            </h2>
            <div className="overflow-x-auto bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl p-10 border border-green-100 dark:border-green-900 backdrop-blur-lg">
              <table className="min-w-full text-left rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-blue-200 dark:border-blue-800 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900">
                    <th className="py-4 px-6 font-bold text-lg">First Name</th>
                    <th className="py-4 px-6 font-bold text-lg">Last Name</th>
                    <th className="py-4 px-6 font-bold text-lg">Email</th>
                    <th className="py-4 px-6 font-bold text-lg">Role</th>
                    <th className="py-4 px-6 font-bold text-lg">Registered</th>
                    <th className="py-4 px-6 font-bold text-lg">Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="py-6 text-center text-gray-500 text-xl"
                      >
                        No users found.
                      </td>
                    </tr>
                  ) : (
                    users.map((user: any, idx: number) => (
                      <tr
                        key={user.email || idx}
                        className="border-b border-gray-200 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-150"
                      >
                        <td className="py-4 px-6 text-lg">{user.firstName || '-'}</td>
                        <td className="py-4 px-6 text-lg">{user.lastName || '-'}</td>
                        <td className="py-4 px-6 text-lg">{user.email}</td>
                        <td className="py-4 px-6 text-lg">{user.role || '-'}</td>
                        <td className="py-4 px-6 text-lg">
                          {user.registerTime
                            ? new Date(user.registerTime).toLocaleString()
                            : '-'}
                        </td>
                        <td className="py-4 px-6 text-lg">
                          {user.loginTime
                            ? new Date(user.loginTime).toLocaleString()
                            : '-'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
