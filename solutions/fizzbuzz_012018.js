//javascript solution for fb
function fizzBuzz()
{
	for (var i = 0; i < 101; i++)
	{
		if (i%3 === 0 && i%5 === 0)
		{
			console.log('FizzBuzz');
		}
		else if (1%3 === 0)
		{
			console.log('Fizz');
		}
		else if (i%5 === 0)
		{
			console.log('Buzz');
		}
		else 
		{
			console.log(i);
		}
	}
}

fizzBuzz();