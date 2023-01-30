import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const userMessageStore = defineStore('counter', 
{
  data() {
    return {
      results: [],
    };
  },
actions: {
    async SendMultiple(values) {
        try {
          console.log(values)

          let Rname = values.ReceiverName.split(',')
          console.log(Rname)

          let Remail = values.ReceiverEmail.split(',')
          console.log(Remail)
            axios.post('http://localhost:8080/SendMultiple', {
              SenderEmail: values.SenderEmail,
              SenderName: values.SenderName,
              ReceiverEmail:Remail,
              ReceiverName: Rname,
              Body: values.Body,
              Subject: values.Subject,

            })
            .then((res) => {
              console.log('This method is being passed')
              console.log(res)
            })
          } catch (error) {
            console.log(error);
          }
    },
    async Send(values){
        try {
            console.log(values)
            axios.post('http://localhost:8080/Send', {
                SenderEmail: values.SenderEmail,
                SenderName: values.SenderName,
                ReceiverEmail: values.ReceiverEmail,
                ReceiverName: values.ReceiverName,
                Body: values.Body,
                Subject: values.Subject,

            })
            } catch (error) {
              console.log(error);
            }     
    },
    async GetListOfStudents(id){
      return axios.get('http://127.0.0.1:3000/v1/classes/' + id + '/students')
    },
    async SendClassMsg(values,students){
      console.log(values)
      console.log(students)

      students.forEach(element => {
        values.ReceiverName += element.firstname+ ','
      });

      students.forEach(element => {
        values.ReceiverEmail += element.email+ ','
      });

      let Rname = values.ReceiverName.split(',')
      console.log(Rname)
      Rname.pop()

      let Remail = values.ReceiverEmail.split(',')
      console.log(Remail)
      Remail.pop()

      try{
        axios.post('http://localhost:8080/SendMultiple', {
          SenderEmail: values.SenderEmail,
          SenderName: values.SenderName,
          ReceiverEmail:Remail,
          ReceiverName: Rname,
          Body: values.Body,
          Subject: values.Subject,

        })
        .then((res) => {
          console.log('This method is being passed')
          console.log(res)
        })
      } catch (error) {
        console.log(error);
      }
      }
    
  }
})
