$(() => {

  const button = $('.button');
  const countryList = $('a');

  countryList.on('click', () => {
    console.log('here you are');
  });

  button.on('click',() => {
    console.log('you have clicked');
  });

  $('#map-africa').CSSMap({
    'size': 650,
    'cities': true,
    'mapStyle': 'black',
    'agentsList': {
      'enable': true,
      'agentsList': '#kenya'
    }
  });

});
