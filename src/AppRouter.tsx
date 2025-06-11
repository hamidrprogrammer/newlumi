import React, {  Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottlePage from './features/BottlePage/page/BottlePage';
import ProductTabletsWebPage from './features/ProductTabletsWebPage/page/ProductTabletsWebPage';
import TabletPage from './features/TabletPage/page/TabletPage';
import HomeOldPage from './features/HomePageold/pages';
import BuyBottlePageMobile from './features/BuyBottlePageMobile/page/BuyBottlePage';
import { LoginForm } from './features/auth/components/LoginForm';
import CheckoutPage from './features/Checkout/page/CheckoutPage';
import { CheckoutReviewPage } from './features/Checkout/page/components/CheckoutReviewPage';
import { ResponsiveRoute } from './ResponsiveRoute';
import { BuyBottlePage } from './features/BuyBottlePage/BuyBottlePage';
import { ProfilePage } from './features/user/components/profile/ProfilePage';
import { AddressListPage } from './features/contactGroups/components/addresses/AddressListPage';

// const BottlePage = lazy(() => import('./features/BottlePage/page/BottlePage'));



const AppRouter: React.FC = () => {
  return (
    <Router>
      {/* <ScrollToTop />  */}
      {/* Ensures navigation scrolls to top */}
      <Suspense > {/* Fallback UI while lazy-loaded components are fetched */}
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />

          <Route path="/" element={<HomeOldPage />} />
                    <Route path="/basket" element={<CheckoutPage />} />

          <Route path="/CheckoutPageReview" element={<CheckoutReviewPage />} />
          <Route path="/tablete" element={<TabletPage />} />
                    <Route path="/login" element={<LoginForm />} />

          <Route path="/bottle" element={<BottlePage />} />
          <Route
  path="/products-bottle/:id"
  element={
    <ResponsiveRoute
      mobileComponent={<BuyBottlePageMobile />}
      desktopComponent={<BuyBottlePage />}
    />
  }
/> 
                    <Route path="/account/profile" element={<ProfilePage />} />
                    <Route path="/account/addresses" element={<AddressListPage />}/>
                    <Route path="/products" element={<ProductTabletsWebPage />} />

                

          {/* Consider adding a 404 Not Found route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;