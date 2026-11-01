import { ProfileImageContainer } from "@/components/helper";

import profilePhoto1 from "@/assets/images/profilePhoto_1_2023.jpg";

export const UnFlippedImage = () => (
  <ProfileImageContainer
    alt={"A profile picture for Adrian Pearman"}
    image={profilePhoto1}
  />
);
