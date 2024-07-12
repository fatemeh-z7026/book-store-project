// import router from "./router.js";

document.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.className.includes("nav-link")) {
    console.log(" Not spa");
  } else {
    urlRoute(event);
  }
});

function urlRoute(event) {
  window.history.pushState({}, "", event.target.href);
  locationHandler();
}

async function locationHandler() {
  const loc = window.location.pathname;
  const route = router[loc];
  const html = await fetch(route.template).then((res) => res.text());
  document.querySelector("#content").innerHTML = html;
}
window.onpopstate = locationHandler;
