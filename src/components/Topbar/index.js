import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';
import { GoLocation } from 'react-icons/go';
import { BsSpeedometer2, BsPerson } from 'react-icons/bs';
import { TiWaves } from 'react-icons/ti';

const cx = classNames.bind(styles);

function Topbar() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('wrapTopbar')}>
                <div className={cx('topbarList')}>
                    <p>
                        <span>
                            <a>SUPER DEALS</a>
                        </span>
                        <span>
                            <a>FEAUTURED BRANDS</a>
                        </span>
                        <span>
                            <a>TRENDING STYLES</a>
                        </span>
                        <span>
                            <a>GIFT CARDS</a>
                        </span>
                    </p>
                </div>
                <div className={cx('topbarList')}>
                    <p>
                        <span>
                            <a>
                                <GoLocation />
                                <span className={cx('topbarText')}>STORE LOCATOR</span>
                            </a>
                        </span>
                        <span>
                            <a>
                                <BsSpeedometer2 />
                                <span className={cx('topbarText')}>TRACK YOUR ORDER</span>
                            </a>
                        </span>
                        <span>
                            <a>
                                <BsPerson />
                                <span className={cx('topbarText')}>MY ACCOUNT</span>
                            </a>
                        </span>
                        <span className={cx('topbarText')}>
                            <TiWaves className={cx('main-icon')} />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Topbar;
