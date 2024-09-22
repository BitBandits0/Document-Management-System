import React from 'react';
import AppLayout from './layouts/app-layout';
import { ThemeProvider } from '@/components/theme-provider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landing';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
