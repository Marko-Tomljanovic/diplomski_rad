<template>
  <VueBotUI
    :messages="messageData"
    :options="botOptions"
    :bot-typing="botTyping"
    @msg-send="messageSendHandler"
  />
</template>

<script>
import { VueBotUI } from "vue-bot-ui";

export default {
  components: {
    VueBotUI,
  },
  data() {
    return {
      makro: "",
      botTyping: false,
      messageData: [
        {
          agent: "bot",
          type: "button",
          text:
            "Dobrodošli na web stranicu ocjeni Majstora! Odaberite jedan od ponuđenih stavki. Ili ako želite u slijedećoj poruci nam posljite svoj upit koji nam stiže na email! Odgovor će doći u rubrici ˇČesta pitanjaˇ", // Required. The message
          disableInput: false,
          options: [
            {
              text: "Registracija korisnika",
              value: "/Registracija",
              action: "url",
            },
            {
              text: "Registracija firme",
              value: "/noviIzvodac",
              action: "url",
            },
            {
              text: "Ocijeni nas :)",
              value: "/ocjenaStranice",
              action: "url",
            },
          ],
        },
      ],
      botOptions: {
        botTitle: "Chatbot ocijeni Majstora",
        inputPlaceholder: "Poruka",
        colorScheme: "#2677a7",
        msgBubbleBgUser: "#b96329",
      },
    };
  },
  methods: {
    messageSendHandler(value) {
      this.marko = value.text;
      this.messageData.push({
        agent: "user",
        type: "text",
        text: value.text,
      });
      this.getResponse();
    },
    createMessage() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.posljiEmail();
          resolve({
            type: "button",
            text:
              "Vaš upit je proslijeđen na email ocijeni Majstora! Ako želite osobno posalti Email to možete učinti na ocjenimajstoraobavjest@gmail.com. Ocjenite nas klikom na sljedeću mogučnost!",
            options: [
              {
                text: "Ocijenite nas :)",
                value: "search",
                action: "postback",
              },
            ],
            disableInput: true,
          });
        }, 1000);
      });
    },
    getResponse() {
      this.botTyping = true;
      this.createMessage().then((response) => {
        const replyMessage = {
          agent: "bot",
          ...response,
        };
        this.inputDisable = response.disableInput;
        this.messageData.push(replyMessage);
        this.botTyping = false;
      });
    },
    posljiEmail() {
      window.Email.send({
        Host: "smtp.gmail.com",
        Username: "ocjenimajstoraobavjest@gmail.com",
        Password: "jedandva3",
        To: "markot@windowslive.com",
        From: "ocjenimajstoraobavjest@gmail.com",
        Subject: "Chatbot kontakt!",
        Body: "Poštovani, <br><br> Kontakt poruka: <br><br>" + this.marko,
      }).then(() => console.log("Email uspješno poslan!"));
    },
  },
};
</script>
