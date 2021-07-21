<template>
  <modal :modal="modal"
         @close="$emit('close')"
         title="Форма обратной связи"
  >
    <div class="app__modal-slot" slot="content">
      <h3 class="app__modal-h3">Форма обратной связи</h3>
      <form class="app__modal-form" @submit.prevent="onSubmit">
        <div class="app__modal-form-item" :class="{ error: $v.name.$error }">
          <label class="app__modal-label">Имя</label>
          <span class="app__modal-label-error" v-if="!$v.name.required">Заполните поле</span>
          <span class="app__modal-label-error" v-if="!$v.name.minLength">Имя должно содержать больше 4 букв</span>
          <input class="app__modal-input"
                 v-model="name"
                 :class="{ errorinput: $v.name.$error }"
                 @change="$v.name.$touch()"
          >
        </div>
        <div class="app__modal-form-item" :class="{ error: $v.email.$error }">
          <label class="app__modal-label">E-mail</label>
          <span class="app__modal-label-error" v-if="!$v.email.required">Заполните поле</span>
          <span class="app__modal-label-error" v-if="!$v.email.email">Неверный email</span>
          <input class="app__modal-input"
                 v-model="email"
                 :class="{ errorinput: $v.email.$error }"
                 @change="$v.email.$touch()"
          >
        </div>
        <button class="app__modal-btn">Отправить</button>
      </form>
    </div>
  </modal>
</template>



<script>

import { required, minLength, email } from 'vuelidate/lib/validators'

import modal from '@/components/Modal.vue'

export default {
  name: "ModalValidate",
  components: {
    modal
  },
  data: () => ({
    modal: {
      title: 'Модальное окно',
    },
    name: '',
    email: '',
  }),
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)
        this.name = ''
        this.email = ''
        this.$v.$reset()
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.app__modal-form-item .app__modal-label-error {
  display: none;
}

.app__modal-form-item.error .app__modal-label-error {
  display: block;
}

.app__modal-input {
  &.errorinput {
    border: 1px solid $red;
  }
}

</style>