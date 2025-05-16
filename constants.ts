export interface RoomFeature {
  nameKey: string;
  icon: string;
}

export interface RoomType {
  id: string;
  nameKey: string;
  descriptionKey: string;
  priceKey: string;
  capacityKey: string;
  image: string;
  images: string[];
  features: RoomFeature[];
}

export const ROOMS_DATA: RoomType[] = [
  {
    id: "standard",
    nameKey: "rooms.standard.name",
    descriptionKey: "rooms.standard.description",
    priceKey: "rooms.standard.price",
    capacityKey: "rooms.standard.capacity",
    image: "/rooms/room-standard-01.jpg",
    images: [
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.doubleBed", icon: "bed" },
      { nameKey: "rooms.features.privateBathroom", icon: "bath" },
      { nameKey: "rooms.features.flatScreenTV", icon: "tv" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
    ],
  },
  {
    id: "family",
    nameKey: "rooms.family.name",
    descriptionKey: "rooms.family.description",
    priceKey: "rooms.family.price",
    capacityKey: "rooms.family.capacity",
    image: "/rooms/room-family-01.jpg",
    images: [
      "/rooms/room-family-01.jpg",
      "/rooms/room-family-02.jpg",
      "/rooms/room-family-03.jpg",
    ],
    features: [
      { nameKey: "rooms.features.familyBeds", icon: "bed" },
      { nameKey: "rooms.features.largeBathroom", icon: "bath" },
      { nameKey: "rooms.features.fridgeMicrowave", icon: "fridge" },
      { nameKey: "rooms.features.loungeArea", icon: "lounge" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
    ],
  },
  {
    id: "apartment",
    nameKey: "rooms.apartment.name",
    descriptionKey: "rooms.apartment.description",
    priceKey: "rooms.apartment.price",
    capacityKey: "rooms.apartment.capacity",
    image: "/rooms/appart-01.jpg",
    images: [
      "/rooms/appart-01.jpg",
      "/rooms/appart-02.jpg",
      "/rooms/appart-03.jpg",
      "/rooms/appart-04.jpg",
      "/rooms/appart-05.jpg",
    ],
    features: [
      { nameKey: "rooms.features.kingSizeBed", icon: "bed" },
      { nameKey: "rooms.features.sofaBed", icon: "sofa" },
      { nameKey: "rooms.features.kitchenette", icon: "kitchen" },
      { nameKey: "rooms.features.diningArea", icon: "dining" },
      { nameKey: "rooms.features.luxuryBathroom", icon: "bath" },
      { nameKey: "rooms.features.balcony", icon: "balcony" },
      { nameKey: "rooms.features.smartTV", icon: "audio" },
      { nameKey: "rooms.features.coffeeMachine", icon: "coffee" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
    ],
  },
];

export interface Specialty {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  priceKey?: string;
}

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "polish",
    nameKey: "gastro.specialties.polish.name",
    descriptionKey: "gastro.specialties.polish.description",
    image: "/restaurant/rest-07.jpg",
    tags: ["gastro.tags.traditional", "gastro.tags.polish", "gastro.tags.local"],
    priceKey: "gastro.specialties.polish.price"
  },
  {
    id: "seasonal",
    nameKey: "gastro.specialties.seasonal.name",
    descriptionKey: "gastro.specialties.seasonal.description",
    image: "/restaurant/rest-08.jpg",
    tags: ["gastro.tags.seasonal", "gastro.tags.fresh", "gastro.tags.changing"],
    priceKey: "gastro.specialties.seasonal.price"
  },
  {
    id: "desserts",
    nameKey: "gastro.specialties.desserts.name",
    descriptionKey: "gastro.specialties.desserts.description",
    image: "/restaurant/rest-12.jpg",
    tags: ["gastro.tags.sweet", "gastro.tags.homemade", "gastro.tags.artistic"],
    priceKey: "gastro.specialties.desserts.price"
  },
  {
    id: "kids",
    nameKey: "gastro.specialties.kids.name",
    descriptionKey: "gastro.specialties.kids.description",
    image: "/restaurant/rest-11.jpg",
    tags: ["gastro.tags.kids", "gastro.tags.fun", "gastro.tags.healthy"],
    priceKey: "gastro.specialties.kids.price"
  }
];

// SPA interfaces & data
export interface TreatmentCategory {
  id: string;
  nameKey: string;
  descriptionKey: string;
  priceRangeKey: string;
  durationKey: string;
}

export interface SpaService {
  id: string;
  nameKey: string;
  descriptionKey: string;
  imageKey: string;
  priceKey: string;
  durationKey: string;
}

export interface SpaInfo {
  openingHours: {
    spa: {
      weekdaysKey: string;
      weekendsKey: string;
    };
    saltRoom: {
      weekdaysKey: string;
      weekendsKey: string;
    };
    manicure: {
      weekdaysKey: string;
      weekendsKey: string;
    };
  };
}

export const SPA_TREATMENTS: TreatmentCategory[] = [
  {
    id: "massage",
    nameKey: "spa.treatments.massage.name",
    descriptionKey: "spa.treatments.massage.description",
    priceRangeKey: "spa.treatments.massage.priceRange",
    durationKey: "spa.treatments.massage.duration"
  },
  {
    id: "face",
    nameKey: "spa.treatments.face.name",
    descriptionKey: "spa.treatments.face.description",
    priceRangeKey: "spa.treatments.face.priceRange",
    durationKey: "spa.treatments.face.duration"
  },
  {
    id: "rituals",
    nameKey: "spa.treatments.rituals.name",
    descriptionKey: "spa.treatments.rituals.description",
    priceRangeKey: "spa.treatments.rituals.priceRange",
    durationKey: "spa.treatments.rituals.duration"
  }
];

export const SPA_FEATURED_SERVICES: SpaService[] = [
  {
    id: "hotStones",
    nameKey: "spa.services.hotStones.name",
    descriptionKey: "spa.services.hotStones.description",
    imageKey: "/spa/spa-09.jpg",
    priceKey: "spa.services.hotStones.price",
    durationKey: "spa.services.hotStones.duration"
  },
  {
    id: "rejuvenation",
    nameKey: "spa.services.rejuvenation.name",
    descriptionKey: "spa.services.rejuvenation.description",
    imageKey: "/spa/spa-05.jpg",
    priceKey: "spa.services.rejuvenation.price",
    durationKey: "spa.services.rejuvenation.duration"
  },
  {
    id: "chocolate",
    nameKey: "spa.services.chocolate.name",
    descriptionKey: "spa.services.chocolate.description",
    imageKey: "/spa/spa-2.png",
    priceKey: "spa.services.chocolate.price",
    durationKey: "spa.services.chocolate.duration"
  }
];

export const SPA_INFO: SpaInfo = {
  openingHours: {
    spa: {
      weekdaysKey: "spa.hours.spa.weekdays",
      weekendsKey: "spa.hours.spa.weekends"
    },
    saltRoom: {
      weekdaysKey: "spa.hours.saltRoom.weekdays",
      weekendsKey: "spa.hours.saltRoom.weekends"
    },
    manicure: {
      weekdaysKey: "spa.hours.manicure.weekdays",
      weekendsKey: "spa.hours.manicure.weekends"
    }
  }
};

// Events interfaces & data
export interface VenueCapacity {
  nameKey: string;
  capacity: number;
  tables: number;
  sizeKey: string;
  featuresKeys: string[];
  image: string;
}

export interface WeddingPackage {
  nameKey: string;
  descriptionKey: string;
  priceKey: string;
}

export interface AdditionalService {
  nameKey: string;
}

export interface GalleryImage {
  src: string;
  altKey: string;
  titleKey: string;
}

export const VENUES_DATA: Record<string, VenueCapacity> = {
  ballroom: {
    nameKey: "events.venues.ballroom.name",
    capacity: 200,
    tables: 20,
    sizeKey: "events.venues.ballroom.size",
    featuresKeys: [
      "events.venues.ballroom.features.danceFloor",
      "events.venues.ballroom.features.stage",
      "events.venues.ballroom.features.soundSystem",
      "events.venues.ballroom.features.airConditioning"
    ],
    image: "/wedding/wed-room-01.jpg"
  },
  garden: {
    nameKey: "events.venues.garden.name",
    capacity: 150,
    tables: 15,
    sizeKey: "events.venues.garden.size",
    featuresKeys: [
      "events.venues.garden.features.gazebo",
      "events.venues.garden.features.fountain",
      "events.venues.garden.features.decorativeLighting",
      "events.venues.garden.features.ceremonySpace"
    ],
    image: "/wedding/wed-garden-01.jpg"
  },
  restaurant: {
    nameKey: "events.venues.restaurant.name",
    capacity: 80,
    tables: 10,
    sizeKey: "events.venues.restaurant.size",
    featuresKeys: [
      "events.venues.restaurant.features.riverView",
      "events.venues.restaurant.features.bar",
      "events.venues.restaurant.features.cozyAtmosphere",
      "events.venues.restaurant.features.terrace"
    ],
    image: "/wedding/restaurant-event.jpg"
  }
};

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    nameKey: "events.packages.classic.name",
    descriptionKey: "events.packages.classic.description",
    priceKey: "events.packages.classic.price"
  },
  {
    nameKey: "events.packages.premium.name",
    descriptionKey: "events.packages.premium.description",
    priceKey: "events.packages.premium.price"
  },
  {
    nameKey: "events.packages.luxury.name",
    descriptionKey: "events.packages.luxury.description",
    priceKey: "events.packages.luxury.price"
  }
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  { nameKey: "events.services.music" },
  { nameKey: "events.services.photo" },
  { nameKey: "events.services.flowers" },
  { nameKey: "events.services.kids" },
  { nameKey: "events.services.fireworks" }
];

export const WEDDING_GALLERY: GalleryImage[] = [
  {
    src: "/wedding/wed-room-01.jpg",
    altKey: "events.gallery.ballroom.alt",
    titleKey: "events.gallery.ballroom.title"
  },
  {
    src: "/wedding/wed-room-02.jpg",
    altKey: "events.gallery.gardenCeremony.alt",
    titleKey: "events.gallery.gardenCeremony.title"
  },
  {
    src: "/wedding/wed-room-03.jpg",
    altKey: "events.gallery.tableDecor.alt",
    titleKey: "events.gallery.tableDecor.title"
  },
  {
    src: "/wedding/wed-room-04.jpg",
    altKey: "events.gallery.eveningParty.alt",
    titleKey: "events.gallery.eveningParty.title"
  },
  {
    src: "/wedding/wed-room-05.jpg",
    altKey: "events.gallery.buffet.alt",
    titleKey: "events.gallery.buffet.title"
  },
  {
    src: "/wedding/food-03.jpg",
    altKey: "events.gallery.dessertTable.alt",
    titleKey: "events.gallery.dessertTable.title"
  }
];

// Business interfaces & data
export interface ConferenceRoom {
  id: string;
  nameKey: string;
  sizeKey: string;
  capacity: {
    theater: number;
    classroom: number;
    boardroom: number;
    banquet: number;
    ushape: number;
  };
  featuresKeys: string[];
  descriptionKey: string;
  image: string;
}

export interface RoomArrangement {
  type: string;
  iconKey: string;
  descriptionKey: string;
}

export interface BusinessPackage {
  nameKey: string;
  descriptionKey: string;
  priceKey: string;
}

export interface RoomRental {
  roomId: string;
  priceKey: string;
}

export const CONFERENCE_ROOMS: ConferenceRoom[] = [
  {
    id: "grand",
    nameKey: "business.rooms.grand.name",
    sizeKey: "business.rooms.grand.size",
    capacity: {
      theater: 540,
      classroom: 400,
      boardroom: 100,
      banquet: 500,
      ushape: 0,
    },
    featuresKeys: [
      "business.rooms.grand.features.audioVisual",
      "business.rooms.grand.features.wifi",
      "business.rooms.grand.features.screens",
      "business.rooms.grand.features.soundSystem",
      "business.rooms.grand.features.divisible",
      "business.rooms.grand.features.climate",
      "business.rooms.grand.features.lighting",
      "business.rooms.grand.features.accessible",
      "business.rooms.grand.features.terrace",
      "business.rooms.grand.features.reception"
    ],
    descriptionKey: "business.rooms.grand.description",
    image: "/conference/conf-01.webp",
  },
  {
    id: "executive",
    nameKey: "business.rooms.executive.name",
    sizeKey: "business.rooms.executive.size",
    capacity: {
      theater: 100,
      classroom: 60,
      boardroom: 40,
      banquet: 80,
      ushape: 35,
    },
    featuresKeys: [
      "business.rooms.executive.features.touchScreen",
      "business.rooms.executive.features.wifi",
      "business.rooms.executive.features.videoConference",
      "business.rooms.executive.features.soundSystem",
      "business.rooms.executive.features.climate",
      "business.rooms.executive.features.lighting",
      "business.rooms.executive.features.acoustic",
      "business.rooms.executive.features.chairs"
    ],
    descriptionKey: "business.rooms.executive.description",
    image: "/conference/conf-02.webp",
  },
  {
    id: "business",
    nameKey: "business.rooms.business.name",
    sizeKey: "business.rooms.business.size",
    capacity: {
      theater: 70,
      classroom: 40,
      boardroom: 30,
      banquet: 50,
      ushape: 25,
    },
    featuresKeys: [
      "business.rooms.business.features.screen",
      "business.rooms.business.features.wifi",
      "business.rooms.business.features.videoConference",
      "business.rooms.business.features.soundSystem",
      "business.rooms.business.features.climate",
      "business.rooms.business.features.naturalLight",
      "business.rooms.business.features.terrace"
    ],
    descriptionKey: "business.rooms.business.description",
    image: "/conference/conf-03.webp",
  },
  {
    id: "vip",
    nameKey: "business.rooms.vip.name",
    sizeKey: "business.rooms.vip.size",
    capacity: {
      theater: 15,
      classroom: 12,
      boardroom: 12,
      banquet: 12,
      ushape: 10,
    },
    featuresKeys: [
      "business.rooms.vip.features.touchScreen",
      "business.rooms.vip.features.wifi",
      "business.rooms.vip.features.videoConference",
      "business.rooms.vip.features.premium",
      "business.rooms.vip.features.privacy",
      "business.rooms.vip.features.catering",
      "business.rooms.vip.features.climate"
    ],
    descriptionKey: "business.rooms.vip.description",
    image: "/conference/conf-02.webp",
  },
];

export const ROOM_ARRANGEMENTS: RoomArrangement[] = [
  {
    type: "theater",
    iconKey: "business.arrangements.icons.theater",
    descriptionKey: "business.arrangements.theater.description",
  },
  {
    type: "classroom",
    iconKey: "business.arrangements.icons.classroom",
    descriptionKey: "business.arrangements.classroom.description",
  },
  {
    type: "boardroom",
    iconKey: "business.arrangements.icons.boardroom",
    descriptionKey: "business.arrangements.boardroom.description",
  },
  {
    type: "banquet",
    iconKey: "business.arrangements.icons.banquet",
    descriptionKey: "business.arrangements.banquet.description",
  },
  {
    type: "ushape",
    iconKey: "business.arrangements.icons.ushape",
    descriptionKey: "business.arrangements.ushape.description",
  }
];

export const BUSINESS_PACKAGES: BusinessPackage[] = [
  {
    nameKey: "business.packages.basic.name",
    descriptionKey: "business.packages.basic.description",
    priceKey: "business.packages.basic.price"
  },
  {
    nameKey: "business.packages.standard.name",
    descriptionKey: "business.packages.standard.description",
    priceKey: "business.packages.standard.price"
  },
  {
    nameKey: "business.packages.premium.name",
    descriptionKey: "business.packages.premium.description",
    priceKey: "business.packages.premium.price"
  }
];

export const ROOM_RENTALS: RoomRental[] = [
  {
    roomId: "grand",
    priceKey: "business.rentals.grand.price"
  },
  {
    roomId: "executive",
    priceKey: "business.rentals.executive.price"
  },
  {
    roomId: "business",
    priceKey: "business.rentals.business.price"
  },
  {
    roomId: "vip",
    priceKey: "business.rentals.vip.price"
  }
];