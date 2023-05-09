import React, { useContext, useEffect, useRef, useState } from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import { LanguageContext } from "../../context/LanguageContext";
import CardHistory from "../../components/card/CardHistory";
import styled from "@emotion/styled";
import { historyArray } from "../../_mock/historyData";

const RechargeHistory = () => {
  //CONTEXTS
  const { currentLanguage } = useContext(LanguageContext);
  //REF
  const ref = useRef(null);
  const observer = useRef();

  //STATES
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reload, setReload] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //USEEFFECTS
  //load data on page changin
  useEffect(() => {
    setIsLoaded(false);
    // moneyServices
    //   .getRechargeHistory(tokenData[1], page, rowsPerPage, tokenData[0])
    //   .then((res) => {
    //     setData((prevData) => [...prevData, ...res.data.content]);
    //     setTotalPages(res.data.totalPages);
    //     setIsLoaded(true);
    //   })
    //   .catch((err) => console.log(err));
  }, [page]);

  // reload data on canceling request
  useEffect(() => {
    setIsLoaded(false);
    // moneyServices
    //   .getRechargeHistory(tokenData[1], 0, data.length, tokenData[0])
    //   .then((res) => {
    //     setData(res.data.content);
    //     setTotalPages(res.data.totalPages);
    //     setIsLoaded(true);
    //   })
    //   .catch((err) => console.log(err));
  }, [reload]);

  //lazy load data
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isLoaded) {
        if (totalPages > page + 1) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    }, options);

    if (observer.current) {
      observer.current.observe(document.getElementById("sentinel"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoaded]);
console.log(historyArray)
  //JSX
  const historyRecords = historyArray.map((item, index) => (
    <CardHistory
      key={index}
      requestNumber={item.transactionId}
      amount={item.total}
      applicationDate={item.transactionDate}
      approvalDate={
        item.paymentGateway === "paypal"
          ? item.transactionDate
          : item.paymentDate
      }
      status={item.state}
      paymentGateway={item.paymentGateway}
      note={item.requestNote}
      setReload={setReload}
    />
  ));
  return (
    <div>
      <PageTitle value={"rechargeHistory"} />
      {historyRecords}
      <StyledObserver id="sentinel"></StyledObserver>
    </div>
  );
};

export default RechargeHistory;

const StyledObserver = styled.div`
  border: solid 2px red;
  height: 30px;
  width: 100%;
`;
