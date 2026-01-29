import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';

// Import Wix Services Provider and routes
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';

// Import pages
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import ShippingPage from '@/components/pages/ShippingPage';
import FAQPage from '@/components/pages/FAQPage';
import PrivacyPage from '@/components/pages/PrivacyPage';
import TermsPage from '@/components/pages/TermsPage';

// Import layout components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Main Layout component with Header and Footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Layout component that includes ScrollToTop and WixServicesProvider
function Layout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <Outlet />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
            routeMetadata: {
              pageIdentifier: 'home',
            },
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
          {
            path: "shipping",
            element: <ShippingPage />,
          },
          {
            path: "faq",
            element: <FAQPage />,
          },
          {
            path: "privacy",
            element: <PrivacyPage />,
          },
          {
            path: "terms",
            element: <TermsPage />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
