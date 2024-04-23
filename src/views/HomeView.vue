<script setup lang="ts">

</script>
<template>
  <div class="navbar navbar-expand-md navbar-dark bg-dark mb-4" role="navigation">
    <a class="navbar-brand" href="#">Bootstrap 4 NavBar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://fontenele.github.io/bootstrap-navbar-dropdowns/" target="_blank">Github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Dropdown1</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown1">
            <li class="dropdown-item" href="#"><a>Action 1</a></li>
            <li class="dropdown-item dropdown">
              <a class="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">Dropdown1.1</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown1-1">
                <li class="dropdown-item" href="#"><a>Action 1.1</a></li>
                <li class="dropdown-item dropdown">
                  <a class="dropdown-toggle" id="dropdown1-1-1" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Dropdown1.1.1</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown1-1-1">
                    <li class="dropdown-item" href="#"><a>Action 1.1.1</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Dropdown2</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown2">
            <li class="dropdown-item" href="#"><a>Action 2 A</a></li>
            <li class="dropdown-item" href="#"><a>Action 2 B</a></li>
            <li class="dropdown-item" href="#"><a>Action 2 C</a></li>
            <li class="dropdown-item dropdown">
              <a class="dropdown-toggle" id="dropdown2-1" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">Dropdown2.1</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown2-1">
                <li class="dropdown-item" href="#"><a>Action 2.1 A</a></li>
                <li class="dropdown-item" href="#"><a>Action 2.1 B</a></li>
                <li class="dropdown-item" href="#"><a>Action 2.1 C</a></li>
                <li class="dropdown-item dropdown">
                  <a class="dropdown-toggle" id="dropdown2-1-1" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Dropdown2.1.1</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown2-1-1">
                    <li class="dropdown-item" href="#"><a>Action 2.1.1 A</a></li>
                    <li class="dropdown-item" href="#"><a>Action 2.1.1 B</a></li>
                    <li class="dropdown-item" href="#"><a>Action 2.1.1 C</a></li>
                  </ul>
                </li>
                <li class="dropdown-item dropdown">
                  <a class="dropdown-toggle" id="dropdown2-1-2" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Dropdown2.1.2</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown2-1-2">
                    <li class="dropdown-item" href="#"><a>Action 2.1.2 A</a></li>
                    <li class="dropdown-item" href="#"><a>Action 2.1.2 B</a></li>
                    <li class="dropdown-item" href="#"><a>Action 2.1.2 C</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>

  <main role="main" class="container">
    <div class="jumbotron text-center">
      <h1>Bootstrap 4 NavBar</h1>
      <p class="lead text-info">NavBar with too many childs.</p>
      <a href="http://fontenele.github.io/bootstrap-navbar-dropdowns/">Github</a>
    </div>
  </main>
</template>

<style>
:root {
  --darkgreen: #005361;
  --white: #fff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
.tabs-to-dropdown .dropdown-toggle,
.tabs-to-dropdown .dropdown-item {
  font-size: 1.3rem;
}

.tabs-to-dropdown .nav-wrapper {
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.12);
}

.tabs-to-dropdown .nav-wrapper a {
  color: var(--darkgreen);
}

.tabs-to-dropdown .nav-pills .nav-link.active {
  background-color: var(--darkgreen);
}

.tabs-to-dropdown .nav-pills li:not(:last-child) {
  margin-right: 30px;
}

.tabs-to-dropdown .tab-content .container-fluid {
  max-width: 1250px;
  padding-top: 70px;
  padding-bottom: 70px;
}

.tabs-to-dropdown .dropdown-menu {
  border: none;
  box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.08);
}

.tabs-to-dropdown .dropdown-item {
  padding: 14px 28px;
}

.tabs-to-dropdown .dropdown-item:active {
  color: var(--white);
}

@media (min-width: 1280px) {
  .tabs-to-dropdown .nav-wrapper {
    padding: 15px 30px;
  }
}


/* FOOTER STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-footer {
  position: fixed;
  right: 15px;
  bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 5px;
  background: var(--white);
}

.page-footer a {
  margin-left: 4px;
}
</style>
