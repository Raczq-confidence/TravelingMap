import * as React from "react";
import classes from "./Content.module.scss";
import { Typography } from "@mui/material";
import { IContentProps } from "./Content.interface";

export const Content: React.FC<IContentProps> = ({ content }) => {
  return (
    <Typography variant="body2" className={classes.content}>
      {content}
    </Typography>
  );
};
