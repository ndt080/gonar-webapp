<template>
  <section class="container container-contacts" >
    <div class="wrapper">
      <iframe title="г.Минск, ул.Никифорова, д.44"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.4740059338874!2d27.69420541582986!3d53.94108808010808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbceb33aac5c71%3A0xd4e298907c546cfa!2z0YPQuy4g0J3QuNC60LjRhNC-0YDQvtCy0LAgNDQsINCc0LjQvdGB0LogMjIwMTQx!5e0!3m2!1sru!2sby!4v1612549881385!5m2!1sru!2sby"
              class="map shadow"
              frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      <div class="contacts">
        <p class="contacts-header">"Гонар" - белорусский спортивный клуб</p>
        <p class="contacts-body">
          <span style="font-weight: 700">Зал №1:</span> 220141, г.Минск, ул.Никифорова, д.44 <br/>
          <span style="font-weight: 700">Зал №2:</span> 220141, г.Минск, ул.Никифорова, д.19 <br/>
          <span style="font-weight: 700">Время работы:</span> 09:00-13:00, 14:00-18:00 <br/>
          <span style="font-weight: 700">e-mail:</span><a href="mailto:info@knyazhich.club"> info@knyazhich.club</a><br/>
          <span style="font-weight: 700">Тел.:</span> <a href="tel:+375 00 000-00-00">+375 00 000-00-00</a></p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped>
.container-contacts .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.map{
  border-radius: 15px;
  width: 50%;
  height: 250px;
}
.contacts{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 40%;
}
.contacts-header{
  font-size: 1.3em;
  font-weight: 700;
  padding-bottom: 15px;
  text-align: center;
}
@media (max-width: 968px) {
  .map, .contacts{
    width: 100%;
  }
}

</style>
