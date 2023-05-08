import { createContext, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";

const TokenContext = createContext();

const TokenContextProvider = (props) => {
  //cookies
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 8); // set expiration date to 8 days from now
  const [cookie, setCookie] = useCookies(["username"]);

  const [tokenData, setTokenData] = useState({ username: "", accessToken: {} });
  
  const handleAccessToken = (data) => {
    const { username, accessToken } = data;
    setCookie("username", username, { path: "/", expires });
    setTokenData({
      username: username,
      accessToken: {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      },
    });
  };

  return (
    <TokenContext.Provider
      value={{ tokenData, setTokenData, handleAccessToken }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenContextProvider };
