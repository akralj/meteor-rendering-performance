// Generated by CoffeeScript 1.6.2
(function() {
  var itemCount;

  itemCount = 3000;

  this.ractive = new Ractive({
    el: "container",
    template: "#template",
    data: {
      itemCount: itemCount,
      movies: data.slice(0, itemCount),
      numberOfItems: [1000, 5000, 10000],
      sort: function(array, column) {
        array = array.slice();
        return array.sort(function(a, b) {
          if (a[column] < b[column]) {
            return -1;
          } else {
            return 1;
          }
        });
      },
      sortColumn: "name"
    }
  });

  ractive.on({
    sort: function(event, column) {
      return this.set("sortColumn", column);
    },
    changedNumber: function(e) {
      console.log("changed", ractive.data.itemCount);
      return itemCount = document.getElementById("itemCount").value;
    }
  });

  /*
  @LocalCollection = new Meteor.Collection(null)
  
  
  @render = (sortKey = name) ->
    limit = Session.get('numberOfIds')
    $('.result p').remove()
    frag = document.createDocumentFragment()
    LocalCollection.find({},{sort: [[sortKey, 'desc']], limit: limit } ).forEach (e) ->
      a = document.createElement("p")
      a.innerHTML = e.name
      frag.appendChild a
    $(".result").append frag
  
   <select id="itemCount" value="{{itemCount}}">
    {{#numberOfItems}}
      <option value="{{.}}">{{.}}</option>
    {{/numberOfItems}}
   </select>
  */


}).call(this);

/*
//@ sourceMappingURL=app.map
*/
