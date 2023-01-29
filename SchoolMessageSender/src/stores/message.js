import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userMessageStore = defineStore('counter', 
{
actions: {
    async SendMultiple(values) {
        try {
          console.log(values.SenderEmail)
          console.log(values.SenderName)
          console.log(values.ReceiverEmail)
          console.log(values.ReceiverName)
          console.log(values.Body)
          console.log(values.Subject)
          let Remail = values.ReceiverEmail.split(',')
          console.log(Remail)
          let Rname = values.ReceiverEmail.split(',')
          console.log(Rname)

            axios.post('http://localhost/SendMultiple', {
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
              router.push('/usersList');

            })
          } catch (error) {
            console.log(error);
          }
    },
    async Send(values){
        try {
            console.log(values.SenderEmail)
            console.log(values.SenderName)
            console.log(values.ReceiverEmail)
            console.log(values.ReceiverName)
            console.log(values.Body)
            console.log(values.Subject)
            let arr = values.ReceiverEmail.split(',')
            console.log(arr)

            axios.post('http://localhost/Send', {
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
    }
  },
})
