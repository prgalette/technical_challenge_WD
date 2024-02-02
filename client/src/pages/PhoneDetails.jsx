import axios from "axios";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../services/API_URL";

const PhoneDetails = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/phones/${phoneId}`)
      .then((res) => {
        setTimeout(() => {
          setSelectedPhone(res.data);
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  console.log(selectedPhone);

  return (
    <div className="container w-[30rem] mx-auto text-center">
      {!loading ? (
        <div className="flex flex-col items-center justify-around h-[50rem]">
          <Button color="blue" onClick={() => navigate("/")}>Back</Button>
          <h2>{selectedPhone.name}</h2>
          <img
            className="h-96"
            src={`../src/assets/images/${selectedPhone.imageFileName}`}
          />
          <p>{selectedPhone.description}</p>
          <span>Manufactured by: {selectedPhone.manufacturer}</span>
          <span>Color: {selectedPhone.color}</span>
          <span>Processor: {selectedPhone.processor}</span>
          <span>Ram: {selectedPhone.ram}</span>
          <span>Screen Size: {selectedPhone.screen}</span>
        </div>
      ) : (
        <Spinner aria-label="Extra large spinner example" size="xl" />
      )}
    </div>
  );
};

export default PhoneDetails;