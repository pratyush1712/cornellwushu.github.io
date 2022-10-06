import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";
import {
  bgColorSecondary,
  fontColorPrimary,
  fontPrimary,
} from "../styles/ColorsFonts";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

function About() {
  const formsData = [
    {
      id: "CLF",
      title: "Changquan (Long Fist)",
      description:
        "Changquan, or Longfist, is a northern style of Wushu/Kung-Fu.  It requires the body to be open and extended, with many reaching stances, punches, jumping kicks, and 360° sweeps.  Changquan is the most common and popular form of Contemporary Wushu.",
      url: "https://www.youtube-nocookie.com/embed/hABx8NqETz0",
    },
    {
      id: "NSF",
      title: "Nanquan (Southern Fist)",
      description:
        "Nanquan is a style distinguished by its speed, power and shouts. Fundamental strikes include the consecutive downward strikes of each arm (gua gai quan), swinging uppercuts (pao quan) and the versatile bridge hand. Many styles form the root of modern Nanquan, notably Hung Ga, Choy Lee Fut and the traditional animal styles of the Southern Shaolin temple.",
      url: "https://www.youtube-nocookie.com/embed/iCkKbA3WXAg",
    },
    {
      id: "TJQ",
      title: "Taijiquan",
      description:
        "Taiji (Tai Chi) is a form of internal Chinese martial arts focused on the circulation of qi (breath) throughout the body. The qi, originating in the dan tian (diaphragm), is mobilized through the repetition of specified forms harmonizing self defense, meditation, and health improvement. There are five major styles oftaiji: Chen, Yang, Sun, Wu, and Wu/Hao. Although the styles vary in speed and execution, they all share a common philosophy. Taiji has been depicted in major films like Crouching Tiger, Hidden Dragon and Ip Man.",
      url: "https://www.youtube-nocookie.com/embed/D2W605JFCTU",
    },
    {
      id: "GS",
      title: "Gunshu (Staff)",
      description:
        "The staff is the most basic weapon in Chinese martial arts, often being called the “Grandfather.”  The entire body is made of wax wood with a thick base and a tapered tip.  Despite it’s simplicity in design, the staff’s power rivals that of other weapons with its massive circular sweeping strikes, quick twirls, and downward ground smashes.",
      url: "https://www.youtube-nocookie.com/embed/yXmosFYT_uE",
    },
    {
      id: "DBS",
      title: "Daoshu (Broadsword)",
      description:
        "The Broadsword, known in Chinese as the 刀 (dāo), is considered “The General of All Weapons” in Wushu. Shaped like a sabre, the broadsword has a curved blade and a dull back. This results in wielding techniques characterized by wrapping the sword around the neck and back. The sword has a very fast and powerful style, which allows the user to give the impression of great strength.",
      url: "https://www.youtube-nocookie.com/embed/ACSxPTgmPBA",
    },
    {
      id: "QS",
      title: "Qiangshu (Spear)",
      description:
        "Once used by generals and soldiers, the spear is reckoned as the “King” of the four basic weapons.  A modern spear user will employ many powerful whirling and whipping strikes that utilizes the spear’s great flexibility, as well as more direct stabs and blocks.  The body is long like the staff, but a pointed blade and horse hair tassel is attached at the tip.",
      url: "https://www.youtube-nocookie.com/embed/Y5Mwkot7S7Y",
    },
    {
      id: "JSS",
      title: "Jianshu (Straightsword)",
      description:
        "Widely known as the “Gentleman” of Chinese weapons, the double-edged straightsword is one of the most difficult weapons to master.  It excels in complex movements that emphasize elegance, swiftness and fluidity with a range of basic techniques that includes slices, chops, thrusts, points, clouds and flowers.",
      url: "https://www.youtube-nocookie.com/embed/Vtw7MeSxn_o",
    },
  ];
  return (
    <Container justifycontent="center" sx={{ mb: 3 }}>
      <Typography
        variant="h2"
        mt={2}
        align="center"
        fontFamily={fontPrimary}
        color={fontColorPrimary}
        sx={{ mb: 2 }}
      >
        About Wushu
      </Typography>
      <Typography variant="body1" sx={{ px: { md: 8, xs: 1 }, mb: 2 }}>
        Wushu is the Chinese name for martial arts, and in modern times it
        refers to the sport that comprises various standardized styles derived
        from traditional Chinese martial arts.
      </Typography>
      <Grid container sx={{ p: { md: 6, xs: 1 } }} justifyContent={"center"}>
        {formsData.map((form) => (
          <Grid item xs={12} md={6} px={0.5} py={1.5} key={form.title}>
            <Card elevation={2} color={bgColorSecondary}>
              <CardMedia
                component="iframe"
                width="560"
                height="315"
                src={
                  form.url +
                  "?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; 
                picture-in-picture"
                allowFullScreen
              ></CardMedia>
              <CardContent>
                <TreeView
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                >
                  <TreeItem
                    nodeId="1"
                    label={form.title}
                    component={Typography}
                    variant="subtitle1"
                  >
                    <TreeItem nodeId="2" label={form.description} />
                  </TreeItem>
                </TreeView>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;
