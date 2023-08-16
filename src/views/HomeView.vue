<script setup>
import {ref} from 'vue'
import {RouterLink} from 'vue-router'
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const showSubcontent = ref(false);
const carouselPublicity = ref(null);

const breakpoints = ref({
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
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
})

const possibilities = ref([
    {
        title: "Высокая стоимость разработки",
        icon: new URL("@/assets/icons/possibilities-money.svg", import.meta.url).href,
    },
    {
        title: "Долгая реализация задач",
        icon: new URL("@/assets/icons/clock-forward.svg", import.meta.url).href,
    },
    {
        title: "Нестандартная CMS система",
        icon: new URL("@/assets/icons/file-branch.svg", import.meta.url).href,
    },
    {
        title: "Медленная реакция",
        icon: new URL("@/assets/icons/pulse.svg", import.meta.url).href,
    },
    {
        title: "Сайт работает нестабильно",
        icon: new URL("@/assets/icons/erratically.svg", import.meta.url).href,
    },
    {
        title: "Нужна доработка сайта",
        icon: new URL("@/assets/icons/pencil.svg", import.meta.url).href,
    },
])

const activeIdx = ref(-1)

const isPhoneFocused = ref(false)
const isNameFocused = ref(false)
const isMessageFocused = ref(false)

const name = ref('');
const phone = ref('');
const message = ref('');

const handleFocus = (inputType) => {
    if (inputType === 'name') {
        isNameFocused.value = true;
    } else if (inputType === 'phone') {
        isPhoneFocused.value = true;
    } else if (inputType === 'message') {
        isMessageFocused.value = true;
    }
}
const handleBlur = (inputType) => {
    if (inputType === 'name') {
        isNameFocused.value = false;
    } else if (inputType === 'phone') {
        isPhoneFocused.value = false;
    } else if (inputType === 'message') {
        isMessageFocused.value = false;
    }
}

const selectPossibility = (idx) => {
    activeIdx.value = idx === activeIdx.value ? -1 : idx;
}

const next = () => {
    carouselPublicity.value.next();
}

const prev = () => {
    carouselPublicity.value.prev();
}
</script>

<template>
    <header>
        <div class="header-wrapper">
            <div class="header-service">
                <div class="header-logo"><img src="@/assets/icons/logo.png"/></div>

                <nav class="header-links">
                    <RouterLink to="#" @mouseover="showSubcontent = true" @mouseleave="showSubcontent = false">
                        Поддержка
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M1 1L6.00081 5.58L11 1" stroke="#0A090B" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </RouterLink>

                    <RouterLink to="#" @mouseover="showSubcontent = true" @mouseleave="showSubcontent = false">
                        Развитие
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M1 1L6.00081 5.58L11 1" stroke="#0A090B" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </RouterLink>

                    <RouterLink to="#">Цены</RouterLink>
                    <RouterLink to="#">Компания</RouterLink>
                </nav>

                <Transition v-show="showSubcontent">
                    <div class="service-subcontent">
                        <div>
                            <div class="subcontent-block">
                                <div><img src="@/assets/icons/support.svg"/></div>

                                <div class="service-desc">
                                    <p>Поддержка на битрикс</p>
                                    <span>Скидка 30% процентов на SEO</span>
                                </div>
                            </div>

                            <div class="subcontent-block">
                                <div><img src="@/assets/icons/drive.svg"/></div>

                                <div class="service-desc">
                                    <p>Серверная поддержка</p>
                                    <span>Скидка 30% процентов на SEO</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="subcontent-block">
                                <div><img src="@/assets/icons/chat.svg"/></div>

                                <div class="service-desc">
                                    <p>Поддержка частые вопросы</p>
                                    <span>Скидка 30% процентов на SEO</span>
                                </div>
                            </div>

                            <div class="subcontent-block">
                                <div><img src="@/assets/icons/defense.svg"/></div>

                                <div class="service-desc">
                                    <p>Защита сайта от вирусов</p>
                                    <span>Скидка 30% процентов на SEO</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="subcontent-block">
                                <div><img src="@/assets/icons/support.svg"/></div>

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
                    <img src="@/assets/icons/phone.svg"/>

                    <address>
                        <p>+7 (495) 131-9038</p>
                        <span>Москва</span>
                    </address>
                </div>

                <button>
                    Оставить заявку
                    <img src="@/assets/icons/send.svg"/>
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
                    <img src="@/assets/icons/arrow-right-square-contained.svg"/>
                </button>
            </div>

            <div class="circular-text">
                <div class="circular-text-time"><h3>24/7</h3></div>
                <img src="@/assets/images/support-frame.png"/>
            </div>

            <div class="hero-image">
                <img src="@/assets/images/development.png"/>
            </div>
        </div>
    </section>

    <section class="section-services">
        <div class="services-wrapper">
            <div class="services-desc">
                <div class="sevices-title">
                    <img src="@/assets/icons/wave-pattern.svg"/>
                    <h3>
                        Мы-ваш полноценный штат, <br/> для <span>развития</span> вашего <br/> бизнеса
                    </h3>
                </div>

                <div>
                    <img src="@/assets/images/grid.png" width="128" height="128"/>
                </div>
            </div>

            <div class="services-cards">
                <div class="card">
                    <img class="ornament" src="@/assets/icons/ornament.svg"/>

                    <div class="card-icon">
                        <img src="@/assets/icons/file-edit.svg"/>
                    </div>

                    <div class="card-text">
                        <h3>Формируем задачи</h3>
                        <p>Бы ставите нам любые задачи, которые могут понадобиться для внедрения на ваших сайтах. Так же
                            мы сами предлагаем изменения, которые повлияют на конверсию, безопасность,
                            функциональность</p>
                    </div>
                </div>

                <div class="card">
                    <img class="ornament" src="@/assets/icons/ornament.svg"/>

                    <div class="card-icon">
                        <img src="@/assets/icons/smiley-wink.svg"/>
                    </div>

                    <div class="card-text">
                        <h3>На понятном языке</h3>
                        <p>Обеспечим работоспособность и защиту сайта. Внедрим любые обновления.Обеспечим
                            работоспособность и защиту сайта. Внедрим любые обновления.Обеспечим работоспособность и
                            защиту сайта.</p>
                    </div>
                </div>

                <div class="card">
                    <img class="ornament" src="@/assets/icons/ornament.svg"/>

                    <div class="card-icon">
                        <img src="@/assets/icons/chat-purple.svg"/>
                    </div>

                    <div class="card-text">
                        <h3>Молниеносная обратная связь</h3>
                        <p>Никаких долгих ответов, Все в режиме онлайн. Мы всегда с вами на связи по удобному для вас
                            каналу</p>
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

            <h3 class="support-title">Комплексная <span>поддержка</span> <br/> для вас</h3>

            <div class="support-content">
                <div class="support-list">
                    <div>
                        <div class="support-list-block">
                            <div class="support-icon">
                                <img src="@/assets/icons/flash.svg"/>
                            </div>

                            <div class="support-desc">
                                <h3>Быстрая реакция</h3>
                                <p>Работаем по слаженной системе, которая позволяет оперативно закрывать задачи</p>
                            </div>
                        </div>

                        <div>
                            <img src="@/assets/icons/check.svg"/>
                        </div>
                    </div>

                    <div>
                        <div class="support-list-block">
                            <div class="support-icon">
                                <img src="@/assets/icons/dart.svg"/>
                            </div>

                            <div class="support-desc">
                                <h3>Внедрим любые решения</h3>
                                <p>Работаем по слаженной системе, которая позволяет оперативно закрывать задачи</p>
                            </div>
                        </div>

                        <div>
                            <img src="@/assets/icons/check.svg"/>
                        </div>
                    </div>

                    <div>
                        <div class="support-list-block">
                            <div class="support-icon">
                                <img src="@/assets/icons/money.svg"/>
                            </div>

                            <div class="support-desc">
                                <h3>От 1500 ₽ за час работы</h3>
                                <p>Работаем по слаженной системе, которая позволяет оперативно закрывать задачи</p>
                            </div>
                        </div>

                        <div>
                            <img src="@/assets/icons/check.svg"/>
                        </div>
                    </div>
                </div>

                <div class="support-image-text">
                    <div class="support-text">
                        <div>
                            <h3>Работаем с любыми CMS и <br/> нестандартными системами</h3>
                            <p>Работаем с любыми CMS и нестандартными системами</p>
                        </div>
                        <img src="@/assets/icons/check.svg"/>
                    </div>

                    <div class="support-bg">
                        <img src="@/assets/images/programming-languages.png"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-tariff">
        <img class="tariff-bg" src="@/assets/images/grid.png"/>

        <div class="tariff-wrapper">
            <div class="tariff-info">
                <div class="tariff-desc">
                    <div class="tariff-info">
                        <span>Часы не сгорают никогда</span>
                    </div>

                    <h3 class="tariff-title">
                        Варианты <span>тарифов</span> на <br/> поддежрку
                    </h3>

                    <p class="tariff-text">Представленны самые попрялные варианты тарифов, Спектр задач может быть
                        расширен под ваши потребности</p>
                </div>

                <div class="tariff-date">
                    <hr/>

                    <div class="tariff-date-desc">
                        <img src="@/assets/icons/icon-plus.svg"/>
                        <div>
                            <p>Неиспользованные часы <br/> <span>добавляем</span> к <span>следующему месяцу</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="tariff-cards">
                <div class="card">
                    <div class="card-title">
                        <p>Базовый</p>
                        <div class="card-subtitle">
                            <img src="@/assets/icons/clock.svg"/>
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
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Скидка 30% процентов на SEO</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Любые задачи</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Backup и защита сайта</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Онлайн консультация</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Аудит конверсии и юзабилити</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Личный менеджер</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Поддержка одного ресурса в тариф</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/x.svg"/>
                                <p>Плановый аудит</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/x.svg"/>
                                <p>Переговоры и отслеживание</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">
                        <p>Стандартный</p>
                        <div class="card-subtitle">
                            <img src="@/assets/icons/clock.svg"/>
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
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Скидка 30% процентов на SEO</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Любые задачи</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Backup и защита сайта</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Онлайн консультация</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Аудит конверсии и юзабилити</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Личный менеджер</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Поддержка одного ресурса в тариф</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Плановый аудит</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Переговоры и отслеживание</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">
                        <p>Корпоративный</p>
                        <div class="card-subtitle">
                            <img src="@/assets/icons/clock.svg"/>
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
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Скидка 30% процентов на SEO</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Любые задачи</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Backup и защита сайта</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Онлайн консультация</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Аудит конверсии и юзабилити</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Личный менеджер</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Поддержка одного ресурса в тариф</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Плановый аудит</p>
                            </li>

                            <li>
                                <img width="16" height="16" src="@/assets/icons/check-black.svg"/>
                                <p>Переговоры и отслеживание</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="tariff-message">
                <img src="@/assets/icons/warning-message.svg"/>
                <p>Спектр задач может быть <span>расширен</span> под ваши потребности</p>
            </div>
        </div>
    </section>

    <section class="section-slider">
        <div class="slider-wrapper">
            <div class="slider-description">
                <img class="ornament" src="@/assets/icons/ornament.svg"/>

                <div class="slider-info">
                    <span>Проекты Анвекса</span>
                </div>

                <h3 class="slider-title">
                    С нами работают как не большие <br/> компании, так и <span>лидеры</span> рынка
                </h3>
            </div>

            <div class="slider-carousel">
                <Carousel :items-to-show="3.5" :wrap-around="true" :breakpoints="breakpoints">
                    <Slide key="slide1">
                        <div class="slider-item">
                            <div class="slider-image-desc">
                                <div class="slider-image">
                                    <div class="slider-logo">
                                        <img src="@/assets/images/Protex.png"/>
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
                            <div class="slider-image-desc">
                                <div class="slider-image">
                                    <div class="slider-logo">
                                        <img src="@/assets/images/ProFlag.png"/>
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
                            <div class="slider-image-desc">
                                <div class="slider-image">
                                    <div class="slider-logo">
                                        <img src="@/assets/images/Motorrika.png"/>
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
                        <Navigation/>
                    </template>
                </Carousel>
            </div>

            <div class="slider-statistics">
                <ul>
                    <li>
                        <p>5000</p>
                        <span>Задач закрывается каждый <br/> день</span>
                    </li>

                    <li>
                        <p>80%</p>
                        <span>Клиентов работают с нами <br/> более 7 лет</span>
                    </li>

                    <li>
                        <p>90</p>
                        <span>Сайтов на комплексной <br/> поддержке</span>
                    </li>

                    <li>
                        <p>150</p>
                        <span>Компаний в год обращаются <br/> к нам</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="section-possibilities">
        <div class="possibilities-wrapper">

            <div class="possibilities-desc">
                <div class="possibilities-info">
                    <span>И это еще не все!</span>
                </div>

                <h3 class="possibilities-title">
                    Какие проблемы <span>решаем</span> для <br/> клиента
                </h3>
            </div>

            <ul class="possibilities-list">
                <li
                    v-for="(item, idx) in possibilities"
                    @click="selectPossibility(idx)"
                    :key="idx"
                    :class="{'selected-possibility': idx === activeIdx }"
                >
                    <img v-svg-inline :src="item.icon"/>
                    <p>{{ item.title }}</p>
                </li>
            </ul>

            <div class="possibilities-banner">
                <div class="banner-block">
                    <div class="banner-desc">
                        <div class="ornament">
                            <img src="@/assets/icons/ornament-outline.svg"/>
                        </div>

                        <h3>Высокая стоимость <br/> разработки</h3>

                        <p>
                            Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в
                            удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда
                            имеют доступ нужные сотрудники
                        </p>
                    </div>

                    <div class="banner-bg">
                        <img src="@/assets/images/money-bag.png"/>
                    </div>

                    <img class="banner-grid" src="@/assets/images/grid.png"/>
                </div>

            </div>
        </div>
    </section>

    <section class="section-future">
        <div class="future-wrapper">
            <div class="future-info">
                <span>И это еще не все!</span>
            </div>

            <h3 class="future-title">
                Заглянем немного в совместное <br/> <span>будущее</span>.
            </h3>

            <img class="future-grid" src="@/assets/images/grid.png"/>
        </div>
    </section>

    <section class="seaction-publicity">
        <img class="curved-line-rotate" src="@/assets/images/curved-line-rotate.png"/>

        <div class="publicity-wrapper">
            <div class="publicity-desc">
                <div class="publicity-images">
                    <img class="ornament" src="@/assets/icons/ornament.svg"/>
                    <img class="ornament" src="@/assets/icons/ornament.svg"/>

                    <img height="300" src="@/assets/images/publicity-large.png"/>
                    <img height="250" src="@/assets/images/publicity-small.png"/>
                </div>

                <div class="publicity-slider">
                    <Carousel ref="carouselPublicity">
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <div class="arrow-refresh">
                                    <img src="@/assets/icons/arrow-refresh.svg"/>
                                </div>
                                <h3>Автоматическое <br/> обнавление</h3>
                                <p>
                                    Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, ведем ваш
                                    проект в удобной системе куда имеют доступ нужные сотрудники
                                </p>
                            </div>
                        </Slide>

                        <template #addons>
                            <div class="publicity-controls">
                                <div class="publicity-pagination">
                                    <Pagination/>
                                </div>

                                <div class="publicity-navigation">
                                    <button @click="prev">
                                        <img src="@/assets/icons/slider-arrow-left.svg"/>
                                    </button>

                                    <button @click="next">
                                        <img src="@/assets/icons/slider-arrow-right.svg"/>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </section>

    <section class="section-form">
        <div class="form-wrapper">
            <div>
                <div>
                    <div class="form-info">
                        <span>И это еще не все!</span>
                    </div>

                    <h3 class="form-title">
                        Оставьте заявку и мы <br/>
                        подберем <span>индивидуальный</span><br/> тариф
                    </h3>
                </div>

                <form>
                    <div class="form-name-tel">
                        <div :class="{'form-active': isNameFocused}">
                            <label>Ваше имя</label>
                            <input 
                                type="text" 
                                v-model="name"
                                @focus="handleFocus('name')" 
                                @blur="handleBlur('name')" 
                                :placeholder="isNameFocused ? '' : 'Имя*'" 
                            />
                        </div>

                        <div :class="{'form-active': isPhoneFocused}">
                            <label>Телефон</label>
                            <input 
                                type="tel" 
                                v-model="phone"
                                @focus="handleFocus('phone')" 
                                @blur="handleBlur('phone')" 
                                :placeholder="isPhoneFocused ? '' : '+7 (---) --- -- --'"
                            />
                        </div>
                    </div>

                    <div :class="{'label-active': isMessageFocused}" class="form-textarea">
                        <label>Расскажите о вашем проекте</label>
                        <textarea 
                            v-model="message"
                            @focus="handleFocus('message')" 
                            @blur="handleBlur('message')"  
                            :placeholder="isMessageFocused ? '' : 'Сообщение'"
                        />
                    </div>

                    <div class="agreement">
                        <input type="checkbox" @focus="handleFocus" />
                        <p>Даю согласие на обработку моих данных</p>
                    </div>

                    <button type="submit">
                        Отправить
                        <img src="@/assets/icons/send.svg"/>
                    </button>
                </form>
            </div>

            <div>
                <div>
                    <img src="@/assets/images/letters.png"/>
                </div>

                <div class="form-contacts">
                    <div class="contacts-desc">
                        <p class="desc-title">Контакты</p>
                        <p class="desc-subtitle">Напишите напрямую <br/> 
                            <a href="tg://resolve?domain=anvexa">Telegram</a>
                        </p>
                    </div>

                    <div class="form-regions">
                        <div>
                            <p class="region">Москва</p>

                            <div class="region-info">
                                <img width="30" height="30" src="@/assets/icons/phone.svg"/>
                                <span>+7 (495) 131-9038</span>
                            </div>
                        </div>

                        <div>
                            <p class="region">Санкт-Петербург</p>

                            <div class="region-info">
                                <img width="30" height="30" src="@/assets/icons/phone.svg"/>
                                <span>+7 (495) 131-9038</span>
                            </div>
                        </div>

                        <div>
                            <p class="region">Эл. почта</p>

                            <div class="region-info">
                                <img width="30" height="30" src="@/assets/icons/letter.svg"/>
                                <a style="margin-left: 3px;" href="mailto: info@norbit.ru">info@norbit.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="facilities">
        <ul>
            <li>Техническая поддержка сайтов</li>
            <li>•</li>
            <li>Доработка сайтов</li>
            <li>•</li>
            <li>Поддержка сайтов WordPress</li>
            <li>•</li>
            <li>Поддержка сайтов Битрикс</li>
            <li>•</li>
            <li>Поддержка сайтов на ModX</li>
            <li>•</li>
            <li>Поддержка сайтов на ModX</li>
        </ul>
    </div>

    <footer>
        <div class="footer-wrapper">
            <img class="footer-grid" src="@/assets/images/grid.png"/>

            <div class="footer-block">

                <div>
                    <img src="@/assets/icons/logo.png"/>
                </div>

                <div class="footer-services">
                    <div>
                        <p>Поддержка</p>

                        <ul>
                            <li>Доработка и обновление</li>
                            <li>Аудит</li>
                            <li>Защита данных</li>
                            <li>Интеграция сервисов</li>
                        </ul>
                    </div>

                    <div>
                        <p>Развитие</p>

                        <ul>
                            <li>Технологии</li>
                            <li>Обучающий центр</li>
                            <li>Разборы</li>
                        </ul>
                    </div>

                    <div>
                        <p>Компания</p>

                        <ul>
                            <li>об Anvexa</li>
                            <li>Контакты</li>
                            <li>Вакансии</li>
                            <li>Блог</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-contacts">
                <div class="footer-agreement">
                    <p>©2007–2023 Anvexa. Все права защищены</p>
                </div>

                <div class="footer-details">
                    <div>
                        <img src="@/assets/icons/phone.svg"/>
                        <p>+7 (495) 131-9038</p>
                    </div>

                    <div>
                        <img src="@/assets/icons/phone.svg"/>
                        <p>+7 (495) 131-9038</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import "@/assets/scss/home.scss";
</style>

<style lang="scss">
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
}

.section-possibilities {
    .selected-possibility path {
        stroke: #5EAEAE;
    }
}
</style>