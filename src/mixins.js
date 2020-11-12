export default  {
    methods : {
      formatearFecha : function(d) {
        console.log(d)
        // let date = new Date(d * 1000).toUTCString();
        let date = new Date(d * 1000).toLocaleString('es-AR', { weekday:'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' }).toLowerCase()
        return date;
      },
      formatearImporte : function(value) {
        return '$' + value;
      },
      toUpperCase(string){
        return string.toUpperCase();
      }
    }
}