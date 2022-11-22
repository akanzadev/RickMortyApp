import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import "./App.css";
import { NotificationProvider } from "./context/notification.context";
import { Suspense } from "react";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
