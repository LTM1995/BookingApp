import {transformToArray} from "./firebase-utils"
import { useState, useEffect } from "react";

const urlB = "https://bookingapp-6759a-default-rtdb.firebaseio.com/booking.json"
const urlR = "https://bookingapp-6759a-default-rtdb.firebaseio.com/rooms.json"


export default function MainContent({ rooms, setRooms }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(urlR);
      if (response.status == 200) {
        // Vi får body ud af det http response
        const body = await response.json();
        // Vi laver det mærkelige firebase object om til et array.
        const asArray = transformToArray(body);
        setRooms(asArray);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getData();
  }, []);}

