import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const HotelCardItem = ({ h }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (h) {
      console.log("Hotel data:", h); // Log the hotel data
      GetPlacePhoto();
    }
  }, [h]);

  const GetPlacePhoto = async () => {
    const data = { textQuery: h?.name };
    try {
      const result = await GetPlaceDetails(data);
      console.log("GetPlaceDetails result:", result); // Log the result to debug
      const photoName = result.data.places[0]?.photos[0]?.name;
      if (photoName) {
        const url = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(url);
      } else {
        console.warn("No photo name found for place:", h?.name);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          h?.name +
          ", " +
          h?.address
        }
        target="_blank"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-80 h-52 rounded-md"
            src={photoUrl || "default-image-url.jpg"} // Fallback image
            alt={h?.name}
          />
          <div className="flex w-full items-center justify-between px-8 mt-2">
            <div className="font-bold">{h.name}</div>
            <div className="flex items-center">
              {h.rating}
              <CiStar />
            </div>
          </div>
          <div className=" w-full px-8 my-1 text-md">{h.address}</div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCardItem;