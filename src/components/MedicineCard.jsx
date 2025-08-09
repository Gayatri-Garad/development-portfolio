import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CartContext } from "../context/CartContext";
import { autocompleteClasses } from "@mui/material";

const MedicineCard = ({ medicine }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <Card sx={{ maxWidth: 250 + 50, margin: 2 }}>
        <CardMedia
          sx={{ height: 250, width: 250 }}
          image={medicine.productImageSlug[0]}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "20px",
              fontWeight: "middimum",
              overflow: "hidden",
              whiteSpace: "wrap",
              textOverflow: "ellipsis",
              color: "#00CED1",
            }}
          >
            {medicine.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {medicine.medicineName}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ padding: 3, display: "flex", justifyContent: "space-between" }}
        >
          <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
            ₹{medicine.actualPrice}
          </Typography>
          <Button
            size="medium"
            sx={{ border: 2 }}
            onClick={() => addToCart(medicine)}
          >
            Add
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MedicineCard;
