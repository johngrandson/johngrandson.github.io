import "./App.css";
import { useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} />
  )
)

function App() {
  useEffect(() => {
    // Verifica se o script já existe
    const existingScript = document.querySelector(
      'script[src="https://aria-labs-production.up.railway.app/widget.js"]'
    );

    if (existingScript) {
      return; // Script já existe, não adicionar outro
    }

    const script = document.createElement('script');
    script.src = 'https://aria-labs-production.up.railway.app/widget.js';
    script.setAttribute('data-widget-id', 'prod-test-widget');
    script.setAttribute('data-api-url', 'https://aria-labs-production.up.railway.app');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
