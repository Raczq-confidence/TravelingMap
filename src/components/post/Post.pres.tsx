import { type PropsWithChildren, type FunctionComponent } from "react";
import { IPostProps } from "./Post.interface";
import { Box, Typography } from "@mui/material";
import classes from "./Post.module.scss";

export const Post: FunctionComponent<PropsWithChildren<IPostProps>> = ({
  site,
  title,
  introduce = "",
  needStay = false,
  zoomStart,
  zoomMiddle,
  tripIcon,
  children,
}) => {
  return (
    <Box
      component="section"
      className={`${classes.post} js-section`}
      data-zoom-start={zoomStart}
      data-zoom-middle={zoomMiddle}
      data-stay={needStay}
      data-icon={tripIcon}
    >
      <Box component="section">
        <Typography variant="subtitle1">{site}</Typography>
        <Typography variant="subtitle2" className={classes.title}>
          {title}
        </Typography>
      </Box>

      {introduce ? (
        <Typography variant="body1" className={classes.introduce}>
          {introduce}
        </Typography>
      ) : (
        <></>
      )}

      {children}
    </Box>
  );
};
