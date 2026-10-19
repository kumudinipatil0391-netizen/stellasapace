export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sections: BlogSection[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'water-at-the-center-of-your-home',
    title: 'Is There Water at the Center of Your Home? Read This First',
    excerpt: 'Why Vastu recommends keeping the center of a home open, light, and free of water.',
    image: 'assets/blogs/central-water-atrium.png',
    imageAlt: 'Illustration of a home atrium with a pool at its center',
    sections: [
      {
        paragraphs: [
          'Many modern homes and apartments have a pond, pool, fountain, or fish tank right in the middle. It looks beautiful. But according to Vastu Shastra, the old Indian science of home design, the center of a home is the one place you should not put water.'
        ]
      },
      {
        heading: 'What is the center of the home?',
        paragraphs: [
          'Vastu calls the center of a house the Brahma Sthana. It is seen as the heart of the home, where energy flows out in every direction.',
          'The rule is simple. The center should be open, light, and free of clutter. Think of it like the lungs of the house. If they are blocked, the whole home can feel heavy.'
        ]
      },
      {
        heading: 'Why not water?',
        paragraphs: [
          'Water is heavy, and it is a strong element. Vastu says that when you place it in the heart of the home, it blocks the free flow of energy.',
          'These are traditional beliefs, not scientific facts. Many people follow them for peace of mind, and that is a perfectly good reason.'
        ],
        items: [
          'Restlessness and instability',
          'Arguments in the family',
          'Money that slips away without a clear reason'
        ]
      },
      {
        heading: 'A story from the Mahabharata',
        paragraphs: [
          'The Pandavas’ palace at Indraprastha was built by the architect Mayasura. It was full of optical illusions. The floors looked like water, and the water looked like floors.',
          'One day Duryodhana walked in, mistook the water for solid ground, and fell in. He was humiliated, and the story says this anger became one of the sparks that led to the dice game, the Pandavas’ exile, and the Kurukshetra war.',
          'Vastu students read this as a warning about water in the wrong place, and especially about illusion and show winning over balance.'
        ]
      },
      {
        heading: 'What to do if you already have water at the center',
        paragraphs: ['You do not need to demolish anything. Try one of these:'],
        items: [
          'Move it to the north-east. This is the best place for water in Vastu. A small fountain or water bowl there is considered good.',
          'Turn it into a dry courtyard. Replace the water with plants, light, and open floor space.',
          'Open it to the sky. A skylight or lightwell over the center lets in light and air.',
          'Keep the area clear. Remove heavy furniture, storage, and clutter around it.'
        ]
      },
      {
        heading: 'If you can’t change it',
        paragraphs: ['Sometimes the structure is fixed, especially in apartments. Then:'],
        items: [
          'Keep the water clean and moving, never stagnant.',
          'Keep the area around it bright with warm lighting.',
          'Keep the surroundings light and tidy.'
        ]
      },
      {
        heading: 'Quick checklist',
        items: [
          'Center of the home: open and light',
          'Water: north-east',
          'Avoid water, toilets, or heavy structures in the center'
        ]
      },
      {
        heading: 'Final thought',
        paragraphs: [
          'A beautiful home is more than a good-looking one. The old builders believed that balance comes first. So walk to the center of your home today and ask yourself: what’s sitting there?'
        ]
      }
    ]
  },
  {
    slug: 'the-dark-bedroom-dilemma',
    title: 'The Dark Bedroom Dilemma: Stylish or Stressful?',
    excerpt: 'A dark bedroom can look stylish, but light, warmth, and personal circumstances matter too.',
    image: 'assets/blogs/dark-bedroom-dilemma.png',
    imageAlt: 'Illustration for the dark bedroom dilemma',
    sections: [
      {
        paragraphs: [
          'Planning a dark charcoal bedroom like a 5-star hotel? Check your birth chart first.',
          'Dark grey rooms with sleek lights look great in photos. But in Vedic astrology and Vastu, a very dark bedroom is not good for everyone. It depends on the planets in your chart.'
        ]
      },
      {
        heading: 'Who a dark bedroom suits',
        paragraphs: [
          'If you are running a Rahu or Saturn period (Dasha), and these planets are helpful in your chart, a dark room can work well. This often applies to Taurus and Libra ascendants.',
          'People in this group are said to get:'
        ],
        items: ['Strong ambition', 'Deep focus', 'Progress in career and money']
      },
      {
        heading: 'Who may struggle',
        paragraphs: [
          'If Rahu and Saturn are not supportive in your chart, or if you are a couple who wants warmth and closeness, an all-dark room can feel heavy. Astrologers say it can bring:'
        ],
        items: ['Restless sleep', 'A low mood', 'Emotional distance between partners']
      },
      {
        heading: 'The Sun helps everyone',
        paragraphs: [
          'In Vedic astrology the Sun gives light, energy, and positivity. Even if the Sun is weak in your chart, sunlight and warm light still lift the mood of a room. So whatever your chart says, let light in.'
        ]
      },
      {
        heading: 'Easy fixes',
        items: [
          'Change cool white bulbs to warm 2700K yellow light. It feels softer and helps you sleep.',
          'Use the 70-30 rule. Keep charcoal only on the accent wall behind the bed (30%), and use warm, light colors for the rest of the room (70%).',
          'Open the curtains every morning to let in natural sunlight.'
        ]
      },
      {
        heading: 'Choosing colors: couples vs families',
        paragraphs: [
          'Yellow and mustard are the colors of Jupiter, the planet linked to children, family, and expansion. Venus, the planet of love and romance, goes with cream, soft white, blush pink, and light rose.',
          'For couples without kids: don’t use too much Jupiter. Keep mustard and yellow to small touches such as one cushion or a throw. Make cream, soft white, and blush pink the main colors to support closeness and romance.',
          'For families with kids: a little more Jupiter is fine. Mustard blankets, yellow curtains, or a warm yellow cushion set suit a family room well.'
        ]
      },
      {
        heading: 'Quick summary',
        items: [
          'A dark room may support ambition, strong focus, and material success.',
          'A dark room may not suit people who experience restless sleep, low mood, or emotional distance.'
        ]
      },
      {
        heading: 'Final thought',
        paragraphs: [
          'A bedroom is where you rest and recharge. Style is nice, but peace matters more. Before you buy that matte black paint, check your chart, and keep some warmth and sunlight in the room.'
        ]
      }
    ]
  },
  {
    slug: 'symmetrical-box-or-skyline-view',
    title: 'Symmetrical Box or Skyline View?',
    excerpt: 'Consider the shape of a flat, not just its finishes and views, when you choose a home.',
    image: 'assets/blogs/symmetrical-box-shapes.png',
    imageAlt: 'Diagram comparing Vastu-friendly square and rectangular homes with shapes to avoid',
    sections: [
      {
        paragraphs: [
          'Why do some luxury flats feel tiring, while others feel calm the moment you walk in? A big part of the answer can be the shape of the flat. In Vastu Shastra, the old Indian science of home design, shape matters as much as marble and smart gadgets.'
        ]
      },
      {
        heading: 'Two kinds of homes',
        paragraphs: [
          'Vastu-first homes are built on a clean, straight layout. They have a square or rectangular shape with the corners lined up neatly with the directions. Then the builder adds the fancy extras: premium marble, smart home tech, and nice finishes.',
          'Trend-chasing homes are designed to get the best view. To do that, builders add L-shapes, angled walls, and cut-out corners. Vastu says these cuts remove the corners of the home, and corners are considered very important.'
        ]
      },
      {
        heading: 'The golden rule',
        paragraphs: [
          'A flat can look rich and stylish, but if its shape is not balanced, Vastu says it can bring:'
        ],
        items: ['Money leaking away', 'Restlessness and worry']
      },
      {
        heading: 'Which shapes are good, and which are not?',
        items: [
          'Good: square and rectangle',
          'Avoid: L-shape, circle, pentagon, and cut or notched corners'
        ]
      },
      {
        heading: 'What to do before you buy or rent',
        paragraphs: [
          'Check the outer boundary of the flat. Look at the floor plan before you sign. If the shape is a clean square or rectangle, it is the safest choice for long-term peace and stability.'
        ]
      },
      {
        heading: 'Final thought',
        paragraphs: [
          'Views are nice, but you live in your home every day. A simple, balanced shape gives your family a calmer base.'
        ]
      }
    ]
  }
];
