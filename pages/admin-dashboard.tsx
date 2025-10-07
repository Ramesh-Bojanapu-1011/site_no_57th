import SiteHeader from "@/components/SiteHeader";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Static data for the statistics tab
const staticStats = [
  { key: "totalITServices", value: 42 },
  { key: "cybersecurityProjects", value: 18 },
  { key: "cloudDeployments", value: 27 },
  { key: "activeUsers", value: 134 },
  { key: "incidentsResolved", value: 56 },
];

/**
 * Utility function to retrieve all users from localStorage.
 * Handles server-side rendering (SSR) protection.
 */
const getAllUsers = () => {
  if (typeof window !== "undefined") {
    // In a real application, this would be an API call
    return JSON.parse(localStorage.getItem("All_Users") || "[]");
  }
  return [];
};

/**
 * Utility function to process user data and aggregate logins by date for the Bar Chart.
 * Handles server-side rendering (SSR) protection.
 */
const getLoginData = () => {
  if (typeof window === "undefined") return [];
  const users = JSON.parse(localStorage.getItem("All_Users") || "[]");
  // Aggregate logins by date
  const loginCounts: Record<string, number> = {};
  users.forEach((user: any) => {
    if (user.loginTime) {
      // Extract the date part (YYYY-MM-DD)
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
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("stats");
  // Only try to access localStorage if window is defined
  const users = typeof window !== "undefined" ? getAllUsers() : [];
  const loginData = getLoginData();

  // Pie chart data derived from user list
  const totalUsers = users.length;
  const loginUsers = users.filter((u: any) => !!u.loginTime).length;
  const pieData = [
    { name: t("adminDashboard.pie.loginUsers"), value: loginUsers },
    {
      name: t("adminDashboard.pie.otherUsers"),
      value: totalUsers - loginUsers,
    },
  ];

  // Tab configurations
  const tabs = [
    {
      key: "stats",
      label: t("adminDashboard.tabs.stats"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#e1d8ec"
              d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20c0 1.48-.804 2.773-2 3.465L26.554 29a4 4 0 0 0-3.014.23L22 30h-3l-3-1.5l-3 1.5h-3l-1.54-.77A4 4 0 0 0 5.446 29L4 29.465A4 4 0 0 1 2 26z"
            ></path>
            <path
              fill="#b4acbc"
              d="M10 11v10H2v1h8v8h1v-8h10v8h1v-8h8v-1h-8V11h8v-1h-8V2h-1v8H11V2h-1v8H2v1zm1 0h10v10H11z"
            ></path>
            <path
              fill="#00d26a"
              d="M6 30h4V10.214C10 9.542 9.453 9 8.774 9H5.226C4.547 9 4 9.542 4 10.213v19.252c.588.34 1.271.535 2 .535"
            ></path>
            <path
              fill="#f70a8d"
              d="M17.774 17h-3.548c-.679 0-1.226.542-1.226 1.214V30h6V18.214c0-.672-.547-1.214-1.226-1.214"
            ></path>
            <path
              fill="#00a6ed"
              d="M22 30h4c.729 0 1.412-.195 2-.535V7.209C28 6.539 27.453 6 26.774 6h-3.548C22.547 6 22 6.54 22 7.209z"
            ></path>
          </g>
        </svg>
      ),
      activeClass: "bg-blue-600 text-white scale-105 shadow-xl",
      inactiveClass:
        "bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300",
      border: "border-blue-300 dark:border-blue-700",
      hover: "hover:bg-blue-500 hover:text-white",
    },
    {
      key: "graph",
      label: t("adminDashboard.tabs.graph"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#e1d8ec"
              d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 3.731 2.556l-.585 1.776l.854.846V26a4 4 0 0 1-4 4H6a4 4 0 0 1-3.888-3.056l.67-1.893l-.782-.71z"
            ></path>
            <path
              fill="#b4acbc"
              d="M10 11v10H2v1h8v8h1v-8h10v8h1v-8h8v-1h-8V11h8v-1h-8V2h-1v8H11V2h-1v8H2v1zm1 0h10v10H11z"
            ></path>
            <path
              fill="#319fe7"
              d="M2.12 26.976A4 4 0 0 1 2 26v-1.701l7.062-6.973a2.2 2.2 0 0 1 3.06-.03l2.15 2.04a.5.5 0 0 0 .698-.009L29.722 4.531c.18.455.278.95.278 1.469v1.187L16.132 20.902a2.2 2.2 0 0 1-3.052.04l-2.15-2.017a.5.5 0 0 0-.694.01z"
            ></path>
          </g>
        </svg>
      ),
      activeClass: "bg-purple-600 text-white scale-105 shadow-xl",
      inactiveClass:
        "bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300",
      border: "border-purple-300 dark:border-purple-700",
      hover: "hover:bg-purple-500 hover:text-white",
    },
    {
      key: "users",
      label: t("adminDashboard.tabs.users"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#321b41"
              d="M15.84 23.93q.09.068.174.141q.084-.073.176-.141a11.07 11.07 0 0 1 12.65 0A2.91 2.91 0 0 1 30 26.29V30H2v-3.68a2.93 2.93 0 0 1 1.19-2.39a11.07 11.07 0 0 1 12.65 0"
            ></path>
            <path
              fill="#533566"
              d="M10.67 7.93h-2.3a4.24 4.24 0 0 0-4.23 4.83l.067 1.022a1.71 1.71 0 0 0 .224 3.397l.099 1.501a4.05 4.05 0 0 0 3.15 3.427v.933a1.81 1.81 0 1 0 3.62 0v-.923a4.05 4.05 0 0 0 3.2-3.437l.094-1.503a1.71 1.71 0 0 0 1.396-.867a1.71 1.71 0 0 0 1.441.87l.099 1.5a4.05 4.05 0 0 0 3.15 3.427v.933a1.81 1.81 0 1 0 3.62 0v-.923a4.05 4.05 0 0 0 3.2-3.437l.094-1.503a1.71 1.71 0 0 0 .212-3.39l.064-1.027a4.26 4.26 0 0 0-4.2-4.83h-2.3a4.24 4.24 0 0 0-4.23 4.83l.067 1.022a1.71 1.71 0 0 0-1.217.848a1.71 1.71 0 0 0-1.184-.843l.064-1.027a4.26 4.26 0 0 0-4.2-4.83"
            ></path>
          </g>
        </svg>
      ),
      activeClass: "bg-green-600 text-white scale-105 shadow-xl",
      inactiveClass:
        "bg-green-100 dark:bg-gray-800 text-green-700 dark:text-green-400",
      border: "border-green-300 dark:border-green-700",
      hover: "hover:bg-green-500 hover:text-white",
    },
  ];

  return (
    // Main container with full screen height and responsive background gradient
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Main Content Area: flex-1 to fill space, uses max-h-screen and overflow-y-auto for internal scrolling */}
      <div className="flex-1 flex flex-col gap-6 md:gap-8 max-h-screen overflow-y-auto">
        <SiteHeader />

        <main className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16 py-6 md:py-10 flex-grow">
          {/* Dashboard Title: Responsive font size and text gradient */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 drop-shadow-lg tracking-tight">
            {t("adminDashboard.title")}
          </h1>

          {/* Tab Navigation: Responsive spacing and styling */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`py-2 md:py-3 px-4 md:px-6 rounded-xl font-bold text-sm md:text-lg transition-all flex items-center duration-200 shadow-lg border-2 ${
                  tab.border
                } ${tab.hover} ${
                  activeTab === tab.key ? tab.activeClass : tab.inactiveClass
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span className="inline-block align-middle mr-2">
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* === STATS TAB CONTENT === */}
          {activeTab === "stats" && (
            <section className="w-full max-w-7xl">
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-purple-700 dark:text-purple-300 tracking-wide drop-shadow-lg text-center">
                {t("adminDashboard.stats.title")}
              </h2>
              {/* Responsive Grid: 1, 2, or 3 columns based on screen size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {staticStats.map((stat) => (
                  <div
                    key={stat.key}
                    className="bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border border-blue-100 dark:border-blue-900 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300"
                  >
                    <span className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 drop-shadow-lg">
                      {stat.value}
                    </span>
                    <span className="text-sm md:text-xl text-center font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                      {t(`adminDashboard.stats.${stat.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* === GRAPH TAB CONTENT === */}
          {activeTab === "graph" && (
            <section className="flex flex-col lg:flex-row gap-6 md:gap-10 w-full max-w-7xl">
              {/* Login Bar Chart Card */}
              <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-purple-100 dark:border-purple-900 backdrop-blur-lg flex flex-col items-center w-full lg:w-3/5">
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-purple-700 dark:text-purple-300 tracking-wide drop-shadow-lg text-center">
                  {t("adminDashboard.graph.loginsTitle")}
                </h2>
                {/* ResponsiveContainer ensures the chart scales */}
                <ResponsiveContainer width="100%" height={300} minHeight={180}>
                  <BarChart
                    data={loginData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="logins"
                      fill="#6366f1"
                      name={t("adminDashboard.graph.loginsBar")}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* User Distribution Pie Chart Card */}
              <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-pink-100 dark:border-pink-900 backdrop-blur-lg flex flex-col items-center w-full lg:w-2/5">
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-pink-700 dark:text-pink-300 tracking-wide drop-shadow-lg text-center">
                  {t("adminDashboard.graph.pieTitle")}
                </h2>
                {/* ResponsiveContainer ensures the chart scales */}
                <ResponsiveContainer width="100%" height={300} minHeight={180}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      labelLine={false}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={index === 0 ? "#6366f1" : "#f472b6"}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 md:mt-8 text-sm md:text-xl font-semibold text-gray-700 dark:text-gray-300 text-center">
                  <span className="font-bold text-blue-700 dark:text-blue-400">
                    {t("adminDashboard.graph.totalUsers")}:
                  </span>{" "}
                  {totalUsers}
                  <br />
                  <span className="font-bold text-purple-700 dark:text-purple-400">
                    {t("adminDashboard.graph.loginUsers")}:
                  </span>{" "}
                  {loginUsers}
                </div>
              </div>
            </section>
          )}

          {/* === USERS TAB CONTENT === */}
          {activeTab === "users" && (
            <section className="w-full max-w-7xl">
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-green-700 dark:text-green-400 tracking-wide drop-shadow-lg text-center">
                {t("adminDashboard.users.title")}
              </h2>
              {/* Table Wrapper: overflow-x-auto for horizontal scrolling on small screens */}
              <div className="overflow-x-auto bg-white/60 dark:bg-gray-900/60 rounded-2xl md:rounded-3xl shadow-2xl p-2 md:p-6 border border-green-100 dark:border-green-900 backdrop-blur-lg">
                <table className="min-w-full text-left rounded-xl md:rounded-2xl overflow-hidden text-xs md:text-base">
                  <thead>
                    <tr className="border-b border-blue-200 dark:border-blue-800 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 text-gray-800 dark:text-white">
                      <th className="py-2 md:py-4 px-2 md:px-4 font-bold text-xs md:text-lg whitespace-nowrap">
                        {t("adminDashboard.users.firstName")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-4 font-bold text-xs md:text-lg whitespace-nowrap">
                        {t("adminDashboard.users.lastName")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-4 font-bold text-xs md:text-lg whitespace-nowrap">
                        {t("adminDashboard.users.email")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-4 font-bold text-xs md:text-lg whitespace-nowrap">
                        {t("adminDashboard.users.role")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-4 font-bold text-xs md:text-lg whitespace-nowrap">
                        {t("adminDashboard.users.registered")}
                      </th>
                      <th className="py-2 md:py-4 px-2 md:px-4 font-bold text-xs md:text-lg whitespace-nowrap">
                        {t("adminDashboard.users.lastLogin")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="py-4 md:py-6 text-center text-gray-500 text-sm md:text-xl dark:text-gray-400"
                        >
                          {t("adminDashboard.users.noUsers")}
                        </td>
                      </tr>
                    ) : (
                      users.map((user: any, idx: number) => (
                        <tr
                          key={user.email || idx}
                          className="border-b border-gray-200 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-150 dark:text-white/80"
                        >
                          <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-base whitespace-nowrap">
                            {user.firstName || "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-base whitespace-nowrap">
                            {user.lastName || "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-base whitespace-nowrap">
                            {user.email}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-base whitespace-nowrap">
                            {user.role || "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-base whitespace-nowrap">
                            {user.registerTime
                              ? new Date(user.registerTime).toLocaleString()
                              : "-"}
                          </td>
                          <td className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-base whitespace-nowrap">
                            {user.loginTime
                              ? new Date(user.loginTime).toLocaleString()
                              : "-"}
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
    </div>
  );
};

export default AdminDashboard;
