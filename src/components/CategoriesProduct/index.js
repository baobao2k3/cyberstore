import styles from './CategoriesProduct.module.scss';
import classNames from 'classnames/bind';
import { FiHeart, FiCodepen } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { productData } from '../../assets/dataStore/SlideData';
import { useState } from 'react';
const cx = classNames.bind(styles);
function CategoriesProduct() {
    const [heart, setHeart] = useState(false);
    return (
        <div className={cx('Container')}>
            <div className={cx('wrapMain')}>
                <div className={cx('categoriesMenu')}>
                    <ul>
                        <h4>Categories</h4>
                        <li>Products</li>
                        <li>Laptop & Tablet</li>
                        <li>Computers</li>
                        <li>Camera & Video</li>
                        <li>HeadPhones</li>
                        <li>Office</li>
                        <li>Home Appliances</li>
                        <li>Phones</li>
                        <li>Books & Audio</li>
                        <li>Gadgets</li>
                    </ul>
                    <ul>
                        <h4>Sort By</h4>
                        <li>Default</li>
                        <li>Popularity</li>
                        <li>Average rating</li>
                        <li>Newness</li>
                        <li>Price: Low to High</li>
                        <li>Price: High to Low</li>
                    </ul>
                    <ul>
                        <h4>Price Range</h4>
                        <li>All</li>
                        <li>$0-$200</li>
                        <li>$200-$400</li>
                        <li>$400-$600</li>
                        <li>$600-$800</li>
                        <li>$800+</li>
                    </ul>
                </div>
                <div className={cx('categoriesListItem')}>
                    {productData.Product.map((item) => (
                        <div className={cx('categoriesItem')}>
                            <div className={cx('headerItem')}>
                                <span className={cx('typeItem')}>{item.typeProduct}</span>
                                <div className={cx('adjustItem')}>
                                    <span>
                                        <FiCodepen />
                                    </span>
                                    <span
                                        onClick={() => {
                                            setHeart(!heart);
                                        }}
                                        className={heart && cx('redBk')}
                                    >
                                        <AiFillHeart />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('imgItem')}>
                                <img src={item.imgProduct} />
                            </div>
                            <div className={cx('desItem')}>
                                <div className={cx('desItemStar')}>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <h5>{item.nameProduct}</h5>
                            </div>
                            <div className={cx('cartItems')}>
                                <span>${item.costProduct}</span>
                                <span>
                                    <FiShoppingCart />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default CategoriesProduct;
