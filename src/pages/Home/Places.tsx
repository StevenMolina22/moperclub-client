import ContentDarkWrapper from "../../components/Features/ContentDarkWrapper";
import { VerticalCardsGallery } from "../../components/Features/VerticalCardsGallery";

import usePlaces from "../../hooks/usePlaces";

export default function Places() {
  const endpoint: string = "/places/api/places/";
  const {places} = usePlaces(endpoint);

  return (
    <ContentDarkWrapper
      title="Lugares para visitar"
      displayedComponent={<VerticalCardsGallery cardsContent={places} />}
    />
  );
}
