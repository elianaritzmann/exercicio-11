import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetInstruments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/equipamentos")
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar instrumentos");
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}