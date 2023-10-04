import ReUsable from "./ImageShow";

const ImageList = ({setsOfImages}) => {
  const rendered = setsOfImages.map((element) => {
    return <ReUsable images={element} />
  });
  return (
    <div className="px-6 pt-2 h-[29rem] w-11/12 mx-auto overflow-y-auto border-t-4 border-black scrollbar-hide">
      <div className="lg:columns-3 md:columns-2 sm:columns-1">
        {rendered}
      </div>
    </div>
  );
}
export default ImageList;