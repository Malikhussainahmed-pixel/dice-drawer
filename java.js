





let pics_array=[" ","dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];



function random_num_generator_1(max,min)
{

    return Math.floor(Math.random()*(max-min+1)+min);


}


let int_ran_1=random_num_generator_1(0,6);

function random_num_generator_2(max,min)
{

    return Math.floor(Math.random()*(max-min+1)+min);


}


let int_ran_2=random_num_generator_2(0,6);





document.querySelector('.img1').src = "images/"+pics_array[int_ran_1];

document.querySelector('.img2').src = "images/"+pics_array[int_ran_2];



if(int_ran_1>int_ran_2)
{
    document.querySelector("h1").textContent="Player 1 won"
}
else if(int_ran_1<int_ran_2)
{
    document.querySelector("h1").textContent="Player 2 won"
}
else
{
    document.querySelector("h1").textContent="Draw"
}