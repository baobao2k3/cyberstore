import classNames from 'classnames/bind';
import styles from './MenuArea.module.scss';

const cx = classNames.bind(styles);
function MenuArea() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapMenu')}>
                <div className={cx('leftMenu')}>
                    <div className={cx('items')}>
                        <span>Home</span>
                    </div>
                    <div className={cx('wrapItem', 'items')}>
                        <span>Pages</span>
                        <ul className={cx('listItem')}>
                            <li>About us</li>
                            <li>Our Team</li>
                            <li>Our Services</li>
                            <li>Pricing Plans</li>
                            <li>Store Locator</li>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Coming Soon</li>
                            <li>FAQ</li>
                            <li>404 Error Page</li>
                        </ul>
                    </div>
                    <div className={cx('WrapBigItem', 'items')}>
                        <span>Shop</span>
                        <ul className={cx('listBigItem')}>
                            <li>
                                <h3>Product Types</h3>
                                <ul>
                                    <li>Standard</li>
                                    <li>Variable</li>
                                    <li>Grouped</li>
                                    <li>External</li>
                                    <li>Downloadable</li>
                                    <li>Virtual</li>
                                    <li>New Product</li>
                                    <li>Out Of Stock</li>
                                    <li>On Sale Product</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Shop Types</h3>
                                <ul>
                                    <li>Left Filter</li>
                                    <li>Top Filter</li>
                                    <li>With Sidebar</li>
                                    <li>Without Sidebar</li>
                                    <li>Masonry</li>
                                    <li>Carousel</li>
                                    <li>Shop Blocks</li>
                                    <li>Categories</li>
                                    <li>Single Category</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Shop Pages</h3>
                                <ul>
                                    <li>My account</li>
                                    <li>Cart</li>
                                    <li>Checkout</li>
                                    <li>Orders</li>
                                    <li>Order Tracking</li>
                                    <li>Wishlist</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Shop Layouts</h3>
                                <ul>
                                    <li>Two Columns Grid</li>
                                    <li>Three Columns Grid</li>
                                    <li>Four Columns Grid</li>
                                    <li>Four Columns Wide</li>
                                    <li>Five Columns Wide</li>
                                    <li>Six Columns Wide</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('wrapItem', 'items')}>
                        <span>Blog</span>
                        <ul className={cx('listItem')}>
                            <li>Masonry List</li>
                            <li>Standard List</li>
                            <li>Post Types</li>
                        </ul>
                    </div>

                    <div className={cx('WrapBigItem', 'items')}>
                        <span>Element</span>
                        <ul className={cx('listBigItem')}>
                            <li>
                                <h3>Shop Shortcodes</h3>
                                <ul>
                                    <li>Banner</li>
                                    <li>Product List</li>
                                    <li>Simple List</li>
                                    <li>Advanced List</li>
                                    <li>Product Carousel</li>
                                    <li>Product Slider</li>
                                    <li>Value Deal</li>
                                    <li>Value Deal Slider</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Classic</h3>
                                <ul>
                                    <li>Accordions & Toggles</li>
                                    <li>Blockquote</li>
                                    <li>Buttonsr</li>
                                    <li>Contact Form</li>
                                    <li>Google Map</li>
                                    <li>Separators</li>
                                    <li>Tabs</li>
                                    <li>Typography</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Infographic</h3>
                                <ul>
                                    <li>Comparison Tables</li>
                                    <li>Countdown</li>
                                    <li>Counters</li>
                                    <li>Pie Charts</li>
                                    <li>Processg</li>
                                    <li>Progress Bart</li>
                                    <li>Pricing Item</li>
                                    <li>Pricing Tables</li>
                                </ul>
                            </li>
                            <li>
                                <h3>Presentation</h3>
                                <ul>
                                    <li>Clients</li>
                                    <li>Blog Listd</li>
                                    <li>Image Gallery</li>
                                    <li>Hover Image with Text</li>
                                    <li>Image Carousel</li>
                                    <li>Team</li>
                                    <li>Testimonials</li>
                                    <li>Video Button</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('rightMenu')}>
                    <span className={cx('contact')}>Call us toll free: (+1)866-504-3229</span>
                </div>
            </div>
        </div>
    );
}
export default MenuArea;
