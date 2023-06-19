export const authenticate = (response, next) => {
    if (typeof window !== "undefined" && response && response.data) {
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      sessionStorage.setItem("username", JSON.stringify(response.data.username));
    }
    
    if (typeof next === "function") {
      next();
    }
  };
  
  export const logout = (next) => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
    }
    
    if (typeof next === "function") {
      next();
    }
  };
  
  