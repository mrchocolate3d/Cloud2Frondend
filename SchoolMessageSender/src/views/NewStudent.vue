<script setup>
import axios from "axios";
import { defineStore } from "pinia";
import { userMessageStore } from "@/stores";
import { Form, Field } from "vee-validate";

async function onSubmit(values) {
  console.log(values);
  const MessageStore = userMessageStore();
  return await MessageStore.NewStudent(values).catch((error) =>
    setErrors({ apiError: error })
  );
}

</script>

<template>
  <div>
    <h2>New Student</h2>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors, isSubmitting }"
    >
      <div class="form-group">
        <label>Firstname</label>
        <Field
          name="firstname"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <label>Lastname</label>
        <Field
          name="lastname"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <Field
          name="email"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <label>Phone</label>
        <Field
          name="phone"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <label>Class</label>
        <Field
          name="class"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      
      <div class="form-group">
        <button class="btn btn-primary">New Student</button>
      </div>
      <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">
        {{ errors.apiError }}
      </div>
    </Form>
  </div>
</template>
