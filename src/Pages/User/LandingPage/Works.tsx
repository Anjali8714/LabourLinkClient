import { FC } from "react";

interface WorksCardProps {
  imageUrl: string;
  work: string;
  type: string;
  noOf: string;
}
const Works: FC<WorksCardProps> = ({ imageUrl, work, type, noOf }) => {
  return (
    <div className="w-52 h-56 bg-[#E0E0E0] rounded-2xl shadow-[10px_8px_5px_rgb(128,128,128)] p-4 relative">
      <div className="w-20 h-20 mx-auto rounded-full border-4 border-purple-500 overflow-hidden">
        <img src={imageUrl} alt={work} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-center font-bold text-lg mt-3">{work}</h2>
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 py-3">
          <span>{type}</span>
          <span>{noOf}</span>
        </div>
        <div className="bg-gray-300 w-full rounded-full mt-1">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
