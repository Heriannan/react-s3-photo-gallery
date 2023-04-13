import { VStack } from "@chakra-ui/react";
import UploadButton from "../components/uploadButton";
import Profile from "../components/profile";
import Gallery from "../components/gallery";
const tempGallery = [
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
  "https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png",
];
const home = () => {
  return (
    <VStack p="28" backgroundColor={"whitesmoke"} minH={"100vh"}>
      <Profile />
      <UploadButton />
      <Gallery imgUrlList={tempGallery} />
    </VStack>
  );
};
export default home;
