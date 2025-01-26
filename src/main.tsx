import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router";
import Router from "./routes/index.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </QueryClientProvider>
);
