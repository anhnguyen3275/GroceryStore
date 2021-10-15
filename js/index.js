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

$.get('header1.html', {}, function(response) { 
    $('div#header1').append(response);
  });

  $.get('footer.html', {}, function(response) { 
    $('div#footer').append(response);
  });

