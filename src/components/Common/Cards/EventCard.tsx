import { HomeIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

// Type declaration: info for the card
interface Event {
  image: string;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  website: string;
}
/**
 * 
 * @param Event - Object with info to be displayed
 * @returns - A rendered card with the info
 */
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="w-[24rem] overflow-hidden rounded-lg bg-white shadow-md lg:w-[36rem]">
      {/* Image: (100% w and h) */}
      <img src={event.image} alt={event.name} className="w-full object-cover" />
      {/* Content: (it covers the image) */}
      <div className="p-6">
        {/* name */}
        <h2 className="mb-2 text-xl font-semibold">{event.name}</h2>

        {/* description */}
        <p className="mb-4 text-gray-600">{event.description}</p>

        {/* address */}
        <div className="mb-2 flex items-center">
          <HomeIcon className="h-5 w-5" />
          <p className="text-gray-700">{event.address}</p>
        </div>

        {/* phone number */}
        <div className="mb-2 flex items-center">
          <PhoneIcon className="h-5 w-5" />
          <p className="text-gray-700">{event.phone_number}</p>
        </div>

        {/* website */}
        <div className="mb-2 flex items-center">
          <GlobeAltIcon className="h-5 w-5" />
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
