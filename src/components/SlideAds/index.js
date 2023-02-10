import styles from './SlideAds.module.scss';
import classNames from 'classnames/bind';

import saleImg from '../../assets/img/saleImg.png';
import { slideData } from '../../assets/dataStore/SlideData';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SlideAds() {
    const [indexSlide, setIndexSlide] = useState(0);
    const slideAPI = slideData.slide;
    let index = 1;

    const handelLeft = () => {
        index--;
        if (index < 0) {
            index = slideAPI.length - 1;
        }

        setIndexSlide(index);
    };

    const handelRight = () => {
        index++;
        if (index > slideAPI.length - 1) {
            index = 0;
        }
        setIndexSlide(index);
    };

    // useEffect(() => {
    //     setInterval(() => {
    //         index = Math.floor(Math.random() * 3);
    //         console.log(index);
    //     }, 3000);
    // }, [index]);

    return (
        <div className={cx('containerSlide')}>
            <div className={cx('wrapSlide')}>
                <div className={cx('leftArea')} onClick={() => handelLeft()}>
                    <BsArrowLeftCircle />
                </div>
                <div className={cx('mainSlide')}>
                    <div className={cx('descrSlide')}>
                        <div className={cx('descrTitle')}>
                            <span>
                                {slideAPI[indexSlide].title}
                                <h1>{slideAPI[indexSlide].titleRest}</h1>
                            </span>
                        </div>
                        <div className={cx('descrmnWrap')}>
                            <span className={cx('descrmn')}>{slideAPI[indexSlide].decription}</span>
                        </div>
                        <span>
                            <a>Shop Now</a>
                        </span>
                    </div>
                    <div className={cx('imgSlide')}>
                        <div className={cx('imgMain')}>
                            <img src={slideAPI[indexSlide].img} />
                        </div>
                        <div className={cx('imgSale')}>
                            <img src={saleImg} />
                        </div>
                    </div>
                </div>
                <div className={cx('rightArea')} onClick={() => handelRight()}>
                    <BsArrowRightCircle />
                </div>
            </div>
        </div>
    ); //435
}
export default SlideAds;
