const cardDetailsObj = {};
const cardDetailsArray = [
    {
      "title": "Shot with a Groomsman",
      "category": "Drinks",
      "description": "Find a groomsman and take a shot together."
    },
    {
      "title": "Dance with a Stranger",
      "category": "Music & Dancing",
      "description": "Invite someone you’ve never met before onto the dance floor."
    },
    {
      "title": "Sing Along Loudly",
      "category": "Music & Dancing",
      "description": "Join in loudly during the chorus of a song."
    },
    {
      "title": "Clink with the Couple",
      "category": "The Happy Couple",
      "description": "Find the couple and clink glasses with them."
    },
    {
      "title": "Dad Dance Challenge",
      "category": "Music & Dancing",
      "description": "Bust out your best 'dad dance' moves on the floor."
    },
    {
      "title": "Group Shot Round",
      "category": "Drinks",
      "description": "Organize a group of 4+ people to down a shot together."
    },
    {
      "title": "Selfie with the Bride",
      "category": "The Happy Couple",
      "description": "Track down the bride for a selfie together."
    },
    {
      "title": "Piggyback Ride",
      "category": "Family & Friends",
      "description": "Give or get a piggyback ride across the dance floor."
    },
    {
      "title": "Air Guitar Solo",
      "category": "Music & Dancing",
      "description": "Perform a dramatic air guitar solo to a rock song."
    },
    {
      "title": "Drink Swap",
      "category": "Drinks",
      "description": "Swap drinks with another guest and take a sip."
    },
    {
      "title": "Dance Battle",
      "category": "Music & Dancing",
      "description": "Challenge someone to a dance-off."
    },
    {
      "title": "Shot with the Father of the Bride",
      "category": "Drinks",
      "description": "Convince the bride’s dad to take a shot with you."
    },
    {
      "title": "Secret Handshake",
      "category": "Family & Friends",
      "description": "Invent a handshake with someone and show it off."
    },
    {
      "title": "Swapsies",
      "description": "Swap an item of clothing with someone"
    },
    {
      "title": "Group Singalong",
      "category": "Music & Dancing",
      "description": "Lead a table in a loud singalong to a wedding classic."
    },
    {
      "title": "Photo Bomb",
      "category": "Family & Friends",
      "description": "Sneak into someone else’s photo in a funny way."
    },
    {
      "title": "Finish Their Drink",
      "category": "Drinks",
      "description": "With permission, finish off another guest’s drink."
    },
    {
      "title": "Find a Twin",
      "category": "Family & Friends",
      "description": "Find someone dressed most like you and pose together."
    },
    {
      "title": "Shot Train",
      "category": "Drinks",
      "description": "Get three people to line up and do shots in sync."
    },
    {
      "title": "Slow Dance Switch",
      "category": "Music & Dancing",
      "description": "Swap partners mid slow-dance without warning."
    },
    {
      "title": "Mix a Mystery Drink",
      "category": "Drinks",
      "description": "Convince the bartender to make you a random mystery drink and down it."
    },
    {
      "title": "Link Arms",
      "category": "Family & Friends",
      "description": "Link arms with 3 other people and drink together."
    },
    {
      "title": "Limbo Challenge",
      "category": "Music & Dancing",
      "description": "Start a limbo line with whatever stick/pole is handy."
    },
    {
      "title": "Shot with the Best Man",
      "category": "Drinks",
      "description": "Find the best man and take a shot together."
    },
    {
      "title": "Stolen Dessert",
      "category": "Wedding Traditions",
      "description": "Sneak a bite of someone else’s dessert (with consent)."
    },
    {
      "title": "Silly Hat Hunt",
      "category": "Family & Friends",
      "description": "Find or improvise a funny hat and wear it on the dance floor."
    },
    {
      "title": "Bartender Selfie",
      "category": "Drinks",
      "description": "Get a selfie with the bartender."
    },
    {
      "title": "Grandparent Dance",
      "category": "Family & Friends",
      "description": "Drag a grandparent onto the dance floor for a boogie."
    },
    {
      "title": "Human Pyramid",
      "category": "Family & Friends",
      "description": "Assemble a 3-person human pyramid for the camera."
    },
    {
      "title": "Shoeless Shuffle",
      "category": "Music & Dancing",
      "description": "Dance barefoot in the middle of the floor."
    },
    {
      "title": "Bride & Groom Sandwich",
      "category": "The Happy Couple",
      "description": "Pose between the couple in a group hug."
    },
    {
      "title": "I'll regret that",
      "category": "Family & Friends",
      "description": "Do something you know you'll regret in the morning"
    },
    {
      "title": "Final Shot Challenge",
      "category": "Drinks",
      "description": "Get a group together for the last round of shots before close."
    }
  ]

  cardDetailsArray.forEach(({title, category, description}, i) => {
    cardDetailsObj[`card${i+1}`] = {
        title,
        category,
        description,
    };
  })
  
  export const cardDetails = cardDetailsObj