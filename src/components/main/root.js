import React, {useState, useEffect} from 'react'
import Splash_screen from "./splash-screen";
import OnBoarding from "./on-boarding"



const Root = () => {
  const [time, setTime] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTime(false);
    }, 3000);
  }, [])
  

  return (
      <>
      {time == false ? <OnBoarding /> : <Splash_screen />}
      </>
  );
};

export default Root;
