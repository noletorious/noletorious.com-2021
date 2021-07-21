import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactPlayer from "react-player";

const ResponsivePlayer = ({ url }) => {
  return (
    <ReactPlayer
      width={"100%"}
      height={"100%"}
      url={url}
      volume={1}
      controls
      muted
      playing
      loop
    />
  );
};

export default ResponsivePlayer;
