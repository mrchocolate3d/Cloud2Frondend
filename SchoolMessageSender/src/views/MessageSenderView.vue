<script setup>
import axios from 'axios';
import { defineStore } from 'pinia'
import { userMessageStore } from '@/stores';
import { Form, Field } from 'vee-validate';

async function onSubmit(values){
    console.log(values)
    const MessageStore = userMessageStore()
    return await MessageStore.Send(values)
    .catch(error => setErrors({ apiError: error }));
}

async function onMultipleSubmit(values){
    console.log(values)
    const MessageStore = userMessageStore()
    return await MessageStore.SendMultiple(values)
    .catch(error => setErrors({ apiError: error }));
}

async function onClassSubmit(values){
    console.log(values)
    const MessageStore = userMessageStore()
    return await MessageStore.SendMultiple(values)
    .catch(error => setErrors({ apiError: error }));
}
</script>


<script>

export default {
    
  name: "Message",
  props: {
    id: Number,
  },
  data() {
    return {
      results: []
    };
  },
  async mounted(){
    try {
            axios.get('GET ALL TEACHERS EMAIL',{
              headers: { Authorization: `Bearer ${tokenStr}` }
          })
          .then((res) => {
            this.results = res.data.results
            console.log('This method is being passed')
            console.log(res)
          })
        } catch (error) {
          console.log(error);
        }
  } 
};
</script>

<template>
    <div>
        <h2>Message</h2>
        <Form @submit="onSubmit"  :validation-schema="schema" v-slot="{ errors, isSubmitting }">
            <div class="form-group">
                <label>SenderEmail</label>
                <Field name="SenderEmail" class="form-control"  :class="{ 'is-invalid': errors.password } " />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group">
                <label>SenderName</label>
                <Field name="SenderName" class="form-control" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group">
                <label>ReceiverEmail</label>
                <Field name="ReceiverEmail" class="form-control" :class="{ 'is-invalid': errors.password } " />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group">
                <label>ReceiverName</label>
                <Field name="ReceiverName" class="form-control" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group">
                <label>Subject</label>
                <Field name="Subject" class="form-control" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group">
                <label>Body</label>
                <Field name="Body" class="form-control" :class="{ 'is-invalid': errors.password } " />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>

            <div>
                <Field name="teacher" as="select">
                <option value="">Select value</option>
                <option value="..">...</option>
                </Field>                
            </div>

                
            <div class="form-group">
                <button class="btn btn-primary" >
                    Update
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
        </Form>
    </div>

</template>