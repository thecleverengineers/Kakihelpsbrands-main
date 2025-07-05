  const projects = [
    {
      id: 1,
      title: 'NSL Ad Commercial',
      category: 'Studio',
      description: 'High-impact sports film for “Every dream begins with a simple kick” campaign by Nagaland Super League.',
      // image: '/works/studio/nsl.png',
      video: '/works/studio/nslAD.mp4',
      year: '2024',
      client: 'NSL'
    },
    {
      id: 2,
      title: 'NSL Trophy Reveal Ad',
      category: 'Studio',
      description: 'High-energy sports commercial unveiling the NSL Trophy with cinematic flair.',
      image: '/works/studio/nslpf.jpg',
      video: '/works/studio/nsl.mp4',
      year: '2024',
      client: 'NSL'
    },
    {
      id: 3,
      title: 'Toyota Commercial',
      category: 'Studio',
      description: 'Dynamic car commercial driven by the line, “Life is a journey, Toyota is the car.”',
      image: '/works/studio/toyota.png',
      video: '/works/studio/toyota.mp4',
      year: '2023',
      client: 'Toyota'
    },
    {
      id: 4,
      title: 'Lenskart Boost',
      category: 'Studio',
      description: 'Energetic commercial for Lenskart Boost featuring Combat Academy fighters in Dimapur.',
      image: '/works/studio/lenskart.png',
      video: '/works/studio/lenskart.mp4',
      year: '2023',
      client: 'Lenskart'
    },
    {
      id: 5,
      title: 'North East Games',
      category: 'Studio',
      description: 'High-end Olympic promo film spotlighting Ruopfuzhano Whiso for North East Games.',
      image: '/works/studio/negames.png',
      video: '/works/studio/negames.mp4',
      year: '2022',
      client: 'Nagaland Olympics Association'
    },
    {
      id: 6,
      title: 'NFT Commercial',
      category: 'Studio',
      description: 'High-end NFT ad film exploring avatar identity, digital ownership, and cyber-culture in Neo Miami.',
      image: '/works/studio/nft.png',
      video: '/works/studio/nft.mp4',
      year: '2021',
      client: 'Karbon XS'
    },
    {
      id: 7,
      title: 'Nagaland Super League',
      category: 'Marketing',
      description: `KAKI Marketing served as the official media and marketing partner for the inaugural season of the Nagaland Super League (NSL), a landmark football league uniting seven franchise teams from across the state. From brand strategy and visual identity to on-ground media coverage and social media management, our team helped engage over 60,000+ fans and highlight local football talent on a professional stage.`,
      image: '/works/marketing/nslpf.jpg',
      year: '2024',
      client: 'NSL'
    },
    {
      id: 8,
      title: 'Tribe Fighting Championship',
      category: 'Marketing',
      description: `KAKI Marketing served as the official marketing partner for the highly anticipated Tribe Fighting Championship Fight Night, a professional MMA event that showcased both local and international fighters. Held at Dimapur's Indoor Badminton Stadium, the event featured five high-impact bouts across multiple weight categories and was widely covered in local media.`,
      image: '/works/marketing/tribe.jpg',
      year: '2024',
      client: 'TFC'
    },
    {
      id: 9,
      title: 'The Big Laugh',
      category: 'Marketing',
      description: `KAKI Marketing was proud to partner on “The Big Laugh,” a landmark stand-up comedy event headlined by international sensation Mark Angel Comedy, alongside Nagaland’s own Dreamz Unlimited, Juztino, and a lineup of local performers. The event was a milestone for the comedy scene in Nagaland.`,
      image: '/works/marketing/big.jpg',
      year: '2024',
      client: 'The Big Laugh'
    },
    {
      id: 10,
      title: 'The Midnight',
      category: 'Marketing',
      description: `KAKI Marketing was part of “Midnight in Nagaland,” a landmark concert featuring the globally acclaimed synthwave band The Midnight on their debut India tour. Held at Noune Resort, the event brought together thousands of music lovers for an unforgettable night of sound, lights, and celebration.`,
      image: '/works/marketing/midnight.jpg',
      year: '2024',
      client: 'The Midnight'
    },
    {
      id: 11,
      title: 'DMF',
      category: 'Marketing',
      description: `KAKI Marketing proudly served as the official marketing partner for the 5th edition of the Dimapur Music Festival (DMF) 2023, affectionately known as “The Happy Fest.” Held at Noune Resort’s scenic Picnic Island, the event celebrated music, community and creativity, featuring headline acts like Polar Lights, Trance Effect, Euphonic (winner of Tafma’s Battle of Bands), and more .`,
      image: '/works/marketing/dmf.jpg',
      year: '2024',
      client: 'DMF'
    },
    {
      id: 12,
      title: 'AM to PM with Melita',
      category: 'Marketing',
      description: `KAKI Marketing partnered with Melita Skincare to host “AM to PM with Melita,” an evening of beauty, relaxation, and lifestyle at the upscale Casablanco lounge. The event showcased Melita’s luxury skincare range, with exclusive demos, complimentary drinks, and live performances by DJ Sanaa.`,
      image: '/works/marketing/am.jpg',
      year: '2024',
      client: 'Melita'
    },
    {
      id: 13,
      title: 'Nagaland Super League (NSL) – Visual Identity',
      category: 'Design',
      description: `Complete brand identity and design system for Nagaland’s first professional football league, including logo, visual guidelines, matchday graphics, and digital collateral.
      Nagaland Super League 
      Created a dynamic league identity that energized fans, elevated the matchday atmosphere, and positioned NSL as a transformative movement for football and youth culture in Nagaland.`,
      image: '/works/design/NSL/FULL PLAY OFFS.jpg',
      year: '2025',
      client: 'Nagaland Super League'
    },
    {
      id: 14,
      title: 'Ohan Ki – Brand & Packaging Design',
      category: 'Design',
      description: `
      Complete brand identity, logo, packaging, and website design for premium food brand Ohan Ki.
       Ohan Ki
      Crafted a fresh, modern look—seamlessly blending tradition with contemporary appeal across all touchpoints, from logo to shelf to screen.
      `,
      image: '/works/design/ohanki/ohanki.png',
      year: '2024',
      client: 'Ohan Ki'
    },
    {
      id: 15,
      title: 'JV Foundation Basketball Tournament',
      category: 'Design',
      description: `
      Complete event branding for Nagaland’s premier youth basketball tournament—covering logo, posters, digital promotions, prize graphics, and partnership collateral.
      Jonathan and Vikaito (JV) Foundation
      Energized the tournament with bold visuals, clear information design, and a vibrant sports identity that inspired youth participation and community engagement.
      `,
      image: '/works/design/JV/JV Back Drop.png',
      year: '2024',
      client: 'Jonathan and Vikaito (JV) Foundation'
    },
    {
      id: 16,
      title: 'Bloom Bazaar Dimapur – Event Branding',
      category: 'Design',
      description: `
      Complete event branding for Dimapur’s largest lifestyle bazaar—covering hoardings, social media, merchandise, and newspaper campaigns.
      Bloom Bazaar
      Brought the bazaar to life with vibrant, cohesive visuals—creating an energetic marketplace atmosphere across every touchpoint, from print to digital to on-ground experience.
      `,
      image: '/works/design/Bloom Bazaar/Bloom Bazaar.jpg',
      year: '2023',
      client: 'Bloom Bazaar'
    },
    {
      id: 22,
      title: 'Ahibi',
      category: 'Tech',
      description: `Tech-powered event platform built by Kaki to streamline bookings, AR experiences, and ticketing across Nagaland.`,
      image: '/works/tech/ahibi.jpg',
      link:'https://www.ahibi.in/',
      year: '2024',
      client: 'Ahibi'
    },
    {
      id: 23,
      title: 'Milita',
      category: 'Tech',
      description: `Modern e-commerce site for Milita’s skincare range, combining beauty, wellness, and clean design.`,
      image: '/works/tech/melita.png',
      year: '2023',
      link:'',
      client: 'Milita'
    },
    {
      id: 24,
      title: 'Ohanki',
      category: 'Tech',
      description: `Clean, functional website crafted for Ohanki to showcase their fresh, ready-to-eat food and delivery model.`,
      image: '/works/tech/ohanki.png',
      link:'',
      year: '2024',
      client: 'Ohanki'
    },
    {
      id: 25,
      title: 'Orija',
      category: 'Tech',
      description: `Warm, accessible website designed for Orija — combining elder care, craft therapy, and lifestyle innovation.`,
      image: '/works/tech/orija.png',
      link:'',
      year: '2023',
      client: 'Orija'
    },
    {
      id: 26,
      title: 'Nagaland Super League',
      category: 'Case Study',
      description: `From zero online presence to 6M+ video views – here’s how we built Nagaland’s biggest football league from the ground up.`,
      image: '/works/casestudy/nsl.png',
      link:'',
      year: '2024',
      client: 'NSL'
    },
    {
      id: 27,
      title: 'Ohanki',
      category: 'Case Study',
      description: `Ohan Ki. Dimapur’s trusted name for authentic Naga smoked meats and indigenous cuisine.`,
      image: '/works/casestudy/ohanki.png',
      link:'',
      year: '2024',
      client: 'Ohanki'
    },
    {
      id: 28,
      title: 'Tribe Fighting Championship (TFC)',
      category: 'Case Study',
      description: `Tribe Fighting Championship (TFC) was launched by Combat Academy Dimapur as the region’s first premium combat sports event featuring both international and local fighters.`,
      image: '/works/casestudy/tfc.jpg',
      link:'',
      year: '2023',
      client: 'TFC'
    },
  ];

  export default projects;