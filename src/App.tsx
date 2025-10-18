import { Box, ThemeProvider } from "@mui/material";
import {
  type FunctionComponent,
  type ReactNode,
  useEffect,
  useMemo,
} from "react";
import ARTICLES from "~/config/data/data.json";
import { theme } from "~/config/styles/theme";
import { Post } from "~/components/post";
import { Content } from "~/components/content";
import { ImageList } from "~/components/ImageList";
import renderEventManager from "./render-event";
import classes from "./App.module.scss";
import "./global.scss";

/* eslint-disable @typescript-eslint/no-explicit-any */
enum BlockType {
  text = "text",
  images = "images",
}

const Article: FunctionComponent<{ article: any }> = ({ article }) => {
  const renderContentBlock = (block: any, index: number): ReactNode => {
    switch (block.type) {
      case BlockType.text:
        return <Content key={index} content={block.value as string} />;
      case BlockType.images:
        return <ImageList key={index} itemData={block.value as any[]} />;
      default:
        return null;
    }
  };

  const { zoomStart, zoomMiddle, needStay, tripIcon } = article.positionConfig;

  return (
    <Post
      site={article.site}
      title={article.title}
      introduce={article.introduce}
      zoomStart={zoomStart}
      zoomMiddle={zoomMiddle}
      needStay={needStay}
      tripIcon={tripIcon}
    >
      {article.content.map(renderContentBlock)}
    </Post>
  );
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export const App: FunctionComponent = () => {
  useEffect(() => {
    renderEventManager.dispatch();
  }, []);

  const articles = useMemo(() => {
    return ARTICLES.map((article, index) => (
      <Article key={index} article={article} />
    ));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className={`${classes.text} text`}>{articles}</Box>
    </ThemeProvider>
  );
};
