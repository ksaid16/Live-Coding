function solution (food_times, k)
{
    var answer = 0;
    var counter = k;
    var i = 0;
    while(counter > 0)
    {
        if(food_times.every(checkEmpty))
        {
            return answer = -1;
            break;
        }

        if(food_times[i] > 0 )
        {
            food_times[i]--;
            counter--;
            console.log(food_times);
        }
        i++;
        if(i == food_times.length)
            i = 0;

        if(food_times.every(checkEmpty))
            {
                return answer = -1;
                break;
            }
    }
    var findAnswer = true;

    while(findAnswer)
    {
        if(food_times[i] > 0)
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

var num = 6;

console.log(solution(x, num));