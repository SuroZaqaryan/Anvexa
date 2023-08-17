<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'

const showSubcontent = ref(false);
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="header-service">
        <div class="header-logo"><img src="@/assets/icons/logo.png" /></div>

        <nav class="header-links">
          <RouterLink to="#" @mouseover="showSubcontent = true" @mouseleave="showSubcontent = false">
            Поддержка
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1L6.00081 5.58L11 1" stroke="#0A090B" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </RouterLink>

          <RouterLink to="#" @mouseover="showSubcontent = true" @mouseleave="showSubcontent = false">
            Развитие
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1L6.00081 5.58L11 1" stroke="#0A090B" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </RouterLink>

          <RouterLink to="#">Цены</RouterLink>
          <RouterLink to="#">Компания</RouterLink>
        </nav>

        <Transition v-show="showSubcontent">
          <div class="service-subcontent">
            <div>
              <div class="subcontent-block">
                <div><img src="@/assets/icons/support.svg" /></div>

                <div class="service-desc">
                  <p>Поддержка на битрикс</p>
                  <span>Скидка 30% процентов на SEO</span>
                </div>
              </div>

              <div class="subcontent-block">
                <div><img src="@/assets/icons/drive.svg" /></div>

                <div class="service-desc">
                  <p>Серверная поддержка</p>
                  <span>Скидка 30% процентов на SEO</span>
                </div>
              </div>
            </div>

            <div>
              <div class="subcontent-block">
                <div><img src="@/assets/icons/chat.svg" /></div>

                <div class="service-desc">
                  <p>Поддержка частые вопросы</p>
                  <span>Скидка 30% процентов на SEO</span>
                </div>
              </div>

              <div class="subcontent-block">
                <div><img src="@/assets/icons/defense.svg" /></div>

                <div class="service-desc">
                  <p>Защита сайта от вирусов</p>
                  <span>Скидка 30% процентов на SEO</span>
                </div>
              </div>
            </div>

            <div>
              <div class="subcontent-block">
                <div><img src="@/assets/icons/support.svg" /></div>

                <div class="service-desc">
                  <p>Поддержка сайта на самописе</p>
                  <span>Скидка 30% процентов на SEO</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="header-info">
        <div class="header-contacts">
          <img src="@/assets/icons/phone.svg" />

          <address>
            <p>+7 (495) 131-9038</p>
            <span>Москва</span>
          </address>
        </div>

        <button>
          Оставить заявку
          <img src="@/assets/icons/send.svg" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  min-height: 95px;
  padding: 0 50px;
  background-color: #fff;

  .header-wrapper {
    position: relative;
    width: 1352px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .header-service {
      display: flex;
      align-items: center;

      .header-logo {
        display: flex;
        margin-right: 50px;
      }

      .header-links {
        display: flex;
        align-items: center;
        gap: 8px;

        a {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #000000;
          font-family: 'Raleway-SemiBold';
          text-decoration: none;
          padding: 10px;
          border-radius: 8px;
          font-size: 17px;

          svg {
            transition: 0.4s;
          }

          &:hover {
            background-color: #E5EDED;
            color: #5EAEAE;

            svg {
              transform: rotateX(180deg);

              path {
                stroke: #5EAEAE;
              }
            }
          }
        }
      }

      .service-subcontent {
        position: absolute;
        top: 0;
        margin-top: 5.5rem;
        width: 944px;
        max-width: 100%;
        border-radius: 12px;
        padding: 50px 60px;
        box-shadow: 0px 6px 80px 0px rgba(0, 0, 0, 0.12);
        background-color: #fff;
        z-index: 10;

        >div {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .subcontent-block {
            display: flex;
            align-items: center;
            flex-basis: 393px;
            gap: 10px;
            padding: 12px;

            .service-desc {
              p {
                margin-bottom: 6px;
                font-size: 20px;
                font-family: 'Raleway-Bold';
              }

              span {
                font-size: 16px;
                font-family: 'Raleway-SemiBold';
                color: #525252;
              }
            }
          }
        }
      }
    }

    .header-info {
      display: flex;
      align-items: center;

      .header-contacts {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-right: 40px;

        address {
          p {
            font-family: 'Raleway-Bold';
            font-style: normal;
            font-size: 16px;
            @extend .raleway-numerals;
          }

          span {
            font-family: 'Raleway-Regular';
            color: #525252;
            font-size: 16px;
            font-style: normal;
          }
        }
      }

      button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
        height: 46px;
        padding: 13px 20px;
        background-color: #5EAEAE;
        border-radius: 8px;
        border: none;
        color: #fff;
        font-family: 'Raleway-SemiBold';
        font-size: 16px;
        @include shake-animation('#dfefef')
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  header .header-wrapper {
    width: 1210px;
  }
}</style>