$logo = $('.logo');
$search = $('.search-box');
$file = $('.file li');
$files = $('.files');

$logo.velocity('transition.slideDownIn', {duration: 1400});
$search.velocity('transition.slideUpIn', {duration: 1400});
$file.velocity('transition.slideUpIn', {stagger: 250, duration: 750});

$search.on('click', function() {
  console.log(count);
});
