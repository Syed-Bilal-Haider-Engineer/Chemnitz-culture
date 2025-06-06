import { TheatreItem } from "../type/FeatureProperties.type";

function thearterMapping (feature:TheatreItem):TheatreItem {
  const { amenity, name } = feature?.properties as any ?? {}
  return {
    ...feature,
    amenity: amenity ?? '',
    name: name ?? ''
  };
}

export default thearterMapping;