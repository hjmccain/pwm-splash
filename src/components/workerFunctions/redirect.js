export const redirect = () => {

  console.log('Redirecting...');
  const label = '?switch_url='
  const search = window.location.search;
  const redirectUrl = search.replace(label, '');
  window.location = redirectUrl;

}
