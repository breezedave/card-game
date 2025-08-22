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
      "title": "Toast the Couple",
      "category": "Wedding Traditions",
      "description": "Stand up and make a short toast in honor of the newlyweds."
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
      "title": "Steal the Mic",
      "category": "Wedding Traditions",
      "description": "Get on the mic briefly to say congratulations or tell a joke."
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
      "description": "Challenge someone to a dance-off in the middle of the floor."
    },
    {
      "title": "Shot with the Father of the Bride",
      "category": "Drinks",
      "description": "Convince the bride’s dad to take a shot with you."
    },
    {
      "title": "Conga Line Starter",
      "category": "Music & Dancing",
      "description": "Be the person to kick off a conga line and recruit at least 5 people."
    },
    {
      "title": "Secret Handshake",
      "category": "Family & Friends",
      "description": "Invent a handshake with someone and show it off."
    },
    {
      "title": "Carry the Groom",
      "category": "The Happy Couple",
      "description": "Get a group to lift the groom and carry him across the room."
    },
    {
      "title": "Dance on a Chair",
      "category": "Music & Dancing",
      "description": "Climb up on a chair and dance for 10 seconds."
    },
    {
      "title": "Bride’s Choice",
      "category": "The Happy Couple",
      "description": "Ask the bride for a silly task and complete it."
    },
    {
      "title": "Group Singalong",
      "category": "Music & Dancing",
      "description": "Lead a table in a loud singalong to a wedding classic."
    },
    {
      "title": "Karaoke Dare",
      "category": "Music & Dancing",
      "description": "Grab the mic and belt out part of a song."
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
      "title": "Table Dance",
      "category": "Music & Dancing",
      "description": "Get on a table (safely!) and dance for 10 seconds."
    },
    {
      "title": "Lap Dance Gag",
      "category": "Music & Dancing",
      "description": "Give a (PG-rated) lap dance to a willing guest."
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
      "title": "Speech Heckle",
      "category": "Family & Friends",
      "description": "Shout something funny (but kind) during a speech."
    },
    {
      "title": "Slow Dance Switch",
      "category": "Music & Dancing",
      "description": "Swap partners mid slow-dance without warning."
    },
    {
      "title": "Group Lift",
      "category": "Family & Friends",
      "description": "Get a group to lift one person above their heads."
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
      "title": "Bride’s Choice Dance",
      "category": "The Happy Couple",
      "description": "Let the bride pick your dance move and do it in the middle of the floor."
    },
    {
      "title": "Stolen Dessert",
      "category": "Wedding Traditions",
      "description": "Sneak a bite of someone else’s dessert (with consent)."
    },
    {
      "title": "Conquer the Buffet",
      "category": "Wedding Traditions",
      "description": "Pile your plate as high as possible and show it off."
    },
    {
      "title": "Dance Train",
      "category": "Music & Dancing",
      "description": "Start a human train of dancers circling the room."
    },
    {
      "title": "Silly Hat Hunt",
      "category": "Family & Friends",
      "description": "Find or improvise a funny hat and wear it on the dance floor."
    },
    {
      "title": "Bartender Selfie",
      "category": "Drinks",
      "description": "Get behind the bar for a selfie with the bartender."
    },
    {
      "title": "Spin the Groom",
      "category": "The Happy Couple",
      "description": "Spin the groom around on the dance floor."
    },
    {
      "title": "Grandparent Dance",
      "category": "Family & Friends",
      "description": "Drag a grandparent onto the dance floor for a boogie."
    },
    {
      "title": "Upside Down Drink",
      "category": "Drinks",
      "description": "Do a ‘head back’ style drink in dramatic fashion."
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
      "title": "Late Night Snack Dash",
      "category": "Wedding Traditions",
      "description": "Be first in line for the midnight snack station."
    },
    {
      "title": "Dance Circle Closer",
      "category": "Music & Dancing",
      "description": "Be the one to close out the final dance circle of the night."
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