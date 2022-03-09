Vue.createApp({
    data() {
        return {
            Word: null,
            Words: [],
            Message: null,
        }
    },

    methods: {
        Submit() {
            this.Words = []
            this.Message = null
            if(this.Word === null || this.Word === ""){
                this.Message = "Input Empty"
                return
            }
            this.Words[0] = this.Word
            this.Words[1] = this.Word.toUpperCase()
            this.Words[2] = this.Word.toLowerCase()
            this.Words[3] = this.UpperCaseFirstLetter(this.Word)
            this.Words[4] = this.UpperCaseLastLetter(this.Word)
            this.Words[5] = this.ReverseWord(this.Word)
        },

        UpperCaseFirstLetter(WordF){
            let letter = WordF.charAt(0).toUpperCase()
            let WordArray = WordF.split("")
            WordArray[0] = letter
            WordF = WordArray.join("")
            return WordF
        },

        UpperCaseLastLetter(WordF){
            let letter = WordF.charAt(WordF.length -1).toUpperCase()
            let WordArray = WordF.split("")
            WordArray[WordArray.length - 1] = letter
            WordF = WordArray.join("")
            return WordF
        },

        ReverseWord(WordF){
            let WordArray = WordF.split("")
            WordArray.reverse()
            WordF = WordArray.join("")
            return WordF
        }
    }
}).mount("#app")