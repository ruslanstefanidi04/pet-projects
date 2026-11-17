import { useState } from "react";

// minimal placeholder hook, позже свяжем с реальным API и secure storage
export function useAuth() {
  const [isAuthenticated] = useState(false);

  return {
    isAuthenticated,
  };
}

