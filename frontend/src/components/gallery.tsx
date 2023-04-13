import { Grid, GridItem, Img } from "@chakra-ui/react";
type GalleryType = {
  imgUrlList: string[];
};
const Gallery = (props: GalleryType) => {
  const { imgUrlList } = props;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {imgUrlList.map((url) => (
        <GridItem>
          <Img src={url} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default Gallery;
