import classNames from 'classnames/bind';
import styles from './MenuArea.module.scss';

const cx = classNames.bind(styles);
function MenuArea() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapMenu')}>
                <div className={cx('leftMenu')}>
                    <div>
                        <span>Home</span>
                    </div>
                    <div className={cx('wrapItem')}>
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
                    <div>
                        <span>Shop</span>
                    </div>
                    <div>
                        <span>Blog</span>
                    </div>
                    <div>
                        <span>Element</span>
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
