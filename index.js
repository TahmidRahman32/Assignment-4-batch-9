function calculateMoney(ticketSale) {
   if (ticketSale > 0) {
      const ticket = ticketSale * 120;
      const ManCost = 500;
      const singleCost = 50;
      const allSingleCost = singleCost * 8;
      const staffCost = ManCost + allSingleCost;
      const allCost = ticket - staffCost;
      return allCost;
   } else {
      return "Invalid Number";
   }
}

function checkName(name) {
   if (typeof name === "string") {
      const last = name.at(-1);
      if (last === "A" || last === "a" || last === "Y" || last === "y" || last === "I" || last === "i" || last === "E" || last === "e" || last === "O" || last === "o" || last === "U" || last === "u" || last === "W" || last === "w") {
         return "Good Name";
      } else {
         return "Bad Name";
      }
   } else {
      return "invalid";
   }
}

function deleteInvalids(array) {
   if (Array.isArray(array) === true) {
      const notNil = (i) => !(typeof i === "undefined" || typeof i === "string" || i === null || typeof i === "object");
      const ar = array.filter(notNil);

      return ar;
   } else {
      return "Invalid Array";
   }
}

function password(obj) {
   if (obj.hasOwnProperty("siteName") && obj.hasOwnProperty("siteName") && obj.hasOwnProperty("name")) {
      if (obj.birthYear.length === 4) {
         const add = obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;
         return add;
      } else {
         return "invalid";
      }
   } else {
      return "invalid";
   }
}

function monthlySavings(arr, livingCost) {
   if (Array.isArray(arr) === true && typeof livingCost === "number") {
      let sum = 0;
      for (const payment of arr) {
         sum = sum + payment;

         if (payment >= 3000) {
            const tax = (payment * 20) / 100;
            const cost = livingCost + tax;
            const total = sum - cost;
            return total;
         }
      }
      if (sum > livingCost) {
         const total = sum - livingCost;
         return total;
      } else {
         return "earn more";
      }
   } else {
      return "invalid input";
   }
}
