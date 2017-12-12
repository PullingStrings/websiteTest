$(() => {

  const button = $('button');

  button.on('click',() => {
    console.log('you have clicked');
  });

  $('#map-africa').CSSMap({
    'size': 1450,
    'cities': true
  });

});
