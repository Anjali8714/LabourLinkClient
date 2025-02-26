import React from "react";
import { MapPin, Star } from "lucide-react";

interface WorkerCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  jobTitles: string[];
  imageUrl: string;
}

const ProfileCard:React.FC<WorkerCardProps> = ({
  name,
  location,
  rating,
  jobTitles,
  imageUrl,
}) => {
  return (
    <div className="mx-auto rounded-lg border  border-gray-200 bg-[#F8F2FC] w-80 h-64  grid gap-4 p-8 shadow-[5px_6px_3px_rgb(192,192,192)] relative">
      <p className="text-sm font-semibold mb-2"> {jobTitles.join(",")} </p>
      <div className="flex items-center space-x-3 mb-3">
        <img src={imageUrl} alt={name} className="w-12 h-12 object-cover" />
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm text-gray-500 flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            {location}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex text-yellow-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(rating) ? "#facc15" : "none"}
                stroke={i < Math.floor(rating) ? "#facc15" : "#e5e7eb"}
              />
            ))}
        </div>
        <p className="text-sm font-medium">{rating} Rating</p>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-1 border border-gray-500 text-gray-800 rounded hover:bg-gray-100">
          View details
        </button>
        <button className="px-4 py-1 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600">
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
