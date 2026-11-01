import profileImage from "@/assets/images/profile_photo_1.png";
import profileImage2 from "@/assets/images/profile_photo_2.png";

export const ProfileFlipCard = () => (
  <div className="group h-full perspective-[1000px]">
    <div className="relative h-full transition-transform duration-600 transform-3d group-hover:rotate-y-180">
      <img
        src={profileImage}
        alt="A profile picture for Adrian Pearman"
        className="absolute inset-0 size-full rounded-2xl object-cover backface-hidden"
      />
      <img
        src={profileImage2}
        alt="A cooler profile picture for Adrian Pearman"
        className="absolute inset-0 size-full rotate-y-180 rounded-2xl object-cover backface-hidden"
      />
    </div>
  </div>
);
