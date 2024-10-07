import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { IRoute } from '@/core/interface/common';
import { ROUTES } from '@/core/enum/common';

import { HomePage, LoginPage, RegisterPage, ShopPage } from '@/app/pages';

const AppRoutes: FC = () => {
  const routes: IRoute[] = [
    {
      name: 'Login',
      path: ROUTES.LOGIN,
      component: LoginPage,
    },
    {
      name: 'Register',
      path: ROUTES.REGISTER,
      component: RegisterPage,
    },
    {
      name: 'Shop',
      path: ROUTES.SHOP,
      component: ShopPage
    }
  ];

  return (
    <Routes>
      {/* <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.HOME} replace />} /> */}

      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes