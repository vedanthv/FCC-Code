    // nstead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

    // To do this, we 'll define a minimum number min and a maximum number max.

    // Here 's the formula we'
    // ll use.Take a moment to read it and
    // try to understand what this code is doing:

    //     Math.floor(Math.random() * (max - min + 1)) + min
        function randomRange(myMin, myMax) {
    
            return Math.floor(math.random()*(max-min+1))+min;
        }
      