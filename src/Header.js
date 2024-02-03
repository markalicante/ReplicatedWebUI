function Header() {
  return (
    <div>
      <div class="header-notice">
        <div class="header_row">
          <div class="head_carousel">
            <div class="carousel-arrow carousel-left-arrow icon">
              <img
                data-perfmatters-preload="1"
                width="24"
                height="24"
                src="https://en.akkogear.com/wp-content/themes/xtra/assets/left-arrow.svg"
              ></img>
            </div>
            <div className="carousel-outer">
              <div className="carousel-inner">
                <div className="carousel-item">
                  Free shipping over USD$199.{" "}
                </div>
              </div>
            </div>
            <div class="carousel-arrow carousel-right-arrow icon">
              <img
                data-perfmatters-preload="2"
                width="24"
                height="24"
                src="https://en.akkogear.com/wp-content/themes/xtra/assets/right-arrow.svg"
              ></img>
            </div>
          </div>
          <div class="social_icon">
            <a href="https://discord.gg/akko" rel="noreferrer noopener">
              <img
                width="24"
                height="24"
                src="https://en.akkogear.com/wp-content/themes/xtra/assets/discord.svg"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div class="akko_head  cz_sticky_h">
        <div class="akko_sub_nav_menu">
          <div class="row elms_row">
            <div class="akko_nav_ul nav_product"></div>
            <div class="akko_nav_ul nav_support"></div>
          </div>
        </div>

        <div class="row elms_row">
          <div class="clr">
            <a href="https://en.akkogear.com">
              <div class="akko_logo">
                <img
                  class="logo_black"
                  src="https://en.akkogear.com/wp-content/themes/xtra/img/akko-logo.svg"
                  alt="Akko Official Global Site"
                ></img>
              </div>
            </a>

            <div class="akko_cart">
              <div class="elms_shop_cart akko_cart_icon elms_shop_cart ">
                <a href="/cart/">
                  <img src="https://en.akkogear.com/wp-content/themes/xtra/assets/ak_cart.svg"></img>
                </a>
                <div class="cz_cart">
                  <div class="cz_cart_items">
                    <div>
                      <div class="cart_list">
                        <div class="item_small xtra-empty-cart">
                          No products in the cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" akko_cart_icon">
                <a href="/my-account/">
                  <img src="https://en.akkogear.com/wp-content/themes/xtra/assets/ak_account.svg"></img>
                </a>
              </div>

              <div class="akko_cart_icon">
                <a href="/search/">
                  <i>
                    <img src="https://en.akkogear.com/wp-content/themes/xtra/assets/ak_search.svg"></img>
                  </i>
                </a>
                <div class="outer_search">
                  <div class="search">
                    <div class="ajax_search_results"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="akko_menu">
              <li
                class="akko_nav"
                tab-target="akko_sub_nav_menu"
                cat="nav_product"
              >
                Product<i class="cz_indicator fa fa-angle-down"></i>
              </li>
              <li
                class="akko_nav"
                tab-target="akko_sub_nav_menu"
                cat="nav_support"
              >
                Support<i class="cz_indicator fa fa-angle-down"></i>
              </li>

              <li>
                <a href="/about/">Our Story</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/akko-outlet-deals/">Deals</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
