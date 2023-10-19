import { type FC, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from 'app/App';

const Root: FC = (): JSX.Element => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

const rootDiv = document.getElementById('root') as HTMLElement;
const router = createBrowserRouter([{ path: '*', Component: App }]);

createRoot(rootDiv).render(<Root />);
