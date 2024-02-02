import axios from "axios";
import { Button, Card, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/API_URL";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [phones, setPhones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/phones`)
      .then((res) => {
        setTimeout(() => {
          setPhones(res.data);
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Spinner
            className="my-auto self-center"
            aria-label="Center-aligned spinner example"
            size="xl"
          />
        </div>
      ) : (
        <div className="container flex flex-col items-center mx-auto w-[70vw]">
          <h1 className="text-9xl mt-5 mb-10">The Phone Cave</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {phones.map((phone) => (
              <Card className="max-w-sm h-full" key={phone.id}>
                <img
                  className="object-cover w-full h-60"
                  src={`./src/assets/images/${phone.imageFileName}`}
                  alt={phone.name}
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {phone.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  ${phone.price}
                </p>
                <Button onClick={() => navigate(`/phones/${phone.id}`)}>
                  Details
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;