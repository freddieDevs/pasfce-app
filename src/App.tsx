import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import { Root } from "@/routes/root";
import ErrorPage from "@/error-page";
import { DashboardPage } from "@/routes/dashboard";
import { MembersPage } from "@/routes/members";
import { StaffPage } from "@/routes/staffs";
import { NewMembersPage } from "@/routes/new-members";
import { SavingsPage } from "@/routes/savings";
import { SigninPage } from "@/routes/signin";
import { ModalProvider } from "@/providers/modal-provider";

function App() {
  const Router = process.env.NODE_ENV === "production" ? createHashRouter : createBrowserRouter;
  const router = Router([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <DashboardPage />
        },
        {
          path: '/signin',
          element: <SigninPage />
        },
        {
          path: '/members',
          element: <MembersPage />
         
        },
        {
          path: '/staffs',
          element: <StaffPage />
        },
        {
          path: '/newmembers',
          element: <NewMembersPage />
        },
        {
          path: '/savings',
          element: <SavingsPage />
        },

       
      ]
    },
  ]);
  return (
    
    <>
      <ModalProvider />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
