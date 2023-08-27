<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
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

    <div class="footer-wrapper">
      <img class="footer-grid" src="@/assets/images/grid.png" />

      <div class="footer-block">
        <div>
          <img src="@/assets/icons/logo.png" />
        </div>

        <div class="footer-services">
          <div>
            <p>Поддержка</p>

            <ul>
              <RouterLink to="/#">
                Доработка и обновление
              </RouterLink>
              <RouterLink to="/#">
                Аудит
              </RouterLink>
              <RouterLink to="/#">
                Защита данных
              </RouterLink>
              <RouterLink to="/#">
                Интеграция сервисов
              </RouterLink>
            </ul>
          </div>

          <div>
            <p>Развитие</p>

            <ul>
              <RouterLink to="/#">
                Технологии
              </RouterLink>
              <RouterLink to="/#">
                Обучающий центр
              </RouterLink>
              <RouterLink to="/#">
                Разборы
              </RouterLink>
            </ul>
          </div>

          <div>
            <p>Компания</p>

            <ul>
              <RouterLink to="/#">
                об Anvexa
              </RouterLink>
              <RouterLink to="/contacts">
                Контакты
              </RouterLink>
              <RouterLink to="/#">
                Вакансии
              </RouterLink>
              <RouterLink to="/#">
                Блог
              </RouterLink>
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
            <img src="@/assets/icons/phone.svg" />
            <p>+7 (495) 131-9038</p>
          </div>

          <div>
            <img src="@/assets/icons/phone.svg" />
            <p>+7 (495) 131-9038</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/footer.scss";
</style>