<template>
  <section class="section-contacts">
    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-title">
          <h2>Контактная <br /> информация</h2>
          <p>Представлены самые популярные варианты тарифов, Спектр задач может быть расширен под ваши потребности</p>
          <img class="ornament" src="@/assets/icons/ornament.svg">
        </div>

        <div class="contact-subtitle">
          <img src="@/assets/icons/start-outline.svg" />
          <p>Находимся в реестре аккредитованный IT- <br /> компаний России</p>
        </div>

        <div class="contact-cards">
          <div class="card">
            <div class="card-title">
              <img width="23" height="23" src="@/assets/icons/clock.svg" />
              <p>Время работы</p>
            </div>

            <div class="card-desc">
              <span>Тех отдел:</span>
              <p>Kруглосуточно</p>
            </div>

            <div class="line" />

            <div class="card-desc">
              <span>Отдел по работе с клиентами:</span>
              <p>Ежедневно 7:00-17:00</p>
            </div>
          </div>

          <div class="card">
            <div class="card-title">
              <img width="23" height="23" src="@/assets/icons/file.svg" />
              <p>ООО &lt;&lt;Анвекса&gt;&gt; </p>
            </div>

            <div class="card-desc">
              <span>ИНН/КПП:</span>
              <p>7411048001</p>
            </div>

            <div class="line" />

            <div class="card-desc">
              <span>БИК:</span>
              <p>047501981</p>
            </div>
          </div>
        </div>
      </div>

      <div class="form-wrapper">
        <div class="contacts-desc">
          <p class="desc-title">Контакты</p>
          <p class="desc-subtitle">Напишите напрямую <br />
            <a href="tg://resolve?domain=anvexa">Telegram</a>
          </p>
        </div>

        <div class="form-contacts">
          <div>
            <p class="form-title">Москва</p>

            <div class="form-info">
              <img width="30" height="30" src="@/assets/icons/phone.svg" />
              <span>+7 (495) 131-9038</span>
            </div>
          </div>

          <div>
            <p class="form-title">Санкт-Петербург</p>

            <div class="form-info">
              <img width="30" height="30" src="@/assets/icons/phone.svg" />
              <span>+7 (495) 131-9038</span>
            </div>
          </div>

          <div>
            <p class="form-title">Эл. почта</p>

            <div class="form-info">
              <img width="30" height="30" src="@/assets/icons/letter.svg" />
              <a style="margin-left: 3px;" href="mailto: info@norbit.ru">info@norbit.ru</a>
            </div>
          </div>

          <div>
            <p class="form-title">Skype</p>

            <div class="form-info">
              <img width="30" height="30" src="@/assets/icons/skype.svg" />
              <a style="margin-left: 3px;" href="skype:Anvexa?userinfo">Anvexa</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-location">
      <img src="@/assets/images/map.png" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/contacts.scss";
</style>