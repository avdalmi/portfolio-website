import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { SchoolOutlined, WorkOutline } from "@mui/icons-material";
import { TimelineDot } from "@mui/lab";

export const CvItemBox = styled(Box)(({ theme }) => ({
  margin: "0.5rem",
  padding: "15px",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "5px",
  minWidth: "250px",
  //   transition: "all 0.5s ease",
  [theme.breakpoints.down("sm")]: {
    margin: "0.5rem 0",
  },
}));

export const WorkIconS = styled(WorkOutline)(({ theme }) => ({
  color: theme.palette.divider,
  stroke: theme.palette.background.default,
  strokeWidth: 1,
}));

export const SchoolIconS = styled(SchoolOutlined)(({ theme }) => ({
  color: theme.palette.divider,
  stroke: theme.palette.background.default,
  strokeWidth: 1,
}));

export const TimelineDotS = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  margin: 0,
}));
