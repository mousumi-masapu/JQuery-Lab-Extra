function timer() {
    let hrs = $('#hours');
    let mins = $('#minutes');
    let secs = $('#seconds');
    let timer = 0;
    $('#start-timer').on('click', start);
    $('#stop-timer').on('click', stop);
    function start() {
        timer = setInterval(step, 1000);
        $('#start-timer').off('click');
    }
    function stop() {
        clearInterval(timer);
        $('#start-timer').on('click', start);
    }
    function step() {
        //alert(+secs.val()+1);
        secs.val(+secs.val()+1);
        //alert(formatTime(secs.val()));
        //alert(+secs.text());
        secs.text(formatTime(secs.val()));
        //alert(+secs.text());
        //alert(+secs.val());
        if(secs.val()>59){
            secs.val("00");
            mins.val(+mins.val()+1);
            mins.text(formatTime(mins.val()));
        }
        if(mins.val()>59){
            mins.val("00");
            hrs.val(+hrs.val()+1);
            hrs.text(formatTime(mins.val()));
        }
       }
       function formatTime(value) {
        let convert = `${('0' + value % 60).slice(-2)}`;
        return convert;
    } 
       
    }
    
        


