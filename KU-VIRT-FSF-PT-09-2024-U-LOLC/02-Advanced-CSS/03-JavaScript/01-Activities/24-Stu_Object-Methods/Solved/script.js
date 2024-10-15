const chosenPet = "Lulu";

const shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log(
      "Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend."
    );
  },
};

const dogMessage = function () {
  console.log(
    `Congrats! ${chosenPet}, a great dog, is available for adoption!`
  );
  shelter.apptMessage();
};

const catMessage = function () {
  console.log(
    `Congrats! ${chosenPet}, an awesome cat, is available for adoption!`
  );
  shelter.apptMessage();
};

if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log(
    `Check out our featured dog, ${shelter.dogs[0]}. or our featured cat, ${shelter.cats[0]}!`
  );
}
