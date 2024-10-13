import { useState, useContext, createContext } from "react";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

// custom hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };

// ...

// import { useState, useEffect, useContext, createContext } from "react";

// const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: ""
//     });

//     useEffect(() => {
//         const data = localStorage.getItem("auth");
//         if (data) {
//             const parseData = JSON.parse(data);
//             setAuth(prevAuth => ({
//                 ...prevAuth,
//                 user: parseData.user,
//                 token: parseData.token,
//             }));
//         }
//     }, []); // Run once when the component mounts

//     // Save auth state to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem("auth", JSON.stringify(auth));
//     }, [auth]);

//     return (
//         <AuthContext.Provider value={[auth, setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // custom hooks

// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };
