import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServicesInterface } from "./interfaces/IService";
import { CreatePayment, GetServices } from "./services/https";

const Products = () => {
  const [genders, setGenders] = useState<ServicesInterface[]>([]);
  const history = useNavigate();
  const [selectedGenderID, setSelectedGenderID] = useState<number | null>(null);

  const handleBuy = (id: number | null) => {
    if (id !== null) {
      // กำหนด selectedGenderID และเปลี่ยนเส้นทางเมื่อคลิก "Buy now"
      setSelectedGenderID(id);
      history(`/Card`);
    }
  };

  const getGendet = async () => {
    let res = await GetServices();
    if (res) {
      setGenders(res);
    }
  };

  useEffect(() => {
    getGendet();
  }, []);

  return (
    <div>
      <h2>Buy Products Here</h2>
      {genders?.map((gender, i) => {
        return (
          <div key={gender.ID}>
            <h3>{gender?.Name}</h3>
            <h3>
              <strong>{gender?.Amount}บาท</strong>
            </h3>
            <br />
            <button
                onClick={() => {
                  if (gender?.ID !== undefined) {
                    handleBuy(gender.ID);
                  }
                }}
              >Buy now</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
