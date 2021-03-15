import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import AccountView from './views/account/AccountView';
import CustomerListView from './views/customer/CustomerListView';
import DashboardView from './views/reports/DashboardView';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';
import ProductListView from './views/product/ProductListView';
import RegisterView from './views/auth/RegisterView';
import SettingsView from './views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'conta', element: <AccountView /> },
      { path: 'colaboradores', element: <CustomerListView /> },
      { path: '/', element: <DashboardView /> },
      { path: 'sistemas', element: <ProductListView /> },
      { path: 'configuracoes', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'registrar', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/sistemas" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
