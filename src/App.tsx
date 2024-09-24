import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import IndexPage from '@/pages/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
]);

function App() {
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
