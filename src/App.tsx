import "./App.css";
import { useEffect, useRef } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from "./layout/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Previne execução múltipla do useEffect (StrictMode)
    if (scriptLoadedRef.current) {
      return;
    }

    // Verifica se o script já existe no DOM
    const existingScript = document.querySelector(
      'script[src="https://aria-labs-production.up.railway.app/widget.js"]'
    );

    if (existingScript) {
      scriptLoadedRef.current = true;
      return;
    }

    // Marca como carregado antes de adicionar
    scriptLoadedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://aria-labs-production.up.railway.app/widget.js';
    script.setAttribute('data-widget-id', 'prod-test-widget');
    script.setAttribute('data-api-url', 'https://aria-labs-production.up.railway.app');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Não remover o script no cleanup para evitar re-injeção
      // scriptLoadedRef permanece true para prevenir recarregamento
    };
  }, []);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
