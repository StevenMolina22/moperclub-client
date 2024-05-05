import ContentDarkWrapper from "../../components/Features/ContentDarkWrapper";
import { VerticalCardsGallery } from "../../components/Features/VerticalCardsGallery";

import useEvents from "../../hooks/useEvents";

export default function Events() {
  const endpoint = '/events/api/events/';
  const { events } = useEvents(endpoint);

  return (
    <ContentDarkWrapper
      title="Eventos para ti"
      subtitle="No te fallan"
      displayedComponent={<VerticalCardsGallery cardsContent={events} />}
    />
  );
}
