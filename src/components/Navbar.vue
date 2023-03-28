<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Carango Bom</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Barra de navegação</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link">Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/cadastro-marca" class="nav-link">Cadastrar Marca</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/cadastro-veiculos" class="nav-link">Cadastrar Veículo</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
