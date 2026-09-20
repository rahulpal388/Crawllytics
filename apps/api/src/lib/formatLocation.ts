import { LocationType } from "@repo/db/types/logActivitySchema.Types";

export function formatLocation(location: LocationType): string | null {
  if (!location) {
    return null;
  }

  return [location.city, location.region, location.country].filter(Boolean).join(", ");
}
