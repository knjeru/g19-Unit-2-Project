console.log('form test js');

var q = 1, qMax = 0;

$(function () {
    qMax = $('#myForm div.group').length;
    $('#myForm div.group').hide();
    $('#myForm div.group:nth-child(1)').show();

    $('#btnNext').on('click', function (event) {
        event.preventDefault();
        handleClick();
    });
});

function handleClick() {
    if (q < qMax) {
        $('#myForm div.group:nth-child(' + q + ')').hide();
        $('#myForm div.group:nth-child(' + (q + 1) + ')').fadeIn();
        if (q == (qMax - 1)) {
            $('#btnNext').html('Review All');
        }
        q++;
      $('.count').html(q + '/' + qMax);
    } else {
      $('.group').show();
      $('#btnNext').hide();
      $('#btnSubmit').show();
    }
}
