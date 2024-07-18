
const Footer = () => {
return(
    <footer className="bg-gray-100 p-4">
        <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <h3 className="font-bold">Buy</h3>
            <ul>
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">eBay Money Back Guarantee</a>
              </li>
              <li>
                <a href="#">Bidding & Buying Help</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Sell</h3>
            <ul>
              <li>
                <a href="#">Start Selling</a>
              </li>
              <li>
                <a href="#">Learn to Sell</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Stay Connected</h3>
            <ul>
              <li>
                <a href="#">eBay's Blogs</a>
              </li>
              <li>
                <a href="#"> Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">About eBay</h3>
            <ul>
              <li>
                <a href="#">Company Info</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Government Relations</a>
              </li>
              <li>
                <a href="#">Advertise with Us</a>
              </li>
              <li>
                <a href="#">Policies</a>
              </li>
              <li>
                <a href="#">Verified Rights Owner (VeRO) Program</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
)
}

export default Footer