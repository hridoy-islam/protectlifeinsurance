import { Icon } from "@iconify/react/dist/iconify.js";

interface ServiceTypesProps {
  data: {
    title: string;
    icon: string;
  }[];
}

export default function ServiceTypes({ data }: ServiceTypesProps) {
  return (
    <div className="bg-white my-10 ">
      <div className="shadow-2xl container mx-auto text-center px-0 py-0 border-none">
        <div className="flex gap-0 justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="px-3 py-8 w-1/6 space-y-3 hover:bg-gray"
            >
              <Icon
                icon={item?.icon}
                width={40}
                height={40}
                className="text-primary mx-auto"
              />
              <p className="text-lg font-bold">{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
