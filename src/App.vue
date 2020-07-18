<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
      <div class="d-flex">
        <div class="mr-auto p-3 px-5 font-weight-boldr">
          <h3>Halong Booking</h3>
        </div>
        <div class="p-3 font-weight-bold">Hướng dẫn du lịch</div>
        <div class="p-3"><i class="fas fa-phone-alt"></i> (849) 6348 9262</div>
        <div class="p-3">
          <i class="fas fa-envelope"></i> contact@halongbooking.com
        </div>
      </div>
    </header>
    <router-view />
    <footer>
      <div class="d-flex p-3">
        <div class="mr-auto">
          <h3 class="font-weight-bold">Halong Booking</h3>
          <div>Copyright 2019 triavo | Bảo lưu bản quyền.</div>
        </div>
        <div class="mx-5 text-left">
          <h5 class="font-weight-bold">Hướng dẫn du lịch</h5>
          <div class="mb-1">Cảnh đẹp ở Hạ Long</div>
          <div>Món ăn ngon ở Hạ Long</div>
        </div>
        <div class="mx-5 text-left">
          <h5 class="font-weight-bold">Liên hệ</h5>
          <div class="mb-1">
            <i class="fas fa-phone-alt"></i> (849) 6348 9262
          </div>
          <div><i class="fas fa-envelope"></i> contact@halongbooking.com</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
