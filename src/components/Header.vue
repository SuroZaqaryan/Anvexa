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
        <div class="header-logo">
          <RouterLink to="/">
            <img src="@/assets/icons/logo.png" />
          </RouterLink>
        </div>

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
@import "@/assets/scss/components/header.scss";
</style>