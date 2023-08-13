<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
              <path d="M1 1L6.00081 5.58L11 1" stroke="#0A090B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>

          <RouterLink to="#"  @mouseover="showSubcontent = true" @mouseleave="showSubcontent = false">
            Развитие
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1L6.00081 5.58L11 1" stroke="#0A090B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

  <section class="section-hero">
    <div class="hero-wrapper">
      <div class="hero-desc">
        <div class="hero-info">
          <span>16 лет опыта с клиентами</span>
        </div>
        
        <div class="hero-text">
          <h1>
            Поддержка, <br/> обслуживание и <br/> доработка Ваших <br/> сайтов.
          </h1>
  
          <p>Обеспечим работоспособность и защиту <br/> сайта. Внедрим любые обновления.</p>
        </div>
  
        <button>
          Рассчитать услугу
          <img src="@/assets/icons/arrow-right-square-contained.svg" />
        </button>
      </div>
  
      <div class="circular-text">
        <div class="circular-text-time"><h3>24/7</h3></div>
        <img src="@/assets/images/support-frame.png" />
      </div>
  
      <div class="hero-image">
        <img src="@/assets/images/development.png" />
      </div>
    </div>
  </section>

  <section class="section-services">
    <div class="services-wrapper">
      <div class="services-desc">
        <div class="sevices-title">
          <img src="@/assets/icons/wave-pattern.svg" />
          <h3>
            Мы-ваш полноценный штат, <br /> для <span>развития</span> вашего <br/> бизнеса
          </h3>
        </div>
      
        <div>
          <img src="@/assets/images/grid.png" width="128" height="128" />
        </div>
      </div>

      <div class="services-cards">
        <div class="card">
          <img class="ornament" src="@/assets/icons/ornament.svg" />

          <div class="card-icon">
            <img src="@/assets/icons/file-edit.svg" />
          </div>

          <div class="card-text">
            <h3>Формируем задачи</h3>
            <p>Бы ставите нам любые задачи, которые могут понадобиться для внедрения на ваших сайтах. Так же мы сами предлагаем изменения, которые повлияют на конверсию, безопасность, функциональность</p>
          </div>
        </div>

        <div class="card">
          <img class="ornament" src="@/assets/icons/ornament.svg" />

          <div class="card-icon">
            <img src="@/assets/icons/smiley-wink.svg" />
          </div>
          
          <div class="card-text">
            <h3>На понятном языке</h3>
            <p>Обеспечим работоспособность и защиту сайта. Внедрим любые обновления.Обеспечим работоспособность и защиту сайта. Внедрим любые обновления.Обеспечим работоспособность и защиту сайта.</p>
          </div>
        </div>

        <div class="card">
          <img class="ornament" src="@/assets/icons/ornament.svg" />

          <div class="card-icon">
            <img src="@/assets/icons/chat-purple.svg" />
          </div>
          
          <div class="card-text">
            <h3>Молниеносная обратная связь</h3>
            <p>Никаких долгих ответов, Все в режиме онлайн. Мы всегда с вами на связи по удобному для вас каналу</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-support">
    <div class="support-wrapper">
      <div class="support-info">
          <span>Опыт, Надежность, Прозрачность</span>
      </div>

      <h3 class="support-title">Комплексная <span>поддержка</span> <br /> для вас</h3>
    
      <div class="support-content">
        <div class="support-list">
          <div>
            <div class="support-list-block">
              <div class="support-icon">
                <img src="@/assets/icons/flash.svg" />
              </div>

              <div class="support-desc">
                <h3>Быстрая реакция</h3>
                <p>Работаем по слаженной системе, которая позволяет оперативно закрывать задачи</p>
              </div>
            </div>

            <div>
              <img src="@/assets/icons/check.svg" />
            </div>
          </div>

          <div>
            <div class="support-list-block">
              <div class="support-icon">
                <img src="@/assets/icons/dart.svg" />
              </div>
  
              <div class="support-desc">
                <h3>Внедрим любые решения</h3>
                <p>Работаем по слаженной системе, которая позволяет оперативно закрывать задачи</p>
              </div>
            </div>

            <div>
              <img src="@/assets/icons/check.svg" />
            </div>
          </div>

          <div>
            <div class="support-list-block">
              <div class="support-icon">
                <img src="@/assets/icons/money.svg" />
              </div>
  
              <div class="support-desc">
                <h3>От 1500 ₽ за час работы</h3>
                <p>Работаем по слаженной системе, которая позволяет оперативно закрывать задачи</p>
              </div>
            </div>

            <div>
              <img src="@/assets/icons/check.svg" />
            </div>
          </div>
        </div>

        <div class="support-image-text">
          <div class="support-text">
            <div>
              <h3>Работаем с любыми CMS и <br/> нестандартными системами</h3>
              <p>Работаем с любыми CMS и нестандартными системами</p>
            </div>
            <img src="@/assets/icons/check.svg" />
          </div>

          <div class="support-bg">
            <img src="@/assets/images/programming-languages.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-tariff">
    <img class="tariff-bg" src="@/assets/images/grid.png" />

    <div class="tariff-wrapper">
      <div class="tariff-info">
        <div class="tariff-desc">
          <div class="tariff-info">
            <span>Часы не сгорают никогда</span>
          </div>
  
          <h3 class="tariff-title">
            Варианты <span>тарифов</span> на <br /> поддежрку
          </h3>
  
          <p class="tariff-text">Представленны самые попрялные варианты тарифов, Спектр задач может быть расширен под ваши потребности</p>
        </div>
  
        <div class="tariff-date">
          <hr />
  
          <div class="tariff-date-desc">
            <img src="@/assets/icons/icon-plus.svg" />
            <div>
              <p>Неиспользованные часы <br /> <span>добавляем</span> к <span>следующему месяцу</span></p>
            </div>
          </div>
        </div>
      </div>
    

      <div class="tariff-cards">
        <div class="card">
          <div class="card-title">
            <p>Базовый</p>
            <div class="card-subtitle">
              <img src="@/assets/icons/clock.svg" />
              <p>9 часов на задачи</p>
            </div>
          </div>

          <div class="card-price">
            <p>14 990 ₽ <span>/мес</span></p>
          </div>

          <div class="card-order">
            <button>Заказать</button>
          </div>

          <div class="card-list">
            <ul>
              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Скидка 30% процентов на SEO</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Любые задачи</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Backup и защита сайта</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Онлайн консультация</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Аудит конверсии и юзабилити</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Личный менеджер</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Поддержка одного ресурса в тариф</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/x.svg" />
                <p>Плановый аудит</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/x.svg" />
                <p>Переговоры и отслеживание</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <p>Стандартный</p>
            <div class="card-subtitle">
              <img src="@/assets/icons/clock.svg" />
              <p>22 часа на задачи</p>
            </div>
          </div>

          <div class="card-price">
            <p>24 990 ₽ <span>/мес</span></p>
          </div>

          <div class="card-order">
            <button>Заказать</button>
          </div>

          <div class="card-list">
            <ul>
              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Скидка 30% процентов на SEO</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Любые задачи</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Backup и защита сайта</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Онлайн консультация</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Аудит конверсии и юзабилити</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Личный менеджер</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Поддержка одного ресурса в тариф</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Плановый аудит</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Переговоры и отслеживание</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <p>Корпоративный</p>
            <div class="card-subtitle">
              <img src="@/assets/icons/clock.svg" />
              <p>32 часов на задачи</p>
            </div>
          </div>

          <div class="card-price">
            <p>34 990 ₽ <span>/мес</span></p>
          </div>

          <div class="card-order">
            <button>Заказать</button>
          </div>

          <div class="card-list">
            <ul>
              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Скидка 30% процентов на SEO</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Любые задачи</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Backup и защита сайта</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Онлайн консультация</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Аудит конверсии и юзабилити</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Личный менеджер</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Поддержка одного ресурса в тариф</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Плановый аудит</p>
              </li>

              <li>
                <img width="16" height="16" src="@/assets/icons/check-black.svg" />
                <p>Переговоры и отслеживание</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tariff-message">
        <img src="@/assets/icons/warning-message.svg" />
        <p>Спектр задач может быть <span>расширен</span> под ваши потребности</p>
      </div>
    </div>
  </section>

  <section class="section-slider">
    <div class="slider-wrapper">
      <div class="slider-desc">

        <img class="ornament" src="@/assets/icons/ornament.svg" />

        <div class="slider-info">
          <span>Проекты Анвекса</span>
        </div>
  
        <h3 class="slider-title">
          С нами работают как не большие <br /> компании, так и <span>лидеры</span> рынка
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import "@/assets/scss/home.scss";
</style>