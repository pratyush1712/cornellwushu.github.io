import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/material";
import {
  bgColorPrimary,
  bgColorPrimaryNoBlur,
  bgColorSecondary,
  bgColorSecondaryNoBlur,
  fontColorPrimary,
  fontPrimary,
} from "../styles/ColorsFonts";
import Email from "../components/Email";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vartical-tabpanel-${index}`,
  };
}

function Admin(props) {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container justifyContent={"center"} sx={{ mt: 3 }}>
      <Typography
        variant="h3"
        fontFamily={"New Rock"}
        color={fontColorPrimary}
        align={"center"}
        mb={3}
      >
        Internal Management
      </Typography>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          textDecorationColor: fontColorPrimary,
        }}
      >
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{ color: fontColorPrimary }}
          TabIndicatorProps={{ style: { background: fontColorPrimary } }}
          inkBarStyle={{ background: fontColorPrimary }}
        >
          <Tab
            label={
              <span
                style={{
                  "& .MuiTab-root.Mui-selected": {
                    color: "red",
                  },
                }}
              >
                ListServ
              </span>
            }
            {...a11yProps(0)}
            sx={{ color: fontColorPrimary }}
          />
          <Tab
            label="Manage Members"
            {...a11yProps(1)}
            sx={{ color: fontColorPrimary }}
          />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <Email />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        Item Two
      </TabPanel>
    </Container>
  );
}

export default Admin;
