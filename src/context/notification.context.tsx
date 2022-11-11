import React from "react";
import { AlertColor } from "@mui/material";

import { Notification } from "../components";

type ContextProps = {
  getError: (message: string) => void;
  getSuccess: (message: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    undefined
  );

  const getError = (message: string) => {
    setSeverity("error");
    setOpen(true);
    setMessage(message);
  };

  const getSuccess = (message: string) => {
    setSeverity("success");
    setOpen(true);
    setMessage(message);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const value = { getError, getSuccess };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        open={open}
        message={message}
        severity={severity}
        handleClose={handleClose}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error("No existe contexto");
  return context;
};
