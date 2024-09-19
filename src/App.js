import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Transactions from "./components/Transactions";
import Settings from "./components/Settings";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import CallSupport from "./components/CallSupport";
import ChatSupport from "./components/ChatSupport";
import Coupons from "./components/Coupons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "coupons",
        element: <Coupons />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Support />,
        children: [
          {
            path: "chat",
            element: <ChatSupport />,
          },
          {
            path: "call",
            element: <CallSupport />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App py-4 px-5 mx-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
