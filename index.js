let profileMenu = document.querySelector("#profileMenu");

      function toggleMenu() {
        profileMenu.classList.toggle("open_menu");
      }

      let sidebarActivity = document.getElementById("sidebarActivity");
      let moreLinks = document.getElementById("showmore_links");

      function toggleActivity() {
        sidebarActivity.classList.toggle("open_activity");
        if (sidebarActivity.classList.contains("open_activity")) {
          moreLinks.innerHTML = "show less <b> - </b>";
        } else {
          moreLinks.innerHTML = "show more <b> + </b>";
        }
      }