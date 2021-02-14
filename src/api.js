
export const getApi=()=>{
return fetch('https://api.spacex.land/graphql?query={launches(limit: 10){links{flickr_images}}}')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
}