import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_latitude: ne.lat,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "b7094e4754msh21b14e141a8a2e8p1e896fjsn57cb139c33cb",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
