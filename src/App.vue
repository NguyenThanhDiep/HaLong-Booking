<template>
  <div
    id="app"
    class="overflow-hidden"
  >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
      <div class="row align-items-center">
        <div class="col-6 p-3 px-5 text-left">
          <h3 class="text-nowrap">
            <router-link to="/">
              Halong Booking
            </router-link>
          </h3>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <div class="p-3 font-weight-bold d-none d-xl-block overflow-hidden text-nowrap">
            Hướng dẫn du lịch
          </div>
          <div class="p-3 d-none d-md-block overflow-hidden text-nowrap">
            <a href="tel:84963489262"><i class="fas fa-phone-alt"></i> (849) 6348 9262</a>
          </div>
          <div class="p-3 d-none d-md-block overflow-hidden text-nowrap">
            <a href="mailto:contact@halongbooking.com"><i class="fas fa-envelope"></i> contact@halongbooking.com</a>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <footer>
      <div class="d-flex flex-wrap p-3">
        <div class="mr-auto">
          <h3 class="font-weight-bold">
            Halong Booking
          </h3>
          <div>Copyright 2019 triavo | Bảo lưu bản quyền.</div>
        </div>
        <div class="mx-5 text-left d-none d-lg-block">
          <h5 class="font-weight-bold">
            Hướng dẫn du lịch
          </h5>
          <div class="mb-1">
            Cảnh đẹp ở Hạ Long
          </div>
          <div>Món ăn ngon ở Hạ Long</div>
        </div>
        <div class="mx-5 text-left d-none d-md-block">
          <h5 class="font-weight-bold">
            Liên hệ
          </h5>
          <div class="mb-1">
            <a
              href="tel:84963489262"
              class="white"
            ><i class="fas fa-phone-alt"></i> (849) 6348 9262
            </a>
          </div>
          <div>
            <a 
              href="mailto:contact@halongbooking.com" 
              class="white"
            ><i class="fas fa-envelope"></i> contact@halongbooking.com
            </a>
          </div>
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
  color: #0000cc;
}
</style>
