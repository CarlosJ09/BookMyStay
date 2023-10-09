import React, { useEffect, createContext, useState, useContext } from "react";
// Crear un contexto
const UserContext = createContext({});

// Crear un proveedor del contexto
export function UserProvider({ children }: { children: React.ReactNode }) {

/*   const fetchData = async () => {
    const userData = await currentUser();
  };
  fetchData(); */

  return <UserContext.Provider value={1}>{children}</UserContext.Provider>;
}

// Función personalizada para acceder al contexto
export function useUser() {
  return useContext(UserContext);
}
