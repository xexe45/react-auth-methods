import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  PingContainer,
  PingContainerTitle,
  PingContainerSubTitle,
  PingAuthMethods,
} from "./ping-authorization/components";

function App() {
  const [method, setMethod] = useState<string | null>(null);
  const handleOnChange = ({ id, name }: { id: string; name: string }) => {
    setMethod(name);
  };
  return (
    <div className="App App-header">
      <main className="main">
        {!method && (
          <PingContainer
          
            onChange={handleOnChange}
            initialValues={{ rut: "237500695" }}
          >
            {() => (
              <>
                <PingContainerTitle
                  className="ti"
                  title="Authorization Method"
                />
                <PingContainerSubTitle
                  className="subt"
                  subTitle="Please select a method to autorize a transaction."
                />
                <PingAuthMethods />
              </>
            )}
          </PingContainer>
        )}
      </main>
    </div>
  );
}

export default App;
