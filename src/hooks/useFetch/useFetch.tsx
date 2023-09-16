import { useEffect, useState } from "react";
import axios from "axios";

// Generic Type -> typescript
const useFetch = ({ url, initialData }: { url: string; initialData: any }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data, "usefetch data");

        setLoading(false);
      } catch (error) {
        //handle error
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

// export const MyProvider: React.FC<{ children: ContextValue }> = ({
//   children,
// }) => {
//   const url = "https://fakestoreapi.com/products?limit=10";
//   const { daftarProduk, loading } = useFetch(url);

//   return (
//     <MyContext.Provider value={{ daftarProduk, loading }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export const useMyContext = () => {
//   return useContext(MyContext);
// };

export default useFetch;
