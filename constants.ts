
import { Beer, Event, FoodItem } from './types';

export const BEERS: Beer[] = [
  {
    name: "CRYO ME A RIVER",
    style: "IPA - AMERICAN",
    abv: "6.8%",
    description: "West coast IPA with strata and mosaic hops. Big notes of passion fruit, strawberry, and grapefruit.",
    imageUrl: "https://i.imgur.com/Qk7sHfq.jpeg",
  },
  {
    name: "RASPBERRY CHEESECAKE",
    style: "SOUR - FRUITED",
    abv: "6.5%",
    description: "A decadent sour ale brewed with raspberries, cheesecake, and lactose. A true dessert in a glass.",
    imageUrl: "https://i.imgur.com/gYd5v8Q.jpeg",
  },
  {
    name: "JUDGEMENT DAY: COCONUT",
    style: "IMPERIAL STOUT",
    abv: "12%",
    description: "Conditioned on house toasted coconut, and raw coconut. Big notes of fudge, and coconut.",
    imageUrl: "https://picsum.photos/seed/stout2/600/800",
  },
  {
    name: "JUDGEMENT DAY: HAZELNUT",
    style: "IMPERIAL STOUT",
    abv: "12%",
    description: "Conditioned on house roasted hazelnuts. Big notes of nutella, fudge, and chocolate.",
    imageUrl: "https://picsum.photos/seed/stout3/600/800",
  },
  {
    name: "DOUBLE BARREL AGED JUDGEMENT DAY",
    style: "IMPERIAL STOUT",
    abv: "15%",
    description: "Aged 14 months in a buffalo trace barrel, then aged another 16 months in a wheated whiskey barrel. Big notes of fudge, bourbon, and oak.",
    imageUrl: "https://i.imgur.com/r62sSMe.jpeg",
  },
  {
    name: "JUDGEMENT DAY: VANILLA",
    style: "IMPERIAL STOUT",
    abv: "12%",
    description: "Conditioned on Madagascar vanilla beans. Big notes of marshmallow, fudge, and vanilla.",
    imageUrl: "https://picsum.photos/seed/stout5/600/800",
  },
  {
    name: "SAINT STEVE",
    style: "IPA - HAZY",
    abv: "6.8%",
    description: "Our flagship IPA brewed with citra hops. Big notes of orange, mango, and citrus.",
    imageUrl: "https://i.imgur.com/6cE9z2s.png",
  },
  {
    name: "THE FATHER",
    style: "IMPERIAL STOUT",
    abv: "12%",
    description: "Our flagship imperial stout. Big notes of fudge, and dark chocolate.",
    imageUrl: "https://picsum.photos/seed/stout6/600/800",
  },
];

export const EVENTS: Event[] = [
    // The website currently lists no events.
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    name: "The Fig & Prosciutto",
    description: "A savory and sweet combination of fig jam, prosciutto, red onion, and fresh arugula, topped with a balsamic glaze.",
    imageUrl: "https://i.imgur.com/vH3s1sH.jpeg",
  },
  {
    name: "Margherita",
    description: "Classic Neapolitan pizza with a San Marzano tomato sauce, fresh mozzarella, and basil.",
    imageUrl: "https://i.imgur.com/1G6nSl2.jpeg",
  },
  {
    name: "Pesto Pistachio",
    description: "A vibrant pesto base topped with mozzarella and a generous scoop of burrata, finished with a pistachio crumble.",
    imageUrl: "https://i.imgur.com/sYmGZ6I.jpeg",
  },
  {
    name: "The Breakfast Pie",
    description: "A morning delight with a garlic cream base, Canadian bacon, scrambled eggs, and mozzarella cheese.",
    imageUrl: "https://i.imgur.com/hOa48pZ.jpeg",
  }
];

export const GALLERY_IMAGES: string[] = [
  "https://i.imgur.com/r62sSMe.jpeg",
  "https://i.imgur.com/1G6nSl2.jpeg",
  "https://i.imgur.com/Qk7sHfq.jpeg",
  "https://i.imgur.com/vH3s1sH.jpeg",
  "https://i.imgur.com/gYd5v8Q.jpeg",
  "https://i.imgur.com/sYmGZ6I.jpeg",
  "https://i.imgur.com/hOa48pZ.jpeg",
  "https://i.imgur.com/6cE9z2s.png",
];
