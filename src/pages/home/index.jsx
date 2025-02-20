import React from "react";
import Header from "../../component/navigation/header";
import Footer from "../../component/navigation/footer";
import RoutePage from "../../config/routes/routes";

const Index = () => {
  return (
    <div>
      <Header />
      <RoutePage />
      <Footer />
    </div>
  );
};

export default Index;
