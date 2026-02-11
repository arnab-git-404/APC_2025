"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AdminAuthContext = createContext<any>(null);

export const AdminAuthProvider = ({ children }: any) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/me")
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setAdmin(data);
        setLoading(false);
      });
  }, []);

  function logout() {
    fetch("/api/admin/logout", { method: "POST" }).then(() => {
      setAdmin(null);
    });
  }

  return (
    <AdminAuthContext.Provider value={{ admin, loading, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
