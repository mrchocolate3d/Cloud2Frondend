
<script setup>
import axios from 'axios';
import { defineStore } from 'pinia'
import { userMessageStore } from '@/stores';
import { Form, Field } from 'vee-validate';


async function onSubmit(values){
    console.log(values)
    console.log(values.Class)
    const MessageStore = userMessageStore()
    var studentsList =  await MessageStore.GetListOfStudents(values.Class);
    console.log(studentsList.data.student)

    return await MessageStore.SendClassMsg(values,studentsList.data.student)
    .catch(error => setErrors({ apiError: error }));
    //return await MessageStore.Send(values)
    //.catch(error => setErrors({ apiError: error }));
}
</script>

<template>
    <div>
        <h2>Class Message</h2>
      <Form @submit="onSubmit"  v-slot="{ errors, isSubmitting }">
            <div class="form-group">
                <label>SenderEmail</label>
                <Field name="SenderEmail" class="form-control"  :class="{ 'is-invalid': errors.password } " />
            </div>

            <div class="form-group">
                <label>SenderName</label>
                <Field name="SenderName" class="form-control" :class="{ 'is-invalid': errors.password }" />
            </div>
            <div class="form-group">
                <label>Class</label>
                <Field name="Class" class="form-control" :class="{ 'is-invalid': errors.password } " />
            </div>
            <div class="form-group">
                <label>Body</label>
                <Field name="Body" class="form-control" :class="{ 'is-invalid': errors.password } " />
            </div>
            <div class="form-group">
                <label>Subject</label>
                <Field name="Subject" class="form-control" :class="{ 'is-invalid': errors.password }" />
            </div>                
            <div class="form-group">
                <button class="btn btn-primary" >
                    Send
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
        </Form>
    </div>
</template>