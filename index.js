var app6 = new Vue({
  el: '#app-6',
    
  data: {
    name: '',
    eng_name: ''
  },
  
  methods: {
    showName: function () {
        vocabulary = {
          "а": "a","А": "A",
          "б": "b","Б": "B",
          "в": "v","В": "V",
          "г": "g","Г": "G",
          "д": "d","Д": "D",
          "е": "e","Е": "E",
          "ё": "e","Ё": "E",
          "ж": "g","Ж": "G",
          "з": "z","З": "Z",
          "и": "i","И": "I",
          "к": "k","К": "K",
          "л": "l","Л": "L",
          "м": "m","М": "M",
          "н": "n","Н": "N",
          "о": "o","О": "O",
          "п": "p","П": "P",
          "р": "r","Р": "R",
          "с": "s","С": "S",
          "т": "t","Т": "T",
          "у": "u","У": "U",
          "ф": "f","Ф": "F",
          "х": "h","Х": "H",
          "ц": "c","Ц": "C",
          "ч": "ch","Ч": "CH",
          "ш": "sh","Ш": "SH",
          "щ": "sh","Щ": "SH",
          "ъ": "",
          "ы": "u",
          "ь": "",
          "э": "e","Э": "E",
          "ю": "u","Ю": "U",
          "я": "ya","Я": "YA",
          };
          for (var i = 0; i < this.name.length; i++) {
              if(this.name.charAt(i) in vocabulary){
                  this.eng_name = this.eng_name + vocabulary[this.name.charAt(i)];
                   console.log(this.eng_name)
              } else {
                  this.eng_name = this.eng_name + this.name.charAt(i);
              }
          }
      }
  }
  
  })
  
   
