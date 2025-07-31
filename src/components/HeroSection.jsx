import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import herogirlimage from "../assets/HeroSection_girl.png";
import maplogo from "../assets/heroSection_map_logo.svg";
import FlagUSA from "../assets/flag_usa.png";
import FlagIndia from "../assets/flag_india.png";
import FlagFrance from "../assets/flag_france.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "748px",
        backgroundColor: "#6f3fc8",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 10 },
        py: 6,
        boxSizing: "border-box",
        backgroundImage: `url(${maplogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-110px 5px",
        backgroundSize: "600px",
        color: "#ffffff",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Section */}
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          Powered By AI ✨
        </Typography>

        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.2 }}
        >
          Grow & Rank <br /> Your Local Business
        </Typography>

        <Typography sx={{ mb: 3, fontSize: "1rem" }}>
          Content | Reviews | Keywords & Competitors <br />
          Tracking - All in a Single Platform
        </Typography>

        <Box sx={{ position: "relative", mb: 2 }}>
          <TextField
            fullWidth
            placeholder="Search Your Google Business Profile"
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: "#ffffff",
                borderRadius: 1,
                height: "51px",
                pr: "60px",
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "54px",
              backgroundColor: "#4ADE80",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              cursor: "pointer",
            }}
          >
            <SearchIcon sx={{ color: "#ffffff" }} />
          </Box>
        </Box>

        <Typography variant="body2" sx={{ mb: 1 }}>
          or try with these
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            { flag: FlagUSA, label: "Garage in USA" },
            { flag: FlagIndia, label: "Dentist in India" },
            { flag: FlagFrance, label: "Restaurant in France" },
          ].map(({ flag, label }) => (
            <Button
              key={label}
              variant="contained"
              sx={{
                backgroundColor: "#3D189B",
                justifyContent: "flex-start",
                textTransform: "none",
                width: "100%",
                height: "51px",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1rem",
                gap: 2,
              }}
            >
              <img src={flag} alt={label} width={28} height={20} />
              {label}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Right Section: Girl Image */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={herogirlimage}
          alt="Hero Girl"
          sx={{
            width: { xs: "100%", sm: "80%", md: "500px" },
            height: "auto",
            objectFit: "contain",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
