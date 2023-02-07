import classNames from 'classnames/bind';
import styles from './LogoArea.module.scss';
import logo from '../../assets/img/logo-default.png';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { FiHeart, FiCodepen } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { useState } from 'react';

const cx = classNames.bind(styles);

function LogoArea() {
    const [category, setCategory] = useState(false);
    const handelCategory = () => {
        setCategory(!category);
    };
    const [itemCategory, setItemcategory] = useState('All Categories');
    return (
        <div className={cx('container')}>
            <div className={cx('wrap-logo')}>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <div className={cx('searchCatg')}>
                    <form className={cx('searchCatgForm')}>
                        <div className={cx('category')} onClick={handelCategory}>
                            <span>{itemCategory}</span>
                            <span>
                                <AiOutlineDownCircle />
                            </span>
                            {category && (
                                <div className={cx('categoryList')}>
                                    <ul
                                        className={cx('categoryItems')}
                                        onClick={(item) => {
                                            setItemcategory(item.target.textContent);
                                        }}
                                    >
                                        <li>All Categories</li>
                                        <li>Android</li>
                                        <li>Book&Audio</li>
                                        <li>Computers</li>
                                        <li>Phone</li>
                                        <li>Office</li>
                                        <li>Technology</li>
                                        <li>Movies</li>
                                        <li>Headphone</li>
                                        <li>Gadgets</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <input
                            className={cx('twitter-typeahead')}
                            spellCheck="false"
                            placeholder="Search for Product..."
                        />
                        <button className={cx('search-submit')}>
                            <BiSearchAlt />
                        </button>
                    </form>
                </div>
                <div className={cx('option')}>
                    <div className={cx('compareProducs')}>
                        <FiCodepen />
                    </div>
                    <div className={cx('heartStore')}>
                        <FiHeart />
                    </div>
                    <div className={cx('cart')}>
                        <BsCart3 />
                        <div className={cx('addItem')}>3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogoArea;
