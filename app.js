// Exercise 1 Section
function printOdds(count) 
{
    for (let i = 1; i <= Math.abs(count); i++) 
        {
            if (i % 2 != 0) 
                {
                    console.log(i * Math.sign(count));
                }
        }
}

printOdds(-7)
printOdds(200)

// Exercise 2 Section
function checkAge(userName, age)
{
    if(userName == undefined)
        {
            return console.log("You must input your name.");
        }

    else if(age == undefined)
        {
            return console.log("You must input your age.");
        }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16)
        {
            return console.log(`${belowSixteen}`);
        }

    else(age >= 16)
    {
        return console.log(`${aboveSixteen}`);
    }
}

checkAge("taco", 15)
checkAge("burrito", 17)
checkAge()
checkAge("salsa")

// Exercise 3 Section
function positionLocation(x, y)
{
    if (x === 0 && y === 0) 
    {
        console.log("The point (0, 0) is at the origin.");
    } 
    else if (x === 0) 
    {
        console.log(`The point (${x}, ${y}) is on the y-axis.`);
    } 
    else if (y === 0) 
    {
        console.log(`The point (${x}, ${y}) is on the x-axis.`);
    } 
    else if (x > 0 && y > 0) 
    {
        console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    } 
    else if (x < 0 && y > 0) 
    {
        console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    } 
    else if (x < 0 && y < 0) 
    {
        console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    } 
    else if (x > 0 && y < 0) 
    {
        console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
}

positionLocation(0, 0)
positionLocation(0, 1)
positionLocation(1, 0)
positionLocation(0, -1)
positionLocation(-1, 0)
positionLocation(1, 1)
positionLocation(1, -1)
positionLocation(-1, 1)
positionLocation(-1, -1)

// Exercise 4 Section
function triangle(a, b, c)
{
    if(a + b <= c || a + c <= b || b + c <= a)
        {
            return console.log("This triangle is invalid.")
        }

    if(a == b && b == c)
        {
            return console.log("This is an equilateral triangle.")
        }
    else if(a == b || a == c || b == c)
        {
            return console.log("This is an isosceles triangle.")
        }
    else
    {
        return console.log("This is a scalene triangle.")
    }
}

triangle(1, 2, 4)
triangle(2, 2, 2)
triangle(2, 2, 3)
triangle(4, 7, 8)

// Exercise 5 Section
function dataUsage(planLimit, day, usage)
{
    let days = 30;
    let daysLeft = days - day;
    let averageLimit = planLimit / days;
    let averageUsed = usage / day;
    let projectedUsage = averageUsed * days;
    let exceededLimitAmount = projectedUsage - planLimit;
    if(usage > planLimit)
        {
            return console.log(`You've exceeded your 30 day data limit by ${usage - planLimit}`);
        }
    if(day > days)
        {
            return console.log("invalid entry, this is strictly a 30 day plan.");
        }
    
    console.log(`${day} days used, ${daysLeft} days remain.`);
    console.log(`Your average daily use of data is ${averageLimit} GB.`);

    if(averageUsed > averageLimit)
        {
            console.log(`You have exceeded your average daily use by
                ${averageUsed - averageLimit} GB, if you continue this rate
                of data usage, you'll exceed your data plan by
                ${exceededLimitAmount} GB. Your current plan limit is
                ${planLimit} GB. If you don't go over ${projectedUsage} GB for your
                remainding days, then you won't have anything to worry about.`)
                return;
        }

        else if(averageUsed < averageLimit)
            {
                console.log(`You are beneath your average daily use.
                    If you continue this rate
                    of data usage, you'll stay well within your plan limit.`)
                    return;
            }
            else
                {
                    console.log(`Your data usage meets your average daily use,
                        try not to exceed it!`)
                }
}

dataUsage(100, 28, 101);
dataUsage(100, 31, 15);
dataUsage(100, 15, 70);
dataUsage(100, 15, 8);
dataUsage(100, 15, 50);