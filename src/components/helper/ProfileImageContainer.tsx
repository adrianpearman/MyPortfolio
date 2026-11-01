export type TProfileImageContainerProps = {
  alt: string;
  image: string;
};

export const ProfileImageContainer = ({
  alt,
  image,
}: TProfileImageContainerProps) => (
  <div className="rounded-2xl">
    <img className="rounded-[inherit]" src={image} alt={alt} />
  </div>
);
