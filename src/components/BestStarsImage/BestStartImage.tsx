import Image from "next/image";

const BestStartImage = ({ first15 }: any) => {
  return (
    <div>
      {first15.map((image: any, index: any) => (
        <Image key={index} src={image.owner.avatar_url} alt="profile" width={75} height={75} />
      ))}
    </div>
  );
};

export default BestStartImage;
