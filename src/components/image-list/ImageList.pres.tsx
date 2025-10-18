import { type FunctionComponent } from "react";
import { IImageListProps } from "./ImageList.interface";
import {
  ImageListItem,
  ImageListItemBar,
  ImageList as MUIImageList,
} from "@mui/material";
import classes from "./ImageList.module.scss";

export const ImageList: FunctionComponent<IImageListProps> = ({ itemData }) => {
  return (
    <MUIImageList cols={1} className={classes.container}>
      {itemData.map((item) => (
        <ImageListItem key={item.src} className={classes.column}>
          <img
            className={classes.image}
            src={item.src}
            alt={item.introduce}
            loading="lazy"
          />
          {item.introduce ? (
            <ImageListItemBar
              className={classes.introduce}
              position="below"
              title={item.introduce}
            />
          ) : null}
        </ImageListItem>
      ))}
    </MUIImageList>
  );
};
