/**
 * The block of code below runs on every page click
 * If the terms haven't been accepted yet and we aren't on the home page,
 * it will redirect us back to the home page
 */
const termsaccepted = getCookie("termsAccepted") == "true";
console.log(getCookie("termsAccepted"));
const notHomePage = !window.location.href.includes("index");
console.log("not home page?", notHomePage);
console.log("terms accepted?", termsaccepted);

if (!termsaccepted && notHomePage) {
  window.location.replace("index.html");
}

function setTermsAccepted() {
  setCookie("termsAccepted", "true");
  console.log("set the terms accepted");
  /*window.location.href = "content.html";*/
}

/**
 * Simple function for setting a cookie. All cookies are set to
 * expire each month
 *
 * @param {string} cname the cookie name
 * @param {string} cvalue the cookie value
 */
function setCookie(cname, cvalue) {
  // Make our cookies delete every month
  const expdays = 31;
  var d = new Date();
  d.setTime(d.getTime() + expdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(document.cookie)
}

/**
 * Getter for cookies
 *
 * @param {string} cname the name of the cookie
 */
function getCookie(cname) {
  var name = cname + "=";
  console.log(document.cookie)
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
