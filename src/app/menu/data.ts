export type CategoriesTypes =
  | "rice"
  | "soup"
  | "swallow"
  | "small chops"
  | "stew"
  | "pepper soup";

export interface MenuItem {
  name: string;
  title: string;
  desc: string;
  price: string;
  category: CategoriesTypes;
  id: string;
  image?: string;
}

export const categories = [
  "Rice",
  "Soup",
  "Swallow",
  "Stew",
  "Pepper Soup",
  "Small Chops",
];

const menu: MenuItem[] = [
  {
    name: "Afang Soup",
    title: `Immerse yourself in a symphony of textures and aromas with Afang soup.`,
    desc: `Succulent, slow-braised meats and the whisper of the sea (seafood)
    dance in a vibrant palm oil broth, delicately kissed by fiery peppers.
    Afang leaves, a treasured Nigerian heritage, lend their unique
    thickening magic and intoxicating fragrance. Savor this soulful
    creation with a comforting embrace of eba, fufu, or pounded yam.`,
    price: "$40",
    category: "soup",
    id: "",
  },
  {
    name: "Egusi Soup",
    title: `Unveil a tapestry of Nigerian tradition: Egusi Soup.`,
    desc: `This vibrant symphony blends roasted meats with earthy ground melon
    seeds, a whisper of fiery peppers, and aromatic spices. Lush spinach
    adds a verdant embrace, while palm oil lends a golden shimmer. Each
    spoonful is a journey through Nigerian heritage, a celebration of bold
    flavors waiting to awaken your taste buds.`,
    price: "$60",
    category: "soup",
    id: "",
  },
  {
    name: "Coconut Rice",
    title: `Indulge in a tropical escape: Coconut Rice.`,
    desc: `Fluffy grains dance in a creamy coconut bath, infused with the gentle
    heat of habaneros. Sun-kissed tomatoes add a burst of sweetness, while
    vibrant peppers whisper of distant lands. Each bite is a journey to
    paradise, a symphony of textures and flavors that will transport you
    to a beachside haven.`,
    price: "$20",
    category: "rice",
    id: "",
  },
  {
    name: "White Soup",
    title: `Embrace the soul of Nigeria: White Soup.`,
    desc: `This heartwarming broth sings with the earthy essence of uziza leaves
    and the fiery whispers of uda spice. Tender goat meat simmers in a
    symphony of rich flavors, embraced by the creamy caress of cocoyam. A
    touch of crayfish adds a salty depth, while ogiri whispers of
    fermented tradition. Each spoonful is a nourishing journey, a taste of
    Nigerian comfort waiting to be savored.`,
    price: "$65",
    category: "soup",
    id: "",
  },
  {
    name: "Fried Rice",
    title:
      "Savor a vibrant tapestry of textures and flavors: Nigerian Fried Rice.",
    desc: `Fluffy rice dances with crisp-tender vegetables, bathed in a golden
    embrace of curry. Savory chicken and rich liver add depth, each bite
    bursting with a symphony of tastes. This dish is a celebration of
    Nigerian ingenuity, transforming humble ingredients into a joyous
    culinary adventure.`,
    price: "$35",
    category: "rice",
    id: "",
  },
  {
    name: "Jollof Rice",
    title: "Immerse yourself in a vibrant symphony of flavors: Jollof Rice.",
    desc: `Sun-ripened tomatoes and fiery scotch bonnet peppers dance in a rich
    tomato base, whispering of smoky paprika and earthy thyme. Each fluffy
    grain of rice is infused with this aromatic embrace, a celebration of
    West African tradition. A single bite transports you to a bustling
    marketplace, a tapestry of colors and flavors waiting to be savored.`,
    price: "$39",
    category: "rice",
    id: "",
  },
  {
    name: "Okra Soup",
    title: "Embrace the heart of West Africa: Okra Soup.",
    desc: `Emeralds of fresh okra dance in a vibrant palm oil broth, infused with
    the fiery whispers of scotch bonnet peppers. Stockfish and fish lend a
    depth of savory richness, while aromatic crayfish adds a touch of the
    sea. Each spoonful is a celebration of Nigerian comfort food, a warm hug
    in a bowl waiting to be savored alongside fluffy eba, fufu, or pounded
    yam.`,
    price: "$42",
    category: "soup",
    id: "",
  },
  {
    name: "Ogbono Soup",
    title: "Indulge in the mystic allure of Ogbono Soup.",
    desc: `Creamy, earth-toned goodness unfolds as ground ogbono seeds embrace
    tender meat and fish in a vibrant palm oil bath. Hints of fiery pepper
    dance with the subtle bitterness of fluted pumpkin leaves, while a touch
    of ogiri whispers of fermented tradition. Each spoonful is a journey
    into the heart of Nigerian cuisine, a captivating experience waiting to
    tantalize your taste buds.`,
    price: "$40",
    category: "soup",
    id: "",
  },
  {
    name: "Efo Riro",
    title: "Savor the soul of Nigeria: Efo Riro.",
    desc: `Lush, emerald spinach leaves embrace tender meat and smoky fish in a
    vibrant symphony of flavors. Palm oil lends a golden shimmer, while
    fiery peppers whisper their heat. Every bite bursts with the essence of
    iru locust beans, a whisper of fermented tradition. Efo Riro is a
    celebration of Nigerian comfort food, a warm and nourishing embrace
    waiting to be savored.`,
    price: "$46",
    category: "soup",
    id: "",
  },
  {
    name: "Edikang Ikong Soup",
    title: "Unveil a tapestry of Nigerian vibrancy: Edikang Ikong Soup.",
    desc: `Emerald greens explode with fiery whispers of peppers. Rich palm oil 
    bathes tender meat and smoky fish, their essence mingling with fragrant 
    leaves. Each bite celebrates Nigerian bounty, a West African adventure for 
    the senses.`,
    price: "$51",
    category: "soup",
    id: "",
  },
  {
    name: "Pounded Yam",
    title: "Pounded Yam: A Textural Symphony.",
    desc: `This Nigerian staple is a metamorphosis of humble yams, transformed 
    by rhythmic pounding into a smooth, cloud-like delight. Each bite is a 
    journey through textures, a delightful dance between yielding softness 
    and subtle resistance. Pounded yam is the perfect canvas for a vibrant 
    array of Nigerian soups, a blank canvas waiting to be embraced by the 
    rich flavors of your culinary adventure.`,
    price: "$10",
    category: "swallow",
    id: "",
  },
  {
    name: "Garri",
    title: "Garri: The Embrace of Flavor.",
    desc: `This humble, golden grain, born from cassava, transcends its simplicity 
    when paired with vibrant Nigerian soups. Like a loyal companion, garri 
    transforms with each spoonful. Molded into smooth balls, it becomes a 
    delightful vessel, eagerly absorbing the rich broths and fiery spices. 
    Each bite is a harmonious dance of textures - the soft yield of garri 
    giving way to the bold flavors of the soup, a comforting and satisfying 
    experience.`,
    price: "$8",
    category: "swallow",
    id: "",
  },
  {
    name: "Oat Fufu",
    title: "Oat Fufu: A Modern Twist on Tradition.",
    desc: `A lighter take on fufu, this oat-based version offers a smooth texture 
    that complements Nigerian soups beautifully. Creamy oats soak up rich broths 
    and spices, creating a delightful contrast of textures in each bite. A 
    delicious twist for health-conscious foodies or culinary adventurers.`,
    price: "$12",
    category: "swallow",
    id: "",
  },
  {
    name: "Plantain Fufu",
    title: "Plantain Fufu: Lighter Delight.",
    desc: `This gluten-free twist on fufu uses unripe plantains, creating a light 
    and slightly sweet swallow. It pairs perfectly with Nigerian soups, offering 
    a smooth canvas for bold flavors and fiery spices. Each bite is a satisfying 
    contrast: fluffy plantain against rich soups.`,
    price: "$12",
    category: "swallow",
    id: "",
  },
  {
    name: "Chin Chin",
    title: "Chin Chin: Crispy Nigerian Delight.",
    desc: `These bite-sized fritters are a joyful explosion of flavor and texture.
     Deep-fried dough transforms into golden nuggets, offering a delightful 
     crunch in every bite. Enjoy them plain for a touch of sweetness for a satisfying snack.`,
    price: "$7",
    category: "small chops",
    id: "",
  },
  {
    name: "Plantain Chips",
    title: "Plantain Chips: Tropical Crunch.",
    desc: `These addictive snacks transform plantains into sunshine-yellow slices.
     Each bite offers a satisfying crackle, revealing a soft, sweet interior. 
     Enjoy them plain for a natural treat, or pair them with your favorite dip 
     for a delightful contrast of textures and flavors.`,
    price: "$5",
    category: "small chops",
    id: "",
  },
  {
    name: "Puff Puff",
    title: "Puff Puff: Irresistible Dough Balls.",
    desc: `These fluffy West African treats are like miniature golden clouds. 
    Deep-fried dough puffs up into a delightful ball, offering a soft, 
    pillowy interior and a slightly crispy exterior. Enjoy them dusted 
    with sugar for a touch of sweetness, or savor their simple deliciousness 
    on their own.`,
    price: "$8",
    category: "small chops",
    id: "",
  },
  {
    name: "Suya",
    title: "Suya: Smoky Nigerian Skewers.",
    desc: `Succulent strips of skewered meat are marinated in a vibrant blend 
    of spices, then grilled to smoky perfection. Each bite bursts with savory, 
    nutty, and slightly spicy flavors. A true taste of Nigerian street food 
    culture, perfect for a handheld treat.`,
    price: "$12",
    category: "small chops",
    id: "",
  },
  {
    name: "Fish Stew",
    title: "Fish Stew: A vibrant symphony of seafood.",
    desc: `Tender fish simmers in a richly spiced broth, infused with the essence
     of tomatoes, peppers, and aromatic herbs. Each spoonful is a celebration of 
     the bounty of the Nigerian seas.`,
    price: "$20",
    category: "stew",
    id: "",
  },
  {
    name: "Goat Meat Stew",
    title: "Goat Meat Stew: Earthy and robust.",
    desc: `This hearty stew features succulent goat meat slow-cooked in a flavorful 
    tomato base. Bold spices and smoky undertones create a truly satisfying experience.`,
    price: "$22",
    category: "stew",
    id: "",
  },
  {
    name: "Beef Stew",
    title: "Beef Stew: A classic comfort food.",
    desc: `Tender beef simmers in a rich tomato and onion gravy, seasoned with warming 
    spices. A versatile dish that pairs perfectly with white rice.`,
    price: "$19",
    category: "stew",
    id: "",
  },
  {
    name: "Assorted Meat Stew",
    title: "Assorted Meat Stew: A feast in a bowl.",
    desc: `This vibrant stew features a medley of tender meats - beef, goat, and sometimes 
    offal - cooked in a flavorful tomato base. Each bite offers a unique combination of 
    textures and flavors, a true celebration of Nigerian culinary tradition.`,
    price: "$25",
    category: "stew",
    id: "",
  },
  {
    name: "Assorted Meat Pepper Soup",
    title: "Assorted Meat Pepper Soup: A fiery fiesta.",
    desc: `This invigorating soup features a medley of tender meats slow-cooked in a 
    broth bursting with fiery peppers, aromatic spices, and fragrant herbs. Each 
    spoonful is a thrilling adventure for the palate, guaranteed to awaken your senses.`,
    price: "$25",
    category: "pepper soup",
    id: "",
  },
  {
    name: "Fresh Fish Pepper Soup",
    title: "Fresh Fish Pepper Soup: A taste of the ocean.",
    desc: `Delicate fish simmers in a light and flavorful broth infused with fiery 
    peppers, tangy tomatoes, and aromatic herbs. Each sip is a refreshing and 
    invigorating experience, perfect for those seeking a lighter yet flavorful soup.`,
    price: "$25",
    category: "pepper soup",
    id: "",
  },
  {
    name: "Goat Meat Pepper Soup",
    title: "Goat Meat Pepper Soup: Earthy and fiery!",
    desc: `Hearty goat meat simmers in a deeply flavorful broth brimming with fiery 
    peppers, aromatic spices, and fragrant herbs. This robust soup offers a 
    satisfying and warming experience, perfect for chilly days or adventurous palates.`,
    price: "$25",
    category: "pepper soup",
    id: "",
  },
];

export default menu;
