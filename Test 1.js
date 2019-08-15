function solution (food_times, k)
{
    var answer = 0;
    var counter = k;
    var i = 0;
    var zeroSet = new Set();
    while(counter > 0)
    {
        if(food_times[i] > 0 )
        {
            food_times[i]--;
            counter--;
            if(food_times[i] == 0)
            {
                zeroSet.add(i);
            }
        }

        if(zeroSet.size == food_times.length)
            return answer = -1;

        i++;
        if(i == food_times.length)
            i = 0;
    }
    var findAnswer = true;

    while(findAnswer)
    {
        if(!zeroSet.has(i))
        {
            answer = i+1;
            findAnswer = false;
        }
        else 
            i++;
        if(i == food_times.length)
            i = 0;
    }
    return answer;
}

function checkEmpty(food)
{
    return food == 0;
}

var x = [3, 1, 2];

var num = 1;

console.log(solution(x, num));