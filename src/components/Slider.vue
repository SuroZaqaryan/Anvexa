<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import TitleDescription from '@/components/TitleDescription.vue'

const carouselSlider = ref(null);

const breakpointsSlider = ref({
  0: {
    itemsToShow: 1,
    snapAlign: 'center',
  },

  768: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },

  998: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },

  1500: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },

  1600: {
    itemsToShow: 3,
    snapAlign: 'center',
  },

  1700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
})
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-description">
      <img class="ornament" src="@/assets/icons/ornament.svg" />

      <TitleDescription class="mx-auto" title="Проекты Анвекса" />

      <h2 class="title-lg text-center">
        С нами работают как не большие <br /> компании, так и <span>лидеры</span> рынка
      </h2>
    </div>

    <div class="slider-carousel">
      <Carousel :items-to-show="3.5" :wrap-around="true" :breakpoints="breakpointsSlider" ref="carouselSlider">
        <Slide key="slide1">
          <div class="slider-item">
            <img class="slider-image-preview"
              src="https://borlabs.io/wp-content/uploads/2019/03/blog-gutenberg-screenshot-1-en-1024x617.png" />

            <div class="slider-image-desc">
              <div class="slider-image">
                <div class="slider-logo">
                  <img src="@/assets/images/Protex.png" />
                </div>

                <div class="slider-popup">
                  <p>Вместе с 2021</p>
                </div>
              </div>

              <div class="slider-title">
                <h3>ПРОТЕХ</h3>
                <p>Полная техническая поддержка магазина мото товаров</p>
              </div>
            </div>

            <ul class="slider-hashtags">
              <li>#битрикс</li>
              <li>#Корпоративный сайт</li>
            </ul>

            <div class="slider-info">
              <p>
                За годы работы переработали все что возможно, от смены движка сайтов, до создания
                сложных систем и интеграций
              </p>
            </div>
          </div>
        </Slide>

        <Slide key="slide2">
          <div class="slider-item">
            <img class="slider-image-preview" src="https://i.ibb.co/fSpW8Kc/1.png" />

            <div class="slider-image-desc">
              <div class="slider-image">
                <div class="slider-logo">
                  <img src="@/assets/images/ProFlag.png" />
                </div>

                <div class="slider-popup">
                  <p>Вместе с 2021</p>
                </div>
              </div>

              <div class="slider-title">
                <h3>ПроФлаг</h3>
                <p>Полная техническая поддержка магазина мото товаров</p>
              </div>
            </div>

            <ul class="slider-hashtags">
              <li>#битрикс</li>
              <li>#Корпоративный сайт</li>
            </ul>

            <div class="slider-info">
              <p>
                За годы работы переработали все что возможно, от смены движка сайтов, до создания
                сложных систем и интеграций
              </p>
            </div>
          </div>
        </Slide>

        <Slide key="slide3">
          <div class="slider-item">
            <img class="slider-image-preview" src="https://wordpress.org/gutenberg/files/2022/06/screenshot.png" />

            <div class="slider-image-desc">
              <div class="slider-image">
                <div class="slider-logo">
                  <img src="@/assets/images/Motorrika.png" />
                </div>

                <div class="slider-popup">
                  <p>Вместе с 2021</p>
                </div>
              </div>

              <div class="slider-title">
                <h3>ПРОТЕХ</h3>
                <p>Полная техническая поддержка магазина мото товаров</p>
              </div>
            </div>

            <ul class="slider-hashtags">
              <li>#битрикс</li>
              <li>#Корпоративный сайт</li>
            </ul>

            <div class="slider-info">
              <p>
                За годы работы переработали все что возможно, от смены движка сайтов, до создания
                сложных систем и интеграций
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <button @click="carouselSlider.next()" class="carousel-prev">
            <img src="@/assets/icons/slider-arrow-right.svg" />
          </button>

          <button @click="carouselSlider.prev()" class="carousel-next">
            <img src="@/assets/icons/slider-arrow-left.svg" />
          </button>
        </template>
      </Carousel>
    </div>

    <div class="slider-statistics">
      <ul>
        <li>
          <p>5000</p>
          <span>Задач закрывается каждый <br /> день</span>
        </li>

        <li>
          <p>80%</p>
          <span>Клиентов работают с нами <br /> более 7 лет</span>
        </li>

        <li>
          <p>90</p>
          <span>Сайтов на комплексной <br /> поддержке</span>
        </li>

        <li>
          <p>150</p>
          <span>Компаний в год обращаются <br /> к нам</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider-wrapper {
  .slider-description {
    padding: 0 2rem;
  }

  .slider-carousel {
    position: relative;
    margin: auto;

    &::before {
      content: "";
      position: absolute;
      width: 270px;
      background: linear-gradient(90deg, #ffffffb5 0%, rgba(255, 255, 255, 0) 100%);
      left: 0;
      top: 0;
      height: 100%;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      width: 270px;
      background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0) 100%);
      right: 0;
      top: 0;
      height: 100%;
      transform: rotate(180deg);
      z-index: 1;
    }

    .carousel__slide {
      padding: 10px;
    }

    .slider-item {
      border-radius: 12px;
      border: 2px solid #F6F6F6;
      background: #FFF;
      cursor: context-menu;

      .slider-image-preview {
        max-width: 370px;
        height: 250px;
        position: absolute;
        left: 35%;
        top: -17%;
        border-radius: 8px;
        border: 2px solid #F8F8F8;
        transform: translateY(70%);
        transition: all 0.4s ease;
        opacity: 0;
        z-index: 10;
      }

      &:hover {
        .slider-image-preview {
          transform: translateY(0%);
          transform: rotate(8deg);
          opacity: 1;
        }

        .slider-info {
          background-color: #E5EDED;
        }
      }

      .slider-image-desc {
        padding: 35px 37px;

        .slider-image {
          display: flex;
          justify-content: space-between;

          .slider-logo {
            display: flex;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 10px;
            border: 2px solid #F6F6F6;

            img {
              width: 100%;
              max-width: 100%;
              border-radius: 10px;
            }
          }

          .slider-popup {
            border-radius: 56px;
            background: #F1E1D3;
            padding: 10px 14px;
            height: 36px;

            p {
              font-size: 14px;
              font-family: 'Raleway-SemiBold';
            }
          }
        }

        .slider-title {
          margin-top: 30px;
          text-align: left;

          h3 {
            font-family: 'Raleway-Bold';
            font-size: 32px;
          }

          p {
            color: #525252;
            font-size: 18px;
            margin-top: 3px;
          }
        }
      }

      .slider-hashtags {
        position: relative;
        top: 6.5rem;
        padding: 0 33px;
        display: flex;
        align-items: center;
        gap: 8px;

        li {
          border-radius: 56px;
          border: 1px solid #D8E3E3;
          padding: 10px 14px;
          font-size: 14px;
          font-family: 'Raleway-SemiBold';
          background-color: #fff;
        }
      }

      .slider-info {
        margin-top: 84px;
        background-color: #F6F6F6;
        padding: 54px 35px;

        p {
          color: #1E1E1E;
          font-family: 'Raleway-Regular';
          font-size: 22px;
          line-height: 40px;
          text-align: left;
        }
      }
    }
  }

  .slider-statistics {
    display: flex;
    justify-content: center;
    margin-top: 123px;

    ul {
      display: flex;
      align-items: center;
      gap: 21px;

      li {
        border-left: 2px solid;
        padding-left: 30px;

        p {
          font-size: 58px;
          font-family: 'Raleway-ExtraBold';
          @extend .raleway-numerals;
        }

        span {
          color: #525252;
          font-size: 18px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.slider-carousel {
  .carousel__viewport {
    height: 900px;
    display: flex;
    align-items: center;
  }

  .carousel-next {
    left: 20px;
  }

  .carousel-prev {
    right: 20px;
  }

  button {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 86px;
    height: 86px;
    border-radius: 43px;
    background: var(--white, #FFF);
    border: none;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
    z-index: 10;

    img {
      width: 30px;
    }
  }

  @media screen and (max-width: 1600px) {
    .carousel__viewport {
      height: 983px;
      display: flex;
      align-items: center;
    }
  }
}

.carousel {
  .publicity-controls {
    .carousel__pagination-button {
      &::after {
        width: 8px;
        height: 8px;
        border-radius: 30px;
        opacity: 0.2;
        background-color: #525252;
      }
    }

    .carousel__pagination-button--active {
      &::after {
        width: 38px;
        background: #5EAEAE !important;
        opacity: 1;
      }
    }
  }
}</style>