import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import img1 from '../../assets/img/footer-top-img-1-1.png';
import img2 from '../../assets/img/footer-top-img-2.png';
import img3 from '../../assets/img/footer-top-img-3.png';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapFooter')}>
                <div className={cx('footerInfor')}>
                    <div className={cx('contact')}>
                        <div className={cx('contactItem')}>
                            <img className={cx('imgItem')} src={img1} />
                            <div className={cx('inforItem')}>
                                <span>Call Center</span>
                                <a>734 555.1212</a>
                            </div>
                        </div>

                        <div className={cx('contactItem')}>
                            <img className={cx('imgItem')} src={img2} />
                            <div className={cx('inforItem')}>
                                <span>Free Delivery</span>
                                <h6>Free delivery on the territory of USA for all amounts over $100</h6>
                            </div>
                        </div>

                        <div className={cx('contactItem')}>
                            <img className={cx('imgItem')} src={img3} />
                            <div className={cx('inforItem')}>
                                <span>Gift Cards</span>
                                <a>SAVE UP TO 20%</a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('about')}>
                        <ul>
                            <h3>Get to Know Us</h3>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Stores</li>
                            <li>Contact Us</li>
                            <li>Order Tracking</li>
                        </ul>
                        <ul>
                            <h3>Get to Know Us</h3>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Stores</li>
                            <li>Contact Us</li>
                            <li>Order Tracking</li>
                        </ul>
                        <ul>
                            <h3>Get to Know Us</h3>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Stores</li>
                            <li>Contact Us</li>
                            <li>Order Tracking</li>
                        </ul>
                        <ul>
                            <h3>Get to Know Us</h3>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Stores</li>
                            <li>Contact Us</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('footerDes')}></div>
            </div>
        </div>
    );
}
export default Footer;
