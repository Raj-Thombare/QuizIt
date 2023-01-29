import { CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress style={{ margin: 100 }} size={50} thickness={2} />
    </div>
  );
};

export default LoadingSpinner;
