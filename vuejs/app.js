    //affichage du data message
 let app = new Vue({
    el: '#firstMessage',
    data: {
      message: 'Yep! Comment çà va ?'
    }
  })

//-----------------------------------------------------------------------------------

    //au survol du span, affichage du data message
  let app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

//----------------------------------------------------------------------------------

    //attribution de style à un texte 
 let app3 = new Vue ({
     el: '#app-3',
     data: {
        styleObject: {
          color: 'red',
          fontSize: '150%'
        }
      }
 })
 

//-----------------------------------------------------------------------------------

    //basculer la présence d'un élément
 let app4 = new Vue({
    el: '#app-4',
    data: {
      seen: true
    }
  })

//---------------------------------------------------------------------------------------

    // affichage d'une liste d'éléments
  let app5 = new Vue({
    el: '#app-5',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
    //ajout d'un nouvel item dans todos
  app5.todos.push ({ text: 'New item'})

//-----------------------------------------------------------------------------------------

    //ajout d'un évènement click
  let app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

//------------------------------------------------------------------------------------------

    //liaison entrée formulaire
  let app7 = new Vue({
      el: '#app-7',
      data: {
      message: 'Hello Vue!'
    }
  })

//------------------------------------------------------------------------------------------
