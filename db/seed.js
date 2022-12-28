const mongoose = require("mongoose");
const Present = require("../models/present");
const MONGODB_URI = "mongodb://localhost:27017/dear-santa";
mongoose.set('strictQuery', true);

const presents = [
  {
    name: "Cadia Stands: Astra Militarum Army Set",
    image:
      "https://www.games-workshop.com/resources/catalog/product/920x950/60010105001_EngAMCoreGame01.jpg",
    price: 155,
    recipient: "Me",
    description:
      "The Astra Militarum Army Set brings you a fearsome army of Cadian soldiers, all with redesigned and new multipart plastic kits, suitable both for brand new projects and bolstering existing collections.",
  },
  {
    name: "Vanguard Veteran Squad",
    image:
      "https://www.games-workshop.com/resources/catalog/product/920x950/99120101134_Vanguard01.jpg",
    price: 42.5,
    recipient: "Me",
    description:
      "This plastic kit contains 98 components with which to make a 5 man Space Marine Vanguard Veteran Squad (and so much more!).",
  },
  {
    name: "Terminator Assault Squad",
    image:
    "https://www.games-workshop.com/resources/catalog/product/920x950/99120101037_TerminatorAssaulSquadNEW01.jpg",
    price: 45,
    recipient: "Me",
    description:
      "This box set contains five multi-part plastic Terminators, and includes options for a Sergeant and the choice of either a pair of lightning claws or thunder hammer and storm shield for each Terminator. Models supplied with Citadel 40mm Round bases.",
  },
  {
    name: "Imperial Fists - Bastion Strike Force",
    image:
    "https://www.games-workshop.com/resources/catalog/product/920x950/99120101373_IFBastionStrikeForce01.jpg",
    price: 170,
    recipient: "Me",
    description:
      "This boxed set focuses on Gravis-armoured Space Marines, led by Tor Garadon and his deadly Hand of Defiance. Inside, you’ll find enough Heavy Intercessors for a gunline of three squads, plus a trio of fist-swinging Aggressors to further bolster your front. You'll also receive plenty of Imperial Fists Primaris Upgrades to add some extra sons of Dorn style.",
  },
  {
    name: "Primaris Repulsor",
    image:
    "https://www.games-workshop.com/resources/catalog/product/920x950/99120101192_PrimarisRepulsor01.jpg",
    price: 67.5,
    recipient: "Me",
    description:
      "This multi-part plastic kit contains the components necessary to assemble a Space Marines Primaris Repulsor, an armoured transport not only capable of ferrying 10 Primaris Space Marines into battle, but also defending itself with the vast array of weaponry at its disposal.",
  }
];

const connectBD = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Seed DB connected");
    await Present.deleteMany({});
    await Present.insertMany(presents);
    console.log("Seed created");
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

connectBD();
