function timer(){
    let timer = undefined;
            $('#start').on('click', function(){
                timer = window.setInterval('tictac', 1000);
            });
            $('#pause').on('click', function(){
                window.clearInterval(timer);
            });
            $('#reset').on('click', function(){
                timer = window.clearInterval(timer);
            });
            var counter = 0;

function tictac(){
    counter++;
    $("#clock").html(counter);
}
function reset()
{
clearInterval(timer);
    counter=0;
}
function startInterval()
{
timer= setInterval("tictac()", 1000);
}
function stopInterval()
{
    clearInterval(timer);
}

        }



