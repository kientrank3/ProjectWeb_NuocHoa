const header = document.querySelector("#header");
header.outerHTML = `<header class="header" id="header">
<div class="header_navbar_col_search">
    <form action="" class="search">
        <input type="text" placeholder="Tìm Kiếm Sản Phẩm..."  >
        <button class="searchbutton">
            <i class="fa-solid fa-magnifying-glass" ></i>
        </button>
    </form>
</div>
<div class="header_navbar_logo">
    <a href=""><img src="/img/logo.png" alt="logo"> </a>
</div>
<div class="header_navbar_hidden">
    <div class="header_navbar_login">
        <div class="header_navbar_loginbutton">
            <p style="margin-bottom: 5px;"> Xin Chào Quý Khách </p>
            <a href="">Đăng nhập</a> <small>hoặc</small> <a href="">Đăng ký</a>
        </div>
    </div>
    <div class="header_navbar_heartcart">
    <a href="">
        <i class="fa-regular fa-heart" style="font-size: 25px;"></i>
    </a>
    </div>
    <div class="header_navbar_cart">
        <a href="">
            <i class="fa-sharp fa-regular fa-cart-plus" style="font-size: 23px;"></i>
        </a>
    </div>
</div>
</header>`