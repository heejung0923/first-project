import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import IndexPage from '@/pages/page';
import PracticePage from './pages/practice/page';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'practice',
        element: <PracticePage />,
      },
    ],
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
