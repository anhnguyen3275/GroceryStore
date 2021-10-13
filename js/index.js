/* eslint-disable no-undef */
/*
$(document).ready(function() {
    const $body = $('body');
    $.get('/components/header1.html', data => { $body.append(data);
        $body.append(data) })
    $.get('/components/header2.html', data => { $body.append(data);
        $body.append(data) })
    $.get('/components/footer.html', data => { $body.append(data);
        $body.append(data) })
});
*/

$(function() {
    $("#header1").load("components/header1.html");

});

