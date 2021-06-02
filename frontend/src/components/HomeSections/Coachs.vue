<template>
  <section class="container container-coach">
    <div class="wrapper">
      <div class="card-container" @touchstart="tap">
        <div class="card">
          <figure class="card-front shadow">
            <img src="./../../assets/img/coachs/kostyan.jpg" alt="kostyan"/>
          </figure>
          <figure class="card-back shadow">
            <div class="figure-card">
              <div class="card-header">Костян Иван Игнатьевич</div>
              <div class="card-body">
                <p>Инструктор спортивного клуба "Гонар"</p>
                <p style="font-weight: bold">2 дан каратэ JKA (черный пояс)</p>
                <p>С отличием окончил Белорусский государственный
                  университет.<br/>
                  Получил степень магистра в Академии Управления при Президенте Республики Беларусь.<br/>
                  Стаж преподавания боевых искусств с 2012 года
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div class="card-container" @touchstart="tap">
        <div class="card">
          <figure class="card-front shadow">
            <img src="./../../assets/img/coachs/usatskiy.jpg" alt="usatskiy"/>
          </figure>
          <figure class="card-back shadow">
            <div class="figure-card">
              <div class="card-header">Усацкий Антон Игоревич</div>
              <div class="card-body">
                <p>Инструктор спортивного клуба "Гонар"</p>
                <p style="font-weight: bold">1 дан каратэ JKA (черный пояс)</p>
                <p>Многократный призер первенств по версии WKF.<br/>
                  Окончил Академию управления при Президенте Республики Беларусь, Белорусский государственный
                  педагогический университет им.М.Танка, где получил степень магистра.<br/>
                  Стаж преподавания боевых искусств с 2014 года</p>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div class="card-container" @touchstart="tap">
        <div class="card">
          <figure class="card-front shadow">
            <img src="./../../assets/img/coachs/ratinskiy.jpg" alt="ratinskiy"/>
          </figure>
          <figure class="card-back shadow">
            <div class="figure-card">
              <div class="card-header">Ратынский Вячеслав Геннадьевич</div>
              <div class="card-body">
                <p>Инструктор спортивного клуба "Гонар"</p>
                <p style="font-weight: bold">1 дан каратэ JKA (черный пояс)</p>
                <p>Многократный призер первенств по версии WKF.<br/>
                  Окончил Белорусский государственный университет.<br/>
                  Стаж преподавания боевых искусств с 2013 года.
                </p>
              </div>
            </div>
          </figure>

        </div>
      </div>
      <div class="card-container" @touchstart="tap">
        <div class="card">
          <figure class="card-front shadow">
            <img src="./../../assets/img/coachs/osika.jpg" alt="osika"/>
          </figure>
          <figure class="card-back shadow">
            <div class="figure-card">
              <div class="card-header">Осика Дмитрий Викторович</div>
              <div class="card-body">
                <p>Шеф-инструктор Белорусской ассоциации каратэ</p>
                <p style="font-weight: bold">4 дан каратэ JKA (черный пояс)</p>
                <p>Окончил Белорусский государственный университет, где
                  получил степень магистра.<br/>
                  Стаж преподавания каратэ и управления организацией с 2007 г.
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Coachs",
  data: () => ({
    isActive: false
  }),
  methods: {
    tap() {
      // this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.container-coach .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-container {
  width: 267px;
  height: 400px;
  cursor: pointer;
  transform-style: preserve-3d;
}

.card-container .card {
  width: 267px;
  height: 400px;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
  color: #0a0a0a;
  line-height: 1;
}

.card-container .card figure {
  position: absolute;
  width: 267px;
  height: 400px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  border-radius: 10px;
}

.card-container:hover .card, .card-container.hover .card {
  transform: rotateY(180deg);
}

.wrapper .card-front {
  position: relative;
  width: 267px;
  height: 400px;
  border-radius: 10px;
  z-index: 10;
  transform: rotateY(0deg);
}

.card-front img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.wrapper .card-back {
  background: #d3d4d8;
  z-index: 1;
  transform: rotateY(180deg);
}

.card-header {
  font-size: 1.2em;
  font-weight: 700;
  padding-bottom: 15px;
}

.card-body {
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.1;
}

.card-body p {
  padding-bottom: 10px;
}
.figure-card{
  padding: 15px;
}

@media (max-width: 968px) {
  .container-coach .wrapper {
    display: flex;
    overflow-x: scroll;
    width: 95vw;
    padding: 0 0 30px 0;
  }
  .container-coach .wrapper .card-container{
    margin-right: 15px;
  }
  .wrapper::-webkit-scrollbar-track {
    background-color:#ecedee;
  }
  .wrapper::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color:#6dc0c8;
  }
  .wrapper::-webkit-scrollbar-thumb:hover{
    background-color:#56999f;
  }
  .wrapper::-webkit-scrollbar{
    width: 2px;
    height: 8px;
  }
}
@media (max-width: 540px) {
  .container-coach .wrapper {
    width: 90vw;
  }
}
@media (max-width: 380px) {
  .container-coach .wrapper {
    max-width: 87vw;
  }
}


</style>
