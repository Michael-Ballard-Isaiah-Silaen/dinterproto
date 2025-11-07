export const MOCK_PROFILES = [
    {
      id: 1,
      name: "Ashley",
      age: 24,
      location: "5 miles away",
      bio: "Coffee addict, amateur hiker, and lover of bad puns. Looking for someone to share a playlist with.",
      images: [
        "https://placehold.co/400x500/png?text=Sarah+1",
        "https://placehold.co/400x500/png?text=Sarah+Hiking",
        "https://placehold.co/400x500/png?text=Sarah+Coffee",
        "https://placehold.co/400x500/png?text=Sarah+Travel",
      ],
      socials: {
        spotify: "#",
        tiktok: "#",
      },
    },
    {
      id: 2,
      name: "James",
      age: 27,
      location: "2 miles away",
      bio: "Musician and foodie. If you know the best taco spot in town, we'll get along just fine.",
      images: [
        "https://placehold.co/400x500/png?text=James+1",
        "https://placehold.co/400x500/png?text=James+Guitar",
        "https://placehold.co/400x500/png?text=James+Food",
        "https://placehold.co/400x500/png?text=James+Travel",
      ],
      socials: {
        spotify: "#",
        tiktok: "#",
      },
    },
  ];
  
  export const MOCK_DATE_SPOTS = [
    {
      id: 1,
      name: "The Rusty Anchor",
      type: "Cozy Coffee Shop",
      description: "Quiet atmosphere perfect for a first date conversation. Known for their latte art.",
      rating: 4.5,
      position: [51.505, -0.09] as [number, number], // London coordinates as placeholder
    },
    {
      id: 2,
      name: "Lumina Park",
      type: "Public Park",
      description: "Great for a casual walk. Features a beautiful rose garden and evening illuminations.",
      rating: 4.8,
      position: [51.51, -0.1] as [number, number],
    },
    {
      id: 3,
      name: "Neon Bowl",
      type: "Arcade & Bowling",
      description: "Fun, energetic date spot. Good food and retro arcade games.",
      rating: 4.2,
      position: [51.515, -0.09] as [number, number],
    },
  ];