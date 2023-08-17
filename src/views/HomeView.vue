<script setup>
import { ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'

import TitleDescription from '@/components/TitleDescription.vue'

const carouselPublicity = ref(null);

const possibilities = ref({
    title: [
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
    ],

    content: [
        {
            title: "Высокая стоимость разработки",
            description: "Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники",
            image: new URL("@/assets/images/money-bag.png", import.meta.url).href,
        },
        {
            title: "Долгая реализация задач",
            description: "Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники",
            image: new URL("@/assets/images/file-doc.png", import.meta.url).href,
        },
        {
            title: "Ненадёжный подрядчик/сотрудник",
            description: "Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники",
            image: new URL("@/assets/images/human.png", import.meta.url).href,
        },
        {
            title: "Медленная реакция",
            description: "Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники",
            image: new URL("@/assets/images/time-managment.png", import.meta.url).href,
        },
        {
            title: "Сайт работает нестабильно",
            description: "Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники",
            image: new URL("@/assets/images/web-developmen.png", import.meta.url).href,
        },
        {
            title: "Нужна доработка сайта",
            description: "Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники",
            image: new URL("@/assets/images/refinement.png", import.meta.url).href,
        },
    ]
})


// const possibilities = ref([
//     {
//         title: "Высокая стоимость разработки",
//         icon: new URL("@/assets/icons/possibilities-money.svg", import.meta.url).href,
//     },
//     {
//         title: "Долгая реализация задач",
//         icon: new URL("@/assets/icons/clock-forward.svg", import.meta.url).href,
//     },
//     {
//         title: "Нестандартная CMS система",
//         icon: new URL("@/assets/icons/file-branch.svg", import.meta.url).href,
//     },
//     {
//         title: "Медленная реакция",
//         icon: new URL("@/assets/icons/pulse.svg", import.meta.url).href,
//     },
//     {
//         title: "Сайт работает нестабильно",
//         icon: new URL("@/assets/icons/erratically.svg", import.meta.url).href,
//     },
//     {
//         title: "Нужна доработка сайта",
//         icon: new URL("@/assets/icons/pencil.svg", import.meta.url).href,
//     },
// ])

const activeIdx = ref(-1)

const isPhoneFocused = ref(false)
const isNameFocused = ref(false)
const isMessageFocused = ref(false)

const name = ref('');
const phone = ref('');
const message = ref('');

const currentSlide = ref(0)

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

const slideTo = (val) => {
    currentSlide.value = val
}

const selectPossibility = (idx) => {
    currentSlide.value = (idx + 1) - 1;
    activeIdx.value = idx === activeIdx.value ? -1 : idx;
}
</script>

<template>
    <Header />

    <section class="section-hero">
        <div class="hero-wrapper">
            <div class="hero-desc">
                <TitleDescription title="16 лет опыта с клиентами" />

                <div class="hero-text">
                    <h1>
                        Поддержка, <br /> обслуживание и <br /> доработка Ваших <br /> сайтов.
                    </h1>

                    <p>Обеспечим работоспособность и защиту <br /> сайта. Внедрим любые обновления.</p>
                </div>

                <button>
                    Рассчитать услугу
                    <img src="@/assets/icons/arrow-right-square-contained.svg" />
                </button>
            </div>

            <div class="circular-text">
                <div class="circular-text-time">
                    <h3>24/7</h3>
                </div>
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
                        Мы-ваш полноценный штат, <br /> для <span>развития</span> вашего <br /> бизнеса
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
                        <p>Бы ставите нам любые задачи, которые могут понадобиться для внедрения на ваших сайтах. Так же
                            мы сами предлагаем изменения, которые повлияют на конверсию, безопасность,
                            функциональность</p>
                    </div>
                </div>

                <div class="card">
                    <img class="ornament" src="@/assets/icons/ornament.svg" />

                    <div class="card-icon">
                        <img src="@/assets/icons/smiley-wink.svg" />
                    </div>

                    <div class="card-text">
                        <h3>На понятном языке</h3>
                        <p>Обеспечим работоспособность и защиту сайта. Внедрим любые обновления.Обеспечим
                            работоспособность и защиту сайта. Внедрим любые обновления.Обеспечим работоспособность и
                            защиту сайта.</p>
                    </div>
                </div>

                <div class="card">
                    <img class="ornament" src="@/assets/icons/ornament.svg" />

                    <div class="card-icon">
                        <img src="@/assets/icons/chat-purple.svg" />
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
            <TitleDescription class="mx-auto" title="Опыт, Надежность, Прозрачность" />

            <h2 class="title-lg text-center">Комплексная <span>поддержка</span> <br /> для вас</h2>

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
                            <h3>Работаем с любыми CMS и <br /> нестандартными системами</h3>
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
                    <TitleDescription title="Часы не сгорают никогда" />

                    <h2 class="title-lg">
                        Варианты <span>тарифов</span> на <br /> поддежрку
                    </h2>

                    <p class="tariff-text">Представленны самые попрялные варианты тарифов, Спектр задач может быть
                        расширен под ваши потребности</p>
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
        <Slider />
    </section>

    <section class="section-possibilities">
        <div class="possibilities-wrapper">

            <div class="possibilities-desc">
                <TitleDescription class="mx-auto" title="И это еще не все!" />

                <div class="possibilities-title">
                    <h2 class="title-lg">
                        Какие проблемы <span>решаем</span> для <br /> клиента
                    </h2>
                </div>
            </div>

            <ul class="possibilities-list">
                <Slide v-for="(item, idx) in possibilities.title" :key="idx" @click="selectPossibility(idx)"
                    :class="{ 'selected-possibility': idx === activeIdx }">
                    <img v-svg-inline :src="item.icon" />
                    <p>{{ item.title }}</p>
                </Slide>
            </ul>

            <div class="possibilities-banner">
                <Carousel class="banner-block" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                    <Slide v-for="slide in possibilities.content" :key="slide">
                        <div class="banner-desc">
                            <div class="ornament">
                                <img src="@/assets/icons/ornament-outline.svg" />
                            </div>

                            <h3>{{ slide.title }}</h3>
                            <p>{{ slide.description }}</p>
                        </div>

                        <div class="banner-bg">
                            <img :src="slide.image" />
                        </div>
                    </Slide>
                </Carousel>

                <img class="banner-grid" src="@/assets/images/grid.png" />
            </div>
        </div>
    </section>

    <section class="section-future">
        <div class="future-wrapper">
            <TitleDescription title="И это еще не все!" />

            <h2 class="title-lg">
                Заглянем немного в совместное <br /> <span>будущее</span>.
            </h2>

            <img class="future-grid" src="@/assets/images/grid.png" />
        </div>
    </section>

    <section class="seaction-publicity">
        <img class="curved-line-rotate" src="@/assets/images/curved-line-rotate.png" />

        <div class="publicity-wrapper">
            <div class="publicity-desc">
                <div class="publicity-images">
                    <img class="ornament" src="@/assets/icons/ornament.svg" />
                    <img class="ornament" src="@/assets/icons/ornament.svg" />

                    <img height="300" src="@/assets/images/publicity-large.png" />
                    <img height="250" src="@/assets/images/publicity-small.png" />
                </div>

                <div class="publicity-slider">
                    <Carousel ref="carouselPublicity">
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <div class="arrow-refresh">
                                    <img src="@/assets/icons/arrow-refresh.svg" />
                                </div>
                                <h3>Автоматическое <br /> обнавление</h3>
                                <p>
                                    Ведем ваш проект в удобной системе куда имеют доступ нужные сотрудники, ведем ваш
                                    проект в удобной системе куда имеют доступ нужные сотрудники
                                </p>
                            </div>
                        </Slide>

                        <template #addons>
                            <div class="publicity-controls">
                                <div class="publicity-pagination">
                                    <Pagination />
                                </div>

                                <div class="publicity-navigation">
                                    <button @click="carouselPublicity.prev()">
                                        <img src="@/assets/icons/slider-arrow-left.svg" />
                                    </button>

                                    <button @click="carouselPublicity.next()">
                                        <img src="@/assets/icons/slider-arrow-right.svg" />
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
                    <TitleDescription title="И это еще не все!" />

                    <h2 class="title-lg">
                        Оставьте заявку и мы <br />
                        подберем <span>индивидуальный</span><br /> тариф
                    </h2>
                </div>

                <form>
                    <div class="form-name-tel">
                        <div :class="{ 'form-active': isNameFocused }">
                            <label>Ваше имя</label>
                            <input type="text" v-model="name" @focus="handleFocus('name')" @blur="handleBlur('name')"
                                :placeholder="isNameFocused ? '' : 'Имя*'" />
                        </div>

                        <div :class="{ 'form-active': isPhoneFocused }">
                            <label>Телефон</label>
                            <input type="tel" v-model="phone" @focus="handleFocus('phone')" @blur="handleBlur('phone')"
                                :placeholder="isPhoneFocused ? '' : '+7 (---) --- -- --'" />
                        </div>
                    </div>

                    <div :class="{ 'form-active': isMessageFocused }" class="form-textarea">
                        <label>Расскажите о вашем проекте</label>
                        <textarea v-model="message" @focus="handleFocus('message')" @blur="handleBlur('message')"
                            :placeholder="isMessageFocused ? '' : 'Сообщение'" />
                    </div>

                    <div class="agreement">
                        <input type="checkbox" @focus="handleFocus" />
                        <p>Даю согласие на обработку моих данных</p>
                    </div>

                    <button type="submit">
                        Отправить
                        <img src="@/assets/icons/send.svg" />
                    </button>
                </form>
            </div>

            <div>
                <div>
                    <img src="@/assets/images/letters.png" />
                </div>

                <div class="form-contacts">
                    <div class="contacts-desc">
                        <p class="desc-title">Контакты</p>
                        <p class="desc-subtitle">Напишите напрямую <br />
                            <a href="tg://resolve?domain=anvexa">Telegram</a>
                        </p>
                    </div>

                    <div class="form-regions">
                        <div>
                            <p class="region">Москва</p>

                            <div class="region-info">
                                <img width="30" height="30" src="@/assets/icons/phone.svg" />
                                <span>+7 (495) 131-9038</span>
                            </div>
                        </div>

                        <div>
                            <p class="region">Санкт-Петербург</p>

                            <div class="region-info">
                                <img width="30" height="30" src="@/assets/icons/phone.svg" />
                                <span>+7 (495) 131-9038</span>
                            </div>
                        </div>

                        <div>
                            <p class="region">Эл. почта</p>

                            <div class="region-info">
                                <img width="30" height="30" src="@/assets/icons/letter.svg" />
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

    <Footer />
</template>

<style scoped>
@import "@/assets/scss/views/home.scss";
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
}

.section-possibilities {
    .selected-possibility path {
        stroke: #5EAEAE;
    }
}
</style>