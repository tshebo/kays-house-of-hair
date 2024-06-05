// collectionsHelper.js
import combo1 from "../assets/img/Collections/ComboDeals/10InchComboDeal.jpg";
import combo2 from "../assets/img/Collections/ComboDeals/26Inch-ComboDeal.jpg";
import mixmatch1 from "../assets/img/Collections/Mx&Match/1WayColor4Weave.jpg";
import mixmatch2 from "../assets/img/Collections/Mx&Match/Gluess Half Frontal.jpg";
import mixmatch3 from "../assets/img/Collections/Mx&Match/BrownCurlyFringe.jpg";
import mixmatch4 from "../assets/img/Collections/Mx&Match/3-Way Curly weave (waterwave).jpg";
import mixmatch5 from "../assets/img/Collections/Mx&Match/Curly Fringe(waterwave).jpg";
import mixmatch6 from "../assets/img/Collections/Mx&Match/1 way natural color weave.jpg";

export function getCollections() {
  return [
    {
      name: "Combo Deals",
      image: combo1, 
      catalogue: [
        {
          name: "Half-Frontal Glueless",
          price: "R3 200",
          length: "26 inches",
          image: combo2,
        },
        {
          name: "Combo Deal",
          price: "R1 600",
          length: "10 inches",
          image: combo1,
        },
      ],
    },
    {
      name: "Mix & Match",
      image: mixmatch1, 
      catalogue: [
        {
          name: "1 way color 4 weave",
          price: "R900",
          length: "14 inches",
          image: mixmatch1,
        },
        {
          name: "Glueless Half Frontal",
          price: "R1 400",
          length: "18 inches",
          image: mixmatch2,
        },
        {
          name: "Brown Curly Fringe",
          price: "R1 000",
          length: "18 inches",
          image: mixmatch3,
        },
        {
          name: "3 way curly weave (water weave)",
          price: "R1 400",
          length: "18 inches",
          image: mixmatch4,
        },
        {
          name: "Curly Fringe (Waterwave)",
          price: "R900",
          length: "18 inches",
          image: mixmatch5,
        },
        {
          name: "1 way natural color weave",
          price: "R850",
          length: "14 inches",
          image: mixmatch6,
        },
      ],
    },
  ];
}
