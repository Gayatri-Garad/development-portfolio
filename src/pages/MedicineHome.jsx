import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

const MedicineHome = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategorySections();
  }, []);

  function getCategorySections() {
    const URL = "http://localhost:3000/category";
    axios
      .get(URL)
      .then((resp) => {
        if (resp) {
          setCategoryList(resp.data);
        }
      })
      .catch((error) => {});
  }

  return (
    <>
      <Container sx={{ marginTop: 4 }}>
        <Box sx={{ display: "flex", marginBottom: 4 }} marginTop={4}>
          <img
            src="https://views.medibuddy.in/mb-config/IMAGE/hyper_local_delivery_meds_bangalore_1734679056118.webp"
            alt="hyper_local_delivery_meds_bangalore"
            style={{ width: "40%", height: "auto", padding: 5 }}
          />

          <img
            src="https://views.medibuddy.in/mb-config/IMAGE/otc_offers_banner_1742282275145.webp"
            alt="offers_banner"
            style={{ width: "40%", height: "auto", padding: 5 }}
          />
        </Box>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: 4 }}
        >
          Search By Category
        </Typography>

        <CategoryCard categories={categoryList}></CategoryCard>
      </Container>
    </>
  );
};

export default MedicineHome;
