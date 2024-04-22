import { HomeIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

// type declaration
interface Event {
  image: string;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  website: string;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden lg:w-[36rem] w-[24rem]">
      <img src={event.image} alt={event.name} className="w-full object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex items-center mb-2">
          <HomeIcon className="w-5 h-5" />
          <p className="text-gray-700">{event.address}</p>
        </div>
        <div className="flex items-center mb-2">
          <PhoneIcon className="w-5 h-5" />
          <p className="text-gray-700">{event.phone_number}</p>
        </div>
        <div className="flex items-center mb-2">
          <GlobeAltIcon className="w-5 h-5" />
          <a
            href={event.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {event.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
