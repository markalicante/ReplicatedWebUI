function Keyboard({ name, photoName, price, discountPrice }) {
  return (
    <div className="single">
      <div className="single_row">
        <img width={324} height={324} src={photoName} />
        <div className="akko_product_title_wrap">
          <div className="akko_product_title">{name}</div>
          <div className="akko_product_price_discount">{discountPrice}</div>
          <div className="akko_product_price" id="discount">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Keyboard;
