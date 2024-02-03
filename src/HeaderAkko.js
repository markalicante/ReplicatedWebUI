import Header from "./Header";

function HeaderAkko() {
  return (
    <div class="akko_head  cz_sticky_h">
      <div class="akko_sub_nav_menu">
        <div class="row elms_row">
          <div class="akko_nav_ul nav_product">
            <div class="akko_nav_ul nav_support">
              <li class="akko_sub_menu_li"></li>

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
    </div>
  );
}

export default HeaderAkko;
