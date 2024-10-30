import { styles } from "../helper";

type SimplePageProps = {
  img: string;
  title: string;
  description: string;
  alignDirection: string;
  placementDesc: string;
};

const SimplePage = ({
  img,
  title,
  description,
  alignDirection,
  placementDesc,
}: SimplePageProps) => {
  return (
    <div className={`${alignDirection} py-12`}>
      <div className="relative">
        <h1 className={`${styles.heading4} mb-4`}>{title}</h1>

        <img
          src={img}
          alt="image"
          className="w-[600px]"
        />
        <div
          className={`md:w-[400px] md:absolute -bottom-[80px] ${placementDesc} bg-textColor p-4`}
        >
          <p className="text-backgroundColor text-sm text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
