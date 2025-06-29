import React from "react";
import { HomeInfo } from "../components/HomeInfo";
import { ProviderAuthorization, PingAuthorization } from "../Ping/components";

const HomePage = () => {

  const handleOnChange = ({ code }: {code: string}) => {
    alert('Tu código de autorización es: ' + code);
  }

  return (
    <ProviderAuthorization>
      <div className="home">
        <HomeInfo />
        <PingAuthorization onChange={handleOnChange} className="home-2 mt-2" />
    </div>
    </ProviderAuthorization>
    
  );
};

export default HomePage;
