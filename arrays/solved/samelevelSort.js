const array = [
  {
    working: "today",
    visits: [
      {
        time: "9am",
        link: "link to this event",
      },
    ],
  },
  {
    working: "today",
    visits: [
      {
        time: "6am",
        link: "link to this event",
      },
    ],
  },
  {
    working: "tomorow",
    visits: [
      {
        time: "4pm",
        link: "link to this event",
      },
    ],
  },
];
function sort(array) {
  // keep track of the nw array
  let output = [];

  array.forEach((item) => {
    var existing = output.filter(function (v, i) {
      return v.working == item.working;
    });
    if (existing.length) {
      var existingIndex = output.indexOf(existing[0]);
      output[existingIndex].visits = output[existingIndex].visits.concat(
        item.visits
      );
    } else {
      if (typeof item.visits == "string") item.visits = [item.visits];
      output.push(item);
    }
  });
  console.log("output", output);
  return output;
}

sort(array);
